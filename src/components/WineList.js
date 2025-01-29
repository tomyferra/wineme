import Wine from './Wine';
import '../stylesheets/Wines.css';
import WineDataService from '../services/wine-services';
import login from '../services/api-login';
import { useEffect, useState } from 'react';
import NoResults from '../images/NoResults.webp'


function WineList({ IsLoadingWines }) {

  const [wines,setWines] = useState([]);
  const [allwines,setallWines] = useState([]);

  useEffect(() => {
    async function loadWines(){
      let token = sessionStorage.getItem("token");

      if (!token) {
        const email = process.env.REACT_APP_API_USER_EMAIL;
        const password = process.env.REACT_APP_API_USER_PASSWORD;
        const success = await login(email, password);
        if (!success) {
          alert("Login fallido. No se pudieron cargar los vinos.");
          return;
        }
        token = sessionStorage.getItem("token"); // Obtener el token después del login
      }
      WineDataService.getAll()
        .then(response => {
          setWines(response.data);
          setallWines(response.data);
          })
        .catch(error => {
          alert(error);
        });
    }
    loadWines();
  }, []);


  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "" || searchValue.length < 3) {
      setWines(allwines);
      return;
    }

    const results = allwines.filter(wine => {
      const nameExists = wine.Name && typeof wine.Name.toLowerCase === 'function';
      const wineryExists = wine.Winery && typeof wine.Winery.toLowerCase === 'function';
      return (nameExists && wine.Name.toLowerCase().includes(searchValue)) || (wineryExists && wine.Winery.toLowerCase().includes(searchValue));
    });

    setWines(results);
  };


  return (
    <div id="wineList" className="winelist container-fluid">
      <div className="row">
        <div className="container">
          <form className="search-form">
            <input className="form-control inputbar mr-sm-2" type="search" placeholder="Search by name, winery or variety" aria-label="Search" onChange={handleChange}/>
            <button className="btn my-sm-0" type="submit">Search</button>
          </form>
          <div className="row justify-content-center wines-value">
            { IsLoadingWines ?
              null :
              (wines.length>0 ?
                (wines.sort((a, b)=>{return a.Name > b.Name ? 1 : -1}).map( (wine) => (
                  <div className="col col-sm-4 wines-style h-100 pb-5" key={wine._id}>
                    <Wine
                      name={wine.Name}
                      winery={wine.Winery}
                      description={wine.Description}
                      year={wine.Year}
                      variety={wine.Variety}
                      totalratings={wine.Totalqualifications}
                      avgratings={wine.Avgqualifications}
                      region={wine.Region}
                      imgpath={wine.Image}
                      totalscore={wine.Score}
                      identifier={wine._id}
                    />
                  </div>
                )))
                :
                <>
                  <h2 className='noResultsText'>Sorry, no results for your search...</h2>
                  <img className='noResultsImg' src={NoResults} alt="NoResults" />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineList;
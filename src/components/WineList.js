import Wine from './Wine';
import '../stylesheets/Wines.css';
import WineDataService from '../services/wine-services';
import { useEffect, useState } from 'react';
import { TailSpin } from  'react-loader-spinner'

function WineList() {

  const [wines,setWines] = useState([]);
  const [allwines,setallWines] = useState([]);
  const [IsLoading,setIsLoading] = useState(true);

  useEffect(() => {
    async function loadWines(){
      setIsLoading(true);
      WineDataService.getAll()
        .then(response => {
          setWines(response.data);
          setallWines(response.data);
          
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          alert(error);
        });
    }
    setIsLoading(false);
    loadWines();
  }, []);


  const handleChange = (e) =>{
    const results = allwines.filter(wine => {
      if (e.target.value === "") {return wines}
      return wine.Name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setWines(results)
  }

  return (
    <div id="wineList" className="winelist container-fluid">
      <div className="row">
        <div className="container">
          <form class="search-form">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
            <button class="btn-primary btn my-sm-0" type="submit">Search</button>
          </form>
          <div className="row justify-content-center wines-value">
            {IsLoading? 
              <div className="spinner">
                <TailSpin
                  className='spinner'
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div> : 
              wines.map( (wine) => (
                <div className="col col-sm-4 wines-style">
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineList;
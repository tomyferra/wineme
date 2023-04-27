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
          console.log(response.data)
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
      if (e.target.value === "" || e.target.value.length<3) {return wines}
      if (wine.Name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return wine.Name.toLowerCase().includes(e.target.value.toLowerCase())
      }
      return wine.Winery.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setWines(results)
  }

  return (
    <div id="wineList" className="winelist container-fluid">
      <div className="row">
        <div className="container">
          <form className="search-form">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
            <button className="btn-primary btn my-sm-0" type="submit">Search</button>
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
              wines.sort((a, b)=>{return a.Name > b.Name ? 1 : -1}).map( (wine) => (
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
import Wine from './Wine';
import '../stylesheets/Wines.css';
import WineDataService from '../services/wine-services';
import { useEffect, useState } from 'react';
import { Orbit } from '@uiball/loaders'

function WineList() {

  const [wines,setWines] = useState([]);
  const [IsLoading,setIsLoading] = useState(true);
  useEffect(() => {
    async function loadWines(){
      console.log("Is Loading: ",IsLoading);
      console.log("getting wine list")
      WineDataService.getAll()
        .then(response => {
          setWines(response.data);
        })
        .catch(error => {
          console.log(error);
          alert(error);
        });
    }
    console.log("Wine List is ready");
    setIsLoading(false);
    loadWines();
  }, []);




  return (
    <div id="wineList" className="winelist container-fluid">
      <div className="row">
        <div className="container">
          <div className="row justify-content-center wines-value">
            {IsLoading? <Orbit size={35} color="#231F20" /> : wines.map( (wine) => (
                <div className="col col-sm-4 wines-style">
                  <Wine name={wine.Name} winery={wine.Winery} description={wine.Description} year={wine.Year} variety={wine.Variety} totalratings={wine.Totalqualifications} avgratings={wine.Avgqualifications} region={wine.Region} imgpath={wine.Image} totalscore={wine.Score} identifier={wine._id}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineList;
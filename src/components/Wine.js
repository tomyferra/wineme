import React from "react";
import '../stylesheets/Wine.css';
import WineModal from './WineModal';
import WineRecommenderModal from './WineRecommenderModal';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Rate } from 'antd';
import WineDataService from '../services/wine-services';

function Wine ({ name, winery, description, year, variety, totalratings, totalscore, avgratings, region, imgpath, identifier }) {

  const [rating, setRating] = useState(Number(avgratings));
  const [totalReviews, settotalReviews] = useState(Number(totalratings));
  const [score, setScore] = useState(Number(totalscore));
  const [isOpen, setIsOpen] = useState(false);
  const [isRecommenderOpen, setIsRecommenderOpen] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  function generateRecommendation(wineName) {
    setIsRecommenderOpen(true);
    setIsloading(true);
    return fetch(`https://winemefastapi.onrender.com/recommend/?wine_input=${encodeURIComponent(wineName)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: wineName }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la API: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsloading(false)
        return data;
      })
      .catch((error) => {
        console.error("Error al obtener recomendaciones:", error);
        return null;
      });
  }

  function setNewReview (newValue) {
    settotalReviews(totalReviews+1);
    setScore(score+newValue);
    setRating(((score+newValue)/(totalReviews+1)).toFixed(2));
    const newData =  {
      Name:name,
      Winery:winery,
      Variety:variety,
      Description:description,
      Year:year,
      Totalqualifications: totalReviews+1,
      Avgqualifications: (Number((score+newValue)/(totalReviews+1))).toFixed(2),
      Score: Number(score)+ Number(newValue),
      Image: imgpath,
      Region: region
    }

    WineDataService.update(identifier,newData)
      .then(response => {
        console.log(response.data);
      })

  };

  return(
    <div className="winecontainer container my-5">
      <div className="card row flex-row h-100">
          <div className="imagen">
            <img className=" col-lg-4 card-img-start img-fluid p-0" src={imgpath} alt={imgpath} />
          </div>
          <div className="col-lg-8 h-100 card-body text-center">
            <h1 className="card-title">{name}</h1>
            <p className="card-text">{winery}</p>
            <Rate name="half-rating"
              allowHalf
              disabled
              defaultValue={rating}
            />
            <p>Rating: <b>{rating}</b> ({totalReviews})</p>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="btn btn-primary">Show Details</button>
            {isOpen &&
              <Modal show={setIsOpen} >
                <WineModal setNewReview={setNewReview} setIsOpen={setIsOpen} name={name} winery={winery} description={description} year={year} variety={variety} totalratings={totalReviews} avgratings={rating} region={region} imgpath={imgpath} totalscore={totalscore} id={identifier}/>
              </Modal>
            }
            <button onClick={() => generateRecommendation(name)} type="button" className="btn  m-2 btn-primary">Show similar wines</button>
            {isRecommenderOpen &&
              <Modal show={setIsRecommenderOpen} >
                <WineRecommenderModal setIsOpen={setIsRecommenderOpen} setIsLoading={isloading} data={data}/>
              </Modal>
            }
          </div>
      </div>
  </div>
  );
}


export default Wine;
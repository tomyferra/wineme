import React from "react";
import { useState } from "react";
import '../stylesheets/Wine.css';
import { Rating } from '@mui/material';
import WineDataService from '../services/wine-services';
import Tags from './Tags';

function WineModal ({ setIsOpen, name, winery, description, year, variety, totalratings, avgratings, totalscore, region, imgpath, id }) {

  const [rating, setRating] = useState(Number(avgratings));
  const [totalReviews, settotalReviews] = useState(Number(totalratings));
  const [score, setScore] = useState(Number(totalscore));

  function setNewReview (newValue) {

    settotalReviews(Number(totalratings)+1);
    setScore(Number(totalscore)+ Number(newValue));
    setRating((Number((totalscore+newValue)/(totalratings+1))).toFixed(2));  
    const newData =  {
      Name:name,
      Winery:winery,
      Variety:variety,
      Description:description,
      Year:year,
      Totalqualifications: Number(totalratings)+1,
      Avgqualifications: (Number((totalscore+newValue)/(totalratings+1))).toFixed(2),
      Score: Number(totalscore)+ Number(newValue),
      Image: imgpath,
      Region: region
    }

    console.log("New Review",newData);
    WineDataService.update(id,newData)
      .then(response => {
        console.log(response.data);
      })
    //saveNewReview(id,newData);

  };

  return(
    <div className="container modal-container">
        <div className="card row flex-row align-items-center modal-container">
          <div className="col-lg-3 imagenModal">
            <img className="card-img-start-modal img-fluid p-0" src={imgpath} alt="wine cap" />  
          </div>
          <div className="col col-lg-9 card-body">
            <h1 className="card-title-modal">{name}</h1>
            
            <p className="card-text">{winery}</p>
            <Rating name="half-rating" 
              defaultValue={avgratings} 
              precision={0.5} 
              onChange={(event, newValue) => {
                setNewReview(newValue);
              }}
            />
            <p>Rating: <b>{rating}</b> ({totalReviews})</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Year: {year}</li>
              
              <li className="list-group-item">Variety: <Tags tags={variety}/></li>
              <li className="list-group-item">Region: {region}</li>
              <li className="list-group-item">{description}</li>
            </ul>
            <div className="button-close">
              <button
                className="btn btn-primary "
                onClick={() => {
                  setIsOpen(false);
                  window.location.reload();
                }}
              >
                Close
              </button>
            </div>
          </div>
      </div>
  </div>
  );
}


export default WineModal;
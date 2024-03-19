import React from "react";
import '../stylesheets/Wine.css';
import WineModal from './WineModal';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Rating } from '@mui/material';
import { Rate } from 'antd';
import WineDataService from '../services/wine-services';

function Wine ({ name, winery, description, year, variety, totalratings, totalscore, avgratings, region, imgpath, identifier }) {


  const [rating, setRating] = useState(Number(avgratings));
  const [totalReviews, settotalReviews] = useState(Number(totalratings));
  const [score, setScore] = useState(Number(totalscore));
  const [isOpen, setIsOpen] = useState(false);



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
//solo falta cambiar en el modal.

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
          </div>
      </div>
  </div>
  );
}


export default Wine;
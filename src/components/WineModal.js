import React from "react";
import { useState } from "react";
import '../stylesheets/Wine.css';

import Tags from './Tags';
import { Rate } from 'antd';


function WineModal ({ setNewReview, setIsOpen, name, winery, description, year, variety, totalratings, avgratings, totalscore, region, imgpath, id }) {

  // const [rating, setRating] = useState(Number(avgratings));
  // const [totalReviews, settotalReviews] = useState(Number(totalratings));
  // const [score, setScore] = useState(Number(totalscore));



  return(
    <div className="container modal-container">
        <div className="card row flex-row align-items-center modal-container">
          <div className="col-lg-3 imagenModal">
            <img className="card-img-start-modal img-fluid p-0" src={imgpath} alt="wine cap" />
          </div>
          <div className="col col-lg-9 card-body">
            <h1 className="card-title-modal">{name}</h1>

            <p className="card-text">{winery}</p>
            <Rate name="half-rating"
              allowHalf
              allowClear={false}
              defaultValue={avgratings}
              onChange={(newValue) => {
                setNewReview(newValue);
              }}
            />
            <p>Rating: <b>{avgratings}</b> ({totalratings})</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Year: {year}</li>
              <li className="list-group-item">Region: {region}</li>
              <li className="list-group-item">{description}</li>
            </ul>
            <div className="button-close">
              <button
                className="btn btn-primary "
                onClick={() => {
                  setIsOpen(false);
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
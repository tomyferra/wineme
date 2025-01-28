import React from "react";
import '../stylesheets/Wine.css';
import { useState } from "react";
import { Rate } from 'antd';

function WineRecommended ({ name, winery, totalratings, avgratings, imgpath }) {

  const [rating, setRating] = useState(Number(avgratings));
  const [totalReviews, settotalReviews] = useState(Number(totalratings));


  return(
    <div className="winecontainer container my-2">
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

          </div>
      </div>
  </div>
  );
}


export default WineRecommended;
import React from "react";
import '../stylesheets/Wine.css';
import WineModal from './WineModal';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Rating } from '@mui/material';


function Wine ({ name, winery, description, year, variety, totalratings, totalscore, avgratings, region, imgpath, identifier }) {


  const [isOpen, setIsOpen] = useState(false);
  let imagepath = imgpath;
  if (imagepath.includes("/img/")){
    imagepath = window.location.origin + imgpath
  }
  else {
    imagepath=imgpath
    console.log("No es local, el path es", imagepath);
  }


  return(
    <div className="winecontainer container my-5">
      <div className="card row flex-row h-100">
          <div className="imagen">
            <img className=" col-lg-4 card-img-start img-fluid p-0" src={imagepath} alt={imagepath} />  
          </div>
          <div className="col-lg-8 h-100 card-body text-center">
            <h1 className="card-title">{name}</h1>
            <p className="card-text">{winery}</p>
            {/* <Tags tags={variety}/> */}
            <Rating name="read-only" readOnly defaultValue={avgratings} precision={0.1} />
            <p>Rating: <b>{avgratings}</b> ({totalratings})</p>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="btn btn-primary">Show Details</button>
            {isOpen && 
              <Modal show={setIsOpen} >
                <WineModal setIsOpen={setIsOpen} name={name} winery={winery} description={description} year={year} variety={variety} totalratings={totalratings} avgratings={avgratings} region={region} imgpath={imgpath} totalscore={totalscore} id={identifier}/>
              </Modal>
            }
          </div>
      </div>
  </div>
  );
}


export default Wine;
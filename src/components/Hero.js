import React from "react";
import WineMeLogo from '../images/WineMeLogo.webp';
import '../stylesheets/Hero.css';
import WineDataService from '../services/wine-services';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

function Hero () {
  
  const [wines,setWines] = useState(0);
  const [totalQualifications,settotalQualifications] = useState(0);
  let qualifications = 0;
  useEffect(() => {
    async function countWines(){
      WineDataService.getAll()
        .then(response => {
          setWines(response.data.length)
          console.log("renderd");
          qualifications=0;
          for (var i = 0; i < response.data.length; i++) {
            qualifications = response.data[i].Totalqualifications + qualifications;
          }
          settotalQualifications(qualifications);
        })
        .catch(error => {
          console.log(error);
        });
    }
    countWines()
  },[]);

  return(
    <div className="hero-container container-fluid">
      <img src={WineMeLogo} alt="Wine Me Logo" className="WineMeLogo"/>
      <h3>Drink Wine, Learn Wine</h3>
      <div className="container row countUp-container">
        <div className="col col-sm-4 countUp-item">
          <i className="d-flex align-items-center fa-solid fa-wine-glass fa-2xl"></i>
          <div className="px-3 ">
            <CountUp 
              className="counter d-flex align-items-center justify-content-center"
              end={wines}
              delay={1}
              duration={2}
            />
            <p className="d-flex align-items-center">Wines</p>
          </div>
        </div>
        <div className="col col-sm-4 countUp-item">
          <i className="d-flex align-items-center fa-solid fa-star-half-stroke fa-2xl"></i>
          <div className="px-3 ">
            <CountUp 
              className="counter d-flex align-items-center justify-content-center"
              end={totalQualifications}
              delay={1}
              duration={2}
            />
            <p className="d-flex align-items-center">Ratings</p>
          </div>
        </div>
        
      </div>
      <div className="scroll-btn">
        <a href="#wineList">
          <span className="mouse">
            <span>
            </span>
          </span>
        </a>
        <p className="scroll-text">scroll me</p>
      </div>
    </div>
  );
}

export default Hero;
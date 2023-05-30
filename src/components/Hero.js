import React from "react";
import WineMeLogo from '../images/WineMeLogo.webp';
import '../stylesheets/Hero.css';
import CountUp from 'react-countup';
import { TailSpin } from  'react-loader-spinner'

function Hero ({ IsLoading, wineCount, totalQualifications }) {
  

  return(
    <div className="hero-container container-fluid">
      <img src={WineMeLogo} alt="Wine Me Logo" className="WineMeLogo"/>
      <h3>Drink Wine, Rate Wine</h3>
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
        <div className="container-fluid p-0">
          <div className="row countUp-container">
            <div className="col col-sm-4 countUp-item">
              <i className="d-flex align-items-center fa-solid fa-wine-glass fa-2xl"></i>
              <div className="px-3 ">
                <CountUp 
                  className="counter d-flex align-items-center justify-content-center"
                  end={wineCount}
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
            <p className="scroll-text">Explore...</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Hero;
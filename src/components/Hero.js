import React from "react";
import WineMeLogo from '../images/WineMeLogo.webp';
import '../stylesheets/Hero.css';

function Hero () {
  return(
    <div className="hero-container">
      <img src={WineMeLogo} alt="Wine Me Logo" className="WineMeLogo"/>
      <h3>Drink Wine, Learn Wine</h3>
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

import React from "react";
// import { useState } from "react";
// import Malbec from "./Malbec";
import WineMeLogo from '../images/WineMeLogo.webp';
import '../stylesheets/Navbar.css'


function NavigationBar () {
  // const [showVariety, setshowVariety] = useState(true)

  // const ShowVarietyGrapes = (variety) => {

  //   console.log(variety);
  // }


  return (
    <>
    
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#home"><img src={WineMeLogo} alt="logo" className="Logo"/></a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#wineList'>Wines</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#Varietals'>Varietals</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#SocialMedia'>Social Media</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  );
}

export default NavigationBar;
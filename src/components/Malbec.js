
import React from "react";
import '../stylesheets/Malbec.css'
import MalbecPicture from '../images/Malbec.webp';

function Malbec () {
  return (
    <div id="Malbec" className="malbec">
      <img className="malbecImg" src={MalbecPicture} alt="Malbec Grape" ></img>
    </div>
  );
}

export default Malbec;
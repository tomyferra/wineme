import React, { useState } from 'react';
import './Cepas.css'; // Make sure to create a CSS file for styling

import Malbec from '../images/Malbec.jpg';
import CabernetSauvignon from '../images/CabernetSauvignon.jpg';
import CabernetFranc from '../images/CabernetFranc.jpg';
import Bonarda from '../images/Bonarda.jpg';
import Merlot from '../images/Merlot.jpg';
const images = [
  '../images/Malbec.jpg',
  '../images/CabernetSauvignon.jpg',
  '../images/CabernetFranc.jpg',
  '../images/Bonarda.jpg',
  '../images/Merlot.jpg',
  // Add more images as needed
];

const Cepas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-button">Previous</button>
      <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
      <button onClick={nextImage} className="carousel-button">Next</button>
    </div>
  );
};

export default Cepas;
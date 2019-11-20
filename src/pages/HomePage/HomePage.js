import React from 'react';
import './HomePage.scss';

import { arrIMG } from '../../assets/resources/imagesURL';

const randomNum = Math.floor(Math.random() * arrIMG.length);

const HomePage = () => {
   return (
      <div className="home-container">
         <img
            draggable="false"
            src={arrIMG[randomNum]}
            alt="img"
         />
      </div>
   )
}

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

import { arrIMG } from '../../assets/resources/imagesURL';
import './HomePage.scss';

const randomNum = Math.floor(Math.random() * arrIMG.length);

const HomePage = () => {
   return (
      <div className="home-container">
         <div className="home-inner">
            <h3
               className="home-toptext">
               Welcome to <Link to="/">PhoneStore</Link>
            </h3>
            <img
               className="home-img"
               draggable="false"
               src={arrIMG[randomNum]}
               alt="img"
            />
         </div>
      </div>
   )
}

export default HomePage;

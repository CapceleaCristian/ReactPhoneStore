import React from 'react';
import './HomePage.scss';

import { homeImgURL } from '../../assets/resources/imagesURL';

const HomePage = () => {
   return (
      <div className="home-container">
         <div className="container">
            <h1>Welcome, this is Home Page !!</h1>
            <img
               draggable="false"
               src={homeImgURL}
               alt=""
            />
         </div>
      </div>
   )
}

export default HomePage;

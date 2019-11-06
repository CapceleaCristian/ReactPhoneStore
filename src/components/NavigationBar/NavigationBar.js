import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.scss';

const NavigationBar = () => {
   return (
      <nav className="navigationbar-container">
         <div className="container">
            <div className="navigationbar-inner">
               <div className="navigationbar-logo">
                  <Link to="/">Store</Link>
               </div>
               <div className="navigationbar-links">
                  <Link to="/phones">All smartphones</Link>
                  <Link to="/in-cart">In Cart (0) </Link>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default NavigationBar;

import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShippingFast, faLeaf, faPlayCircle, faShoppingBag ,} from '@fortawesome/free-solid-svg-icons';


const FoodWebsite = () => {
 
  return (
    <div className="food-website">
      <nav className="navbar">
        <div className="logo">Foodle</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Offer</li>
          <li>Services</li>
          <li>Menu</li>
          <li>About us</li>
        </ul>
        <div className="auth-buttons">
          <p className='login'>Login</p>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
      <div className="content">
       
      </div>

  
      <div className="content">
        <div className="banner">
          <div className="banner-text">
            <div className="title">All Fast Foods is Available at Foodle</div>
            <div className="text">we are just a click away when you crave for delicious fast food</div>
            <button className="Buy">Buy Now</button>
            
          </div>
          <div className="image-container">
            <img className="image" src="/Images/Sandwich with eggs.png" alt="Fast Food" />
          </div>
     </div>
    </div>

    <div className="features">
          <div className="feature">
            <h3 className="feature-title" >
              <FontAwesomeIcon icon={faTruck}color='#f8dc75' fontSize="50px"/>Fast Delivery</h3>
            <p className="feature-description">The food will be delivered to your home within 1-2 hours of your ordering.</p>
          </div>
          <div className="feature">
            <h3 className="feature-title"> <FontAwesomeIcon icon={faLeaf}color='#f8dc75' fontSize="50px"/>Fresh Food</h3>
            <p className="feature-description">Your food will be delivered 100% fresh to your home.</p>
          </div>
          <div className="feature">
            <h3 className="feature-title"><FontAwesomeIcon icon={faShoppingBag}color='#f8dc75' fontSize="50px"/>Free Delivery</h3>
            <p className="feature-description">Your food delivery is absolutely free. No cost, just order and enjoy.</p>
          </div>
        </div>
    </div>

    

  );
  
};

export default FoodWebsite;


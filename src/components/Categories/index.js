import React from 'react';
import './style.css'; 

const Categories = () => {
  return (
    <div className="categories-container">
        <div className='Headings'>
      <div className="title">
        Best <span className="highlighted">delivered</span> categories
      </div>
      <div className="content">
        <p className="paragraph">
          Here are some of our best distributed categories.<br></br> If you want, you can order from here.
        </p>
      </div>

      </div>

      <div className="image-section">
          <div className="category">
            <img src="Images/Chicken Burger.png" alt="Chicken Burger" />
            <strong>Chicken Burger</strong>
            <p className="order-now">Order Now</p>
          </div>

          <div className="category">
            <img src="Images/Chicken Pizza.png" alt="Chicken Pizza" />
            <strong>Chicken Pizza</strong>
            <p className="order-now">Order Now</p>
          </div>

          <div className="category">
            <img src="Images/French Fries.png" alt="French Fries" />
            <strong>French Fries</strong>
            <p className="order-now">Order Now</p>
          </div>
          </div>
    </div>
  );
};

export default Categories;

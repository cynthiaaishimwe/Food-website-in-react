import React from 'react';
import './style.css';

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="regular">
            <div className="content-container">
                <div className="menu-title">Our <span style={{ color: 'red' }}>Regular</span> Menu</div>
                <div className="menu-description">These are our regular menus. You can order anything you like.</div>
            </div>
            <div className="button-container">
                <button className="see-all-button">See All</button>
            </div>

            </div>

        <div className="image-container">

            <div className="Chicken-burger">
                <div className="menu-item">
                    <img src="Images/Chicken Burger Image.png" alt="Chicken Burger" className="menu-image" />
                    <p>Chicken Burger</p>
                    <div className="price-container">
                        <p>$5.99</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
           </div>  

           <div className="Chicken-Pizza">
                <div className="menu-item">
                    <img src="Images/Chicken Pizza image.png" alt="Chicken Burger" className="menu-image" />
                    <p>"Chicken-Pizza</p>
                    <div className="price-container">
                        <p>$5.99</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
           </div>  


          

           <div className="Chicken-fry">
                <div className="menu-item">
                    <img src="Images/Fried Chicken.png" alt="Chicken Burger" className="menu-image" />
                    <p>Fried Chicken</p>
                    <div className="price-container">
                        <p>$5.99</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
           </div>  

           <div className="Grill-Sandwich">
                <div className="menu-item">
                    <img src="Images/Grilled Sandwich.png" alt="Chicken Burger" className="menu-image" />
                    <p>Grill Sandwich</p>
                    <div className="price-container">
                        <p>$5.99</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
           </div>  

           <div className="Taco-traifi">
                <div className="menu-item">
                    <img src="Images/Taco traifi.png" alt="Chicken Burger" className="menu-image" />
                    <p>Taco traifi</p>
                    <div className="price-container">
                        <p>$5.99</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
           </div>  

           <div className="Noodle-Ramen">
                <div className="menu-item">
                    <img src="Images/Noodle's Ramen.png" alt="Chicken Burger" className="menu-image" />
                    <p>Chicken Burger</p>
                    <div className="price-container">
                        <p>$5.99</p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
           </div>  

           <div class="main-container">
    <div class="single-image-container">
        <img src="Images/Burger-and-Chips.png" alt="Chicken Burger"  class="menu-image chicken-image"  />
        
        </div>
    </div>

    <div class="double-image-container">
        <div class="menu-item">
            <img src="Images/Waffle and Ice cream.png" alt="Waffle and icecream"  class="two-image waffle-image" />
            <img src="Images/MeatBall Salad.png" alt="Dry Chicken" class="two-image salad-image"/>
        </div>
       
    </div> 

</div>



         </div>


    

        
    );
};

export default Menu;

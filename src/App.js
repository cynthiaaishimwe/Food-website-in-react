import React from 'react';
import FoodWebsite from './components/NavBar';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Menu from './components/Menu';


const App = () => {
  return (
    <div className="app">
      <FoodWebsite />
      <Categories/>
      <Menu/>
      <Footer/>
   
     
    </div>
  );
};

export default App;


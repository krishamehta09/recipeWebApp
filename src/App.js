import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import CustomRecipes from './components/customRecipe';
import About from './components/about';
import Contact from './components/Contact';
// import Footer from './footer';
// import RecipePage from './components/Recipepage';

function App() {
  const [search, setSearch] = useState("mango");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4eba66a3";
  const APP_KEY = "33d22d5b041c3d38447666c5a16b9247";

  useEffect(() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(res.data.hits);
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  const onSearchClick = () => {
    getRecipes();
  }

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add the Navbar component at the start */}

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header 
                  search={search} 
                  onInputChange={onInputChange} 
                  onSearchClick={onSearchClick}
                />
                <div className="container">
                  <Recipes recipes={recipes} />
                </div>
              </>
            } 
          />

          <Route 
            path="/about" 
            element={
              <>
                <About />
              </>
            } 
          />

          <Route 
            path="/customRecipe" 
            element={
              <>
                <h1 className='heading'>Custom Recipes</h1>
                
                <CustomRecipes />
              
              </>
            } 
             />
             <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
    
  );
}

export default App;

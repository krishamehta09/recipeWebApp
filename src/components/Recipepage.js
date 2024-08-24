import React from 'react';
import customRecipes from './customRecipeRecipe'; // Adjust the path based on your file structure
import Navbar from './Navbar';

const RecipePage = () => {
    return (
        <div>
            <h1>Our Recipes</h1>
            <Navbar />
            {/* <customRecipes /> This will render the Recipes component */}
        </div>
    );
};

export default RecipePage;

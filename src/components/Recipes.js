
import RecipeItem from "./RecipeItem";
// import React, { useState, useEffect } from 'react';
import React from "react";

const Recipes = (props) =>{
    const {recipes}= props;
    return (
        <div className="card-columns">
            {recipes.map(recipe=><RecipeItem
            key={Math.random()*100}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
            />)}
        </div>
    )
}

export default Recipes;
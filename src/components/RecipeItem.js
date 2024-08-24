import React from "react";
import '../App.css';

const RecipeItem = (props) => {
    const { name, image, ingredientLines }= props;
    return (
        <div id="recipes-containers">
            <div className="recipe-items">
                <img
                    src={image}
                    className="recipe-images"
                />
                <div className="recipe-names">
                    <h5>{name}</h5>
                </div>
                <ul className="recipe-ingredientss">
                    {
                        ingredientLines.map(ingredient =>
                            <li  key={ingredient} >{ingredient}</li>
                        )}
                </ul>
                
            </div>
            </div>
        
    );
}

export default RecipeItem;
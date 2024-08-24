// import React, { useState, useEffect } from 'react';

// const CustomRecipes = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/recipes/')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setRecipes(data);
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             });
//     }, []);

//     return (
//         <div id="recipes-container">
//             {recipes.map(recipe => (
//                 <div className="recipe" key={recipe.id}>
//                     <h2>{recipe.title}</h2>
//                     <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
//                     <p><strong>Instructions:</strong> {recipe.instructions}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CustomRecipes;


import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './customRecipe.css';

const CustomRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/recipes/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const handleAddRecipe = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('ingredients', ingredients);
        formData.append('instructions', instructions);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await Axios.post('http://127.0.0.1:8000/api/recipes/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setRecipes([...recipes, response.data]);
            setTitle('');
            setIngredients('');
            setInstructions('');
            setImage(null);
            setShowForm(false);
        } catch (error) {
            console.error('There was a problem with adding the recipe:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await Axios.delete(`http://127.0.0.1:8000/api/recipes/${id}/`);
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        } catch (error) {
            console.error('There was a problem with deleting the recipe:', error);
        }
    };

    return (
        <div id="recipes-container">
            <div className="button-container">
                <button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Add Recipe'}
                </button>
                {/* <button onClick={() => { 
                    fetchRecipes(); 
                    setShowForm(false); // Hide the form when displaying recipes
                }}>
                    Display Recipes
                </button> */}
            </div>
            {showForm && (
                <div className="add-recipe-form">
                    <h2>Add a New Recipe</h2>
                    <form onSubmit={handleAddRecipe} encType='multipart/form-data'>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Ingredients"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Instructions"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        />
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <button type="submit">Add Recipe</button>
                    </form>
                </div>
            )}
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <div className="recipe" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        {recipe.image && <img src={recipe.image} alt={recipe.title} />}
                        <button  className="delete-button" onClick={() => handleDelete(recipe.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomRecipes;






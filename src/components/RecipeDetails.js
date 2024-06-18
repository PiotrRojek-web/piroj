import React from 'react';
import Typography from "@mui/material/Typography";

const RecipeDetails = ({ recipe }) => {
    if (!recipe) return null;

    return (
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <Typography variant="h4">{recipe.label}</Typography>
            <img src={recipe.image} alt={recipe.label} style={{ width: "100%", maxWidth: "300px" }} />
            <Typography variant="h6" style={{ marginTop: "20px" }}>Ingredients</Typography>
            <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <Typography variant="h6">Nutritional Information</Typography>
            <Typography variant="body2">Calories: {recipe.calories.toFixed(2)}</Typography>
            <Typography variant="body2">Total Weight: {recipe.totalWeight.toFixed(2)} g</Typography>
            <Typography variant="body2">Total Time: {recipe.totalTime} minutes</Typography>
            <Typography variant="h6">Diet Labels</Typography>
            <Typography variant="body2">{recipe.dietLabels.join(', ')}</Typography>
            <Typography variant="h6">Health Labels</Typography>
            <Typography variant="body2">{recipe.healthLabels.join(', ')}</Typography>
            <Typography variant="h6">Cuisine Type</Typography>
            <Typography variant="body2">{recipe.cuisineType.join(', ')}</Typography>
            <Typography variant="h6">Meal Type</Typography>
            <Typography variant="body2">{recipe.mealType.join(', ')}</Typography>
            <Typography variant="h6">Dish Type</Typography>
            <Typography variant="body2">{recipe.dishType.join(', ')}</Typography>
        </div>
    );
};

export default RecipeDetails;

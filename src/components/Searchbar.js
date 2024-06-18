import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RecipeDetails from "./RecipeDetails";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleSearch = () => {
        const appId = "ae7dfde7";
        const appKey = "99e9ba56f065270e65c5ea73785935bd";
        const type = "public";
        const beta = true;

        const url = `https://api.edamam.com/api/recipes/v2?q=${searchTerm}&type=${type}&beta=${beta}&app_id=${appId}&app_key=${appKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.hits.length > 0) {
                    setRecipes(data.hits.map(hit => hit.recipe));
                } else {
                    setRecipes([]);
                }
            })
            .catch(error => {
                console.error("B³¹d podczas pobierania danych:", error);
            });
    };

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div style={{ padding: "20px" }}>
            <TextField
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                fullWidth
                placeholder="Search..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ color: "black", backgroundColor: "lightblue", marginBottom: "20px" }}
            />
            {recipes.length > 0 ? (
                <Grid container spacing={3} wrap="nowrap" style={{ overflowX: "auto" }}>
                    {recipes.map((recipe, index) => (
                        <Grid item key={index} style={{ minWidth: "300px" }}>
                            <Card onClick={() => handleRecipeClick(recipe)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={recipe.image}
                                    alt={recipe.label}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {recipe.label}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Calories: {recipe.calories.toFixed(2)}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Ingredients: {recipe.ingredientLines.length}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Health Labels: {recipe.healthLabels.join(', ')}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="body1">No recipe found</Typography>
            )}
            <RecipeDetails recipe={selectedRecipe} />
        </div>
    );
};

export default Searchbar;

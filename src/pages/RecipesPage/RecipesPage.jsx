import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../../components/card/card.jsx";
import "./RecipesPage.scss";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="recipe">
      <div className="recipe__heading">
        <h1>Discover Flavorful Creations</h1>
        <p>
          Delight in a diverse collection of mouthwatering recipes, curated and
          shared by passionate food enthusiasts.
        </p>
      </div>
      <div className="recipe__list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image_path}
            title={recipe.title}
            description={recipe.description}
            rating={Math.round(recipe.rating)}
            link={`/recipe/${recipe.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;

import React from "react";
import RecipeCard from "../card/card";
import "./recipelist.scss";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <div className="recipe-list__count">
        {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"} found
        matching your ingredients
      </div>
      {recipes.length ? (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            className="recipe-card"
            image={recipe.image_path}
            title={recipe.title}
            description={recipe.description}
            rating={Math.round(recipe.rating)}
            link={`/recipe/${recipe.id}`}
          />
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;

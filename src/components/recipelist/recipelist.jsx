import React from "react";
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
          <div key={recipe.id} className="recipe-list__item">
            <div className="recipe-list__image-container">
              <img
                src={recipe.image_path}
                alt={recipe.title}
                className="recipe-list__image"
              />
            </div>
            <div className="recipe-list__details">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;

import React from 'react';
import './recipelist.scss';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-list__item">
            <img src={recipe.image_path} alt={recipe.title} className="recipe-list__image" />
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

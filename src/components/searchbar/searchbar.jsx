import React, { useState } from "react";
import "./searchbar.scss";

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState(["", "", ""]);

  const handleChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(ingredients);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSubmit}>
        {ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Ingredient ${index + 1}`}
            className="search-bar__input"
          />
        ))}
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

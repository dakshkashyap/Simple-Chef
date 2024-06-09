import React, { useState } from "react";
import "./searchbar.scss";

const SearchBar = ({ onSearch }) => {
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredients = [ingredient1, ingredient2, ingredient3].filter(
      (ingredient) => ingredient
    );
    onSearch(ingredients);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingredient 1"
        value={ingredient1}
        onChange={(e) => setIngredient1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredient 2"
        value={ingredient2}
        onChange={(e) => setIngredient2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredient 3"
        value={ingredient3}
        onChange={(e) => setIngredient3(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

// components/SearchResults.js
import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ searchResults }) => (
  <div className="search-results">
    <ul>
      {searchResults.map((meal) => (
        <div key={meal.idMeal}>
          <Link to={`/meal/${encodeURIComponent(meal.idMeal)}`}>
            {meal.strMeal}
          </Link>
        </div>
      ))}
    </ul>
  </div>
);

export default SearchResults;

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsRef = useRef();

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      const data = await response.json();
      setIngredients(data.meals);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  return (
    <div>
      <div className="btn-group">
        <button
          ref={ingredientsRef}
          className="btn btn-secondary btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Ingredients
        </button>
        <ul className="dropdown-menu">
          {ingredients.map((ingredient) => (
            <li key={ingredient.idIngredient}>
              <Link
                to={`/meals/ingredients/${encodeURIComponent(
                  ingredient.strIngredient
                )}`}
                className="dropdown-item"
              >
                {ingredient.strIngredient}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ingredients;

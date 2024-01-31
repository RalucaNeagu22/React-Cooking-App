import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";

function MealsPage() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMealsByCategory();
  }, [category]);

  const fetchMealsByCategory = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
          category
        )}`
      );
      const data = await response.json();

      // Verificăm dacă avem o proprietate 'meals' și dacă nu este null
      if (data.meals !== null) {
        // Meals found, set the state
        setMeals(data.meals);
      } else {
        // No meals found for the specified category
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <FilterBar />
        <h2>{category}</h2>
        <div className="container row">
          {meals ? (
            meals.map((meal) => (
              <Link to={`/meal/${encodeURIComponent(meal.idMeal)}`}>
                <div
                  key={meal.idMeal}
                  className="col-3 d-flex flex-column gap-2"
                >
                  <h3>{meal.strMeal}</h3>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="d-flex align-items-end"
                    style={{ width: "200px" }}
                  />
                </div>
              </Link>
            ))
          ) : (
            <p>No meals found for {category}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MealsPage;

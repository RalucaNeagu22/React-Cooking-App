import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

function MealPage() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealById();
  }, [idMeal]);

  const fetchMealById = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(
          idMeal
        )}`
      );
      const data = await response.json();

      if (data.meals && Array.isArray(data.meals) && data.meals.length > 0) {
        setMeal(data.meals[0]);
      } else {
        console.error("API returned null or undefined meals property");
      }
    } catch (error) {
      console.error("Error fetching meal by id:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Categories />
        <div className="container row">
          {meal && (
            <div className="col-3 d-flex flex-column gap-2">
              <h2>{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="d-flex align-items-end"
                style={{ width: "200px" }}
              />
              <p>{meal.strInstructions}</p>
              <p>{meal.strCategory}</p>
              <p>{meal.strArea}</p>
              <p>Ingredients:</p>
              <ul>
                {Object.keys(meal)
                  .filter((key) => key.startsWith("strIngredient"))
                  .map(
                    (ingredientKey, index) =>
                      meal[ingredientKey] && (
                        <li key={index}>
                          {`${meal[ingredientKey]}: ${
                            meal[`strMeasure${ingredientKey.slice(-1)}`]
                          }`}
                        </li>
                      )
                  )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MealPage;

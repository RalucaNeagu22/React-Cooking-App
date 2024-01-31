import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import YouTube from "react-youtube";

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
      <div className="d-flex mx-5 gap-5">
        <FilterBar />
        <div className="container mb-5">
          {meal && (
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-row gap-5 mb-5">
                <div>
                  <h2>{meal.strMeal}</h2>
                  <div className="d-flex gap-4">
                    <p className="fw-bold">{meal.strCategory}</p>
                    <p className="fw-bold">{meal.strArea}</p>
                  </div>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="d-flex align-items-end"
                    style={{ maxWidth: "300px" }}
                  />
                </div>

                <div className="d-flex flex-column align-self-end">
                  {meal.strYoutube && (
                    <YouTube videoId={meal.strYoutube.split("v=")[1]} />
                  )}
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="fw-semibold">Ingredients:</p>
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
              <p className="fs-5">{meal.strInstructions}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MealPage;

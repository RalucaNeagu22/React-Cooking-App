import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

function AreasPage() {
  const { area } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMealsByArea();
  }, [area]);

  const fetchMealsByArea = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(
          area
        )}`
      );
      const data = await response.json();

      if (data.meals !== null) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meals by area:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <FilterBar />
      <h2>{area}</h2>
      <div className="container row">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <Link to={`/meal/${encodeURIComponent(meal.idMeal)}`}>
              <div key={meal.idMeal} className="col-3 d-flex flex-column gap-2">
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
          <p>No meals found for {area}</p>
        )}
      </div>
    </div>
  );
}

export default AreasPage;

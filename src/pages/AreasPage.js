import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MealsListPage from "../components/MealsListPage";

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

  return <MealsListPage category={area} meals={meals} />;
}

export default AreasPage;

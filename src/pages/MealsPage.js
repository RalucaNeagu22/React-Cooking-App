import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealsListPage from "../components/MealsListPage";

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

      if (data.meals !== null) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  };

  return <MealsListPage category={category} meals={meals} />;
}

export default MealsPage;

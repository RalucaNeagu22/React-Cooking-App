import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import MealsListPage from "../components/MealsListPage";

function IngredientsPage() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMealsByIngredient();
  }, [ingredient]);

  const fetchMealsByIngredient = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
          ingredient
        )}`
      );
      const data = await response.json();

      if (data.meals !== null) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meals by ingredient:", error);
    }
  };

  return <MealsListPage category={ingredient} meals={meals} />;
}

export default IngredientsPage;

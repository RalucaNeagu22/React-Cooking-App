import React, { useEffect, useState } from "react";
import LatestMeals from "./LatestMeals";
import RandomSlider from "./RandomSlider";

function RandomMeals() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  const fetchRandomMeals = async () => {
    try {
      const responses = await Promise.all(
        Array.from({ length: 9 }, () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        )
      );

      const mealData = await Promise.all(
        responses.map((response) => response.json())
      );

      const flattenedMeals = mealData.flatMap((data) => data.meals);

      const uniqueMeals = Array.from(
        new Set(flattenedMeals.map((meal) => meal.idMeal))
      ).map((id) => {
        return flattenedMeals.find((meal) => meal.idMeal === id);
      });

      setRandom(uniqueMeals);
    } catch (error) {
      console.error("Error fetching random meals:", error);
    }
  };

  return (
    <div className="container">
      <RandomSlider random={random} />

      <LatestMeals random={random} />
    </div>
  );
}

export default RandomMeals;

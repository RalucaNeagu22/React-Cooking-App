import React, { useEffect, useState } from "react";
import Meals from "../components/Meals";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

function Homepage() {
  const [random, setRandom] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  console.log(searchResults);
  return (
    <div>
      <Navbar setSearchResults={setSearchResults} />
      <div className="d-flex">
        <FilterBar />
        <Meals
          meals={searchResults.length > 0 ? searchResults : random}
          sliderMeals={random}
          isRandom={searchResults.length === 0}
        />
      </div>
    </div>
  );
}

export default Homepage;

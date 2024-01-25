import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RandomMealCard from "./RandomMealCard";
import MealThumbnail from "./MealThumbnail";
import MealDetails from "./MealDetails";

function RandomMeals() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  const fetchRandomMeals = async () => {
    try {
      const check = localStorage.getItem("popular");
      if (check) {
        setRandom(JSON.parse(check));
      } else {
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

        localStorage.setItem("popular", JSON.stringify(uniqueMeals));
      }
    } catch (error) {
      console.error("Error fetching random meals:", error);
    }
  };

  return (
    <div className="container">
      <Splide
        options={{
          perPage: 3,
          perMove: 1,
          pagination: false,
          arrows: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {random.map((recipe) => (
          <SplideSlide key={recipe.idMeal}>
            <RandomMealCard recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
      <p className="fs-1">Latest meals</p>
      <div className="row gap-4 mt-5 d-flex justify-content-center">
        {random.map((recipe) => (
          <div key={recipe.idMeal} className="col-3">
            <div className="d-flex gap-3">
              <MealThumbnail recipe={recipe} />
              <MealDetails recipe={recipe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomMeals;

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RandomMealCard from "./RandomMealCard";

function RandomSlider({ random }) {
  return (
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
  );
}

export default RandomSlider;

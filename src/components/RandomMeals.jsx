import React, { useEffect } from "react";

function RandomMeals() {
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  const fetchRandomMeals = async () => {
    const responses = await Promise.all(
      Array.from({ length: 10 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      )
    );
    const mealData = await Promise.all(
      responses.map((response) => response.json())
    );

    console.log(mealData);
  };

  return <div>RandomMeals</div>;
}

export default RandomMeals;

import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./PageNotFound";
import MealsPage from "./MealsPage";
import MealPage from "./MealPage";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/meals/:category" element={<MealsPage />} />
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/meal/:idMeal" element={<MealPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

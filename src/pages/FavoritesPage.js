import React, { useEffect, useState } from "react";
import MealsListPage from "../components/MealsListPage";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return <MealsListPage category="Favorites" meals={favorites} />;
}

export default FavoritesPage;

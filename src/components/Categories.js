import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const categoriesRef = useRef();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <div className="btn-group">
        <button
          ref={categoriesRef}
          className="btn btn-secondary btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu">
          {categories.map((category) => (
            <li key={category.idCategory}>
              <Link
                to={`/meals/${encodeURIComponent(category.strCategory)}`}
                className="dropdown-item"
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;

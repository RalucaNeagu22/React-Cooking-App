import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

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
    <div className="ms-5 p-5 dropdown-menu d-block position-static  rounded-3 shadow overflow-hidden w-280px">
      <h2>Categories</h2>
      <div>
        <ul className="list-unstyled mb-0">
          {categories.map((category) => (
            <li key={category.idCategory}>
              <Link
                to={`/meals/${encodeURIComponent(category.strCategory)}`}
                className="dropdown-item d-flex align-items-center gap-2 py-2"
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

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Areas() {
  console.log("Areas component rendered");
  const [areas, setAreas] = useState([]);
  const areasRef = useRef();

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data = await response.json();
      setAreas(data.meals);
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  return (
    <div>
      <div className="btn-group">
        <button
          ref={areasRef}
          className="btn btn-secondary btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Areas
        </button>
        <ul className="dropdown-menu">
          {areas.map((area) => (
            <li key={area.strArea}>
              <Link
                to={`/meals/areas/${encodeURIComponent(area.strArea)}`}
                className="dropdown-item"
              >
                {area.strArea}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Areas;

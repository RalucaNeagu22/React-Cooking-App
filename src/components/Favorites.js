import React from "react";
import { Link } from "react-router-dom";

function Favorites() {
  return (
    <div>
      <Link to={"/favorites/"}>
        <button
          className="btn btn-secondary btn"
          type="button"
          aria-expanded="false"
        >
          Favorites
        </button>
      </Link>
    </div>
  );
}

export default Favorites;

import Categories from "./Categories";
import Areas from "./Areas";
import Ingredients from "./Ingredients";
import Favorites from "./Favorites";

import React from "react";

function FilterBar() {
  return (
    <div>
      <div className="d-flex flex-column gap-4 mx-5 my-5">
        <Categories />
        <Areas />
        <Ingredients />
        <Favorites />
      </div>
    </div>
  );
}

export default FilterBar;

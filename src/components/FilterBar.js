import Categories from "./Categories";
import Areas from "./Areas";
import Ingredients from "./Ingredients";

import React from "react";

function FilterBar() {
  return (
    <div>
      <div className="d-flex flex-column gap-4 mx-5 my-5">
        <Categories />
        <Areas />
        <Ingredients />
      </div>
    </div>
  );
}

export default FilterBar;

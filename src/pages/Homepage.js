import RandomMeals from "../components/RandomMeals";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Categories />
        <RandomMeals />
        <li>
          <Link to="/*">Contact</Link>
        </li>
      </div>
    </div>
  );
}

export default Homepage;

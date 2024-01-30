import RandomMeals from "../components/RandomMeals";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Categories />
        <RandomMeals />
      </div>
    </div>
  );
}

export default Homepage;

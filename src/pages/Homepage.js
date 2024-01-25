import RandomMeals from "../components/RandomMeals";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <RandomMeals />
      {/* <PopularMeals /> */}
    </div>
  );
}

export default Homepage;

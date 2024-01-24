import LatestMeals from "../components/LatestMeals";
import RandomMeals from "../components/RandomMeals";

function Homepage() {
  return (
    <div>
      <RandomMeals />
      <LatestMeals />
    </div>
  );
}

export default Homepage;

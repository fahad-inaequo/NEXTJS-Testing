import type { NextPage } from "next";
import "animate.css";

const Home: NextPage = () => {
  return (
    <div className="_home_container">
      <div className="animate__pulse">The Earth</div>
      <div className="_home_earth_image" />
    </div>
  );
};

export default Home;

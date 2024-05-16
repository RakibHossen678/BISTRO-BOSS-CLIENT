import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../category/Category";
import Featured from "./Featured/Featured";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-9/12 mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
      <Featured></Featured>
    </div>
  );
};

export default Home;

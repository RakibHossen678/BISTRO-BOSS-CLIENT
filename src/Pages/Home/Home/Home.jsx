import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-9/12 mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;

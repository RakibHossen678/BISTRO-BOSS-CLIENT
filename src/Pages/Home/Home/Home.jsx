import Banner from "../Banner/Banner";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-9/12 mx-auto">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;

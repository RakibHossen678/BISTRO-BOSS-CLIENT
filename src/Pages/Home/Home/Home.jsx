import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonials/Testimonial";
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
      <div className="w-9/12 mx-auto">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;

import Cover from "../../Shared/Cover";
import img1 from "../../../assets/menu/banner3.jpg";
import img2 from "../../../assets/menu/dessert-bg.jpeg";
import img3 from "../../../assets/menu/pizza-bg.jpg";
import img4 from "../../../assets/menu/salad-bg.jpg";
import img5 from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import Title from "../../Shared/Title";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Cover
        header={"OUR MENU"}
        subHeader={"Would you like to try a dish?"}
        bgImg={img1}
      ></Cover>
      <div className="w-9/12 mx-auto">
        <div className="my-20">
          <Title
            Heading={"---Don't miss---"}
            subHeading={"TODAY'S OFFER"}
          ></Title>
          <MenuCategory item={offered}></MenuCategory>
          <div className="text-center my-6">
            <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Cover
            header={"DESSERTS"}
            subHeader={
              "Indulge your senses in a symphony of sweetness with our divine desserts. Each creation is a masterpiece, meticulously crafted to delight your palate and captivate your imagination."
            }
            bgImg={img2}
          ></Cover>
          <div className="w-9/12 mx-auto">
            <div className="my-20">
             <MenuCategory item={dessert}></MenuCategory>
              <div className="text-center my-6">
                <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Cover
            header={"PIZZA"}
            subHeader={
              "Embark on a flavor journey with our classic Margherita, where vibrant San Marzano tomatoes mingle with creamy mozzarella cheese and fragrant basil leaves, all atop a perfectly blistered crust kissed by the flames of our wood-fired oven."
            }
            bgImg={img3}
          ></Cover>
          <div className="w-9/12 mx-auto">
            <div className="my-20">
             <MenuCategory item={pizza}></MenuCategory>
              <div className="text-center my-6">
                <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Cover
            header={"SALADS"}
            subHeader={
              "Elevate your taste experience with our garden-fresh salads, where every bite is a celebration of flavor, color, and vitality. Crafted with the freshest seasonal produce and artisanal ingredients, our salads are a feast for the senses, designed to nourish both body and soul."
            }
            bgImg={img4}
          ></Cover>
          <div className="w-9/12 mx-auto">
            <div className="my-20">
             <MenuCategory item={salad}></MenuCategory>
              <div className="text-center my-6">
                <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Cover
            header={"SOUP"}
            subHeader={
              "Experience the comforting embrace of our hearty chicken noodle soup, a timeless classic that warms the soul with its rich broth, tender chunks of chicken, and al dente noodles, all infused with aromatic herbs and spices."
            }
            bgImg={img5}
          ></Cover>
          <div className="w-9/12 mx-auto">
            <div className="my-20">
              <MenuCategory item={soup}></MenuCategory>
              <div className="text-center my-6">
                <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

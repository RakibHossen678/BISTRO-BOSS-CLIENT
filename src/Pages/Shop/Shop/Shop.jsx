import Cover from "../../Shared/Cover";
import img1 from "../../../assets/shop/banner2.jpg";
import "./Shop.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../Shared/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <div>
        <Cover
          header={"OUR SHOP"}
          subHeader={"Would you like to try a dish?"}
          bgImg={img1}
        ></Cover>
      </div>
      <div className="my-20 w-10/12 mx-auto ">
        <Tabs
          className="text-center border-none"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="border-none">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESERT</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;

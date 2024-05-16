import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularIem = data.filter((item) => item.category === "popular");
        setMenu(popularIem);
      });
  }, []);
  return (
    <div className="my-20">
      <div>
        <Title
          subHeading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        ></Title>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {
          menu.map(item=><MenuItem key={item._id} menu={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopularMenu;

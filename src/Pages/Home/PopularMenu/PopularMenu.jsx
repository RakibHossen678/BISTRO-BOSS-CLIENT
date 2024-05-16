import Title from "../../Shared/Title";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-20">
      <div>
        <Title
          subHeading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        ></Title>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} menu={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-6">
        <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">View Full  Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;

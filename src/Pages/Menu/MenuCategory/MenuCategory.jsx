import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ item, header, subHeader, bgImg }) => {
  console.log(header);
  return (
    <div>
      {header && (
        <Cover header={header} subHeader={subHeader} bgImg={bgImg}></Cover>
      )}

      <div className="grid grid-cols-2 gap-8 w-9/12 mx-auto my-10">
        {item.map((item) => (
          <MenuItem key={item._id} menu={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-6">
        <Link to={`/shop/${header}`}>
          <button className="border-b-2 border-b-black px-6 rounded-lg font-inter hover:border-0 hover:bg-[#1F2937] hover:text-[#BB8506] py-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({item}) => {
    return (
        <div>
             <div className="grid grid-cols-2 gap-8">
                {item.map((item) => (
                  <MenuItem key={item._id} menu={item}></MenuItem>
                ))}
              </div>
        </div>
    );
};

export default MenuCategory;
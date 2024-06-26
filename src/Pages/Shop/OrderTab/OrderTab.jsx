import FoodCard from "../../Shared/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 my-10 gap-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;

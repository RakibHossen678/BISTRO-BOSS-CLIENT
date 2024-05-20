import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { _id, image, recipe, name, price } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `${name} added to your cart`,
            icon: "success",
          });
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="">
      <div className="h-full w-[370px] relative ">
        <figure>
          <img className="w-full h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="text-center max-h-[180px] min-h-[180px] bg-[#F3F3F3] px-2 ">
          <p className="bg-[#111827] font-inter absolute text-white px-3 py-1 right-4 top-5 ">
            ${price}
          </p>
          <h2 className=" text-center text-xl font-inter font-semibold pt-6">
            {name}
          </h2>
          <p className="font-inter text-sm py-2">{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCart}
              className="uppercase text-[#BB8506] font-inter font-medium border-b-[#BB8506] border-b-2 px-4 py-2 rounded-xl hover:border-none hover:bg-[#111827] mb-4"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

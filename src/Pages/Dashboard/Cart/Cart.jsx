import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import Title from "../../Shared/Title";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  let totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="w-9/12 h-[75%]   mx-auto my-10">
      <div>
        <Title Heading={"---My Cart---"} subHeading={"WANNA ADD MORE?"}></Title>
      </div>
      <div className="bg-white shadow-2xl p-10">
        <div className="uppercase flex  justify-between font-cinzel font-semibold items-center ">
          <h1 className="text-2xl">Total orders: {carts.length}</h1>
          <h1 className="text-2xl">total price: ${totalPrice}</h1>
          {carts.length ? (
            <Link to="/dashboard/payment">
              <button className="bg-[#D1A054] text-white px-2 rounded-md">
                Pay
              </button>
            </Link>
          ) : (
            <button disabled={!carts.length} className="bg-[#D1A054] text-white px-2 rounded-md">
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto py-5">
          <table className="table rounded-lg  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cart.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cart.name}</td>
                  <td>${cart.price}</td>
                  <th>
                    <button onClick={() => handleDelete(cart._id)}>
                      <MdOutlineDelete
                        className="text-2xl bg-[#B91C1C] text-white p-1 rounded-md"
                        size={30}
                      />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

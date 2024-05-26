import { MdOutlineDelete } from "react-icons/md";
import Title from "../../Shared/Title";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="w-9/12 h-[75%]   mx-auto my-10">
      <div>
        <Title
          Heading={"MANAGE ALL ITEMS"}
          subHeading={"---Hurry Up!---"}
        ></Title>
      </div>
      <div className="bg-white shadow-2xl p-10">
        <div className="uppercase flex  justify-between font-cinzel font-semibold items-center ">
          <h1 className="text-2xl">Total items: 6</h1>
        </div>
        <div className="overflow-x-auto py-5">
          <table className="table rounded-lg  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className="">
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <FaEdit
                        className="text-2xl bg-[#D1A054] text-white p-1 rounded-md"
                        size={30}
                      />
                    </Link>
                  </td>
                  <th>
                    <button onClick={() => handleDelete(item)}>
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

export default ManageItems;

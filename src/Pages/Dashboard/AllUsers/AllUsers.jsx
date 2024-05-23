import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success(`${user.name} is an Admin Now`);
        refetch()
      }
    });
  };
  return (
    <div className="w-9/12 h-[75%]   mx-auto my-10">
      <div>
        <Title
          Heading={"MANAGE ALL USERS"}
          subHeading={"---How many??---"}
        ></Title>
      </div>
      <div className="bg-white shadow-2xl p-10">
        <div className="uppercase flex  justify-between font-cinzel font-semibold items-center ">
          <h1 className="text-2xl">Total users: ${users.length}</h1>
        </div>
        <div className="overflow-x-auto py-5">
          <table className="table rounded-lg  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="">
                <th></th>
                <th> Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="">
                    {user.role === "admin" ? (
                      <h1 className="w-14 p-1 text-center bg-[#D1A054] text-white  rounded-md">Admin</h1>
                    ) : (
                      <button onClick={() => handleMakeAdmin(user)}>
                        <FaUsers
                          className="text-2xl ml-3 bg-[#D1A054] text-white p-1 rounded-md"
                          size={30}
                        ></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button onClick={() => handleDelete(user._id)}>
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

export default AllUsers;

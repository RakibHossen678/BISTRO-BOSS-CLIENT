import { MdOutlineDelete } from "react-icons/md";
import Title from "../../Shared/Title";



const ManageItems = () => {
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
          <h1 className="text-2xl">Total users: </h1>
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
              {/* {users.map((user, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="">
                    edit
                  </td>
                  <th>
                    <button 
                    // onClick={() => handleDelete(user._id)}
                    >
                      <MdOutlineDelete
                        className="text-2xl bg-[#B91C1C] text-white p-1 rounded-md"
                        size={30}
                      />
                    </button>
                  </th>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageItems;
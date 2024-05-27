// import { MdOutlineDelete } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div className="w-9/12 h-[75%]   mx-auto my-10">
      <div>
        <Title Heading={"---My Cart---"} subHeading={"WANNA ADD MORE?"}></Title>
      </div>
      <div className="bg-white shadow-2xl p-10">
        <div className="uppercase flex  justify-between font-cinzel font-semibold items-center ">
          <h1 className="text-2xl">Total Payments: {payments.length} </h1>
        </div>
        <div className="overflow-x-auto py-5">
          <table className="table rounded-lg  ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="">
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Total Price</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr key={idx}>
                  <td>{payment.email}</td>
                  <td>{payment.transactionId}</td>
                  <td>${payment.price}</td>
                  <th className="font-normal">{new Date(payment.date).toLocaleDateString()}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

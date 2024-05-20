import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/carts?email=${user?.email}`);
      return data;
    },
  });
  return [carts, refetch];
};

export default useCart;

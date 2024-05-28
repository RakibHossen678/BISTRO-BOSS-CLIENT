import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="lg:w-11/12 mx-auto">
      <h2>
        <span className="font-cinzel font-medium text-2xl my-5">Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
    </div>
  );
};

export default UserHome;

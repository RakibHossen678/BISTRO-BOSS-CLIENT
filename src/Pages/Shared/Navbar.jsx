import { Link, NavLink } from "react-router-dom";
import cart from "../../assets/icons8-shopping-cart-64.png";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
const Navbar = () => {
  const [carts] = useCart();

  const { user, logout } = useAuth();
  return (
    <div className="navbar bg-[#1515153b] fixed z-10 px-6 py-2">
      <div className="flex-1">
        <a className="flex flex-col text-white font-cinzel">
          <span className="text-3xl font-bold">BISTRO BOSS</span>
          <span className="text-2xl font-medium">Restaurant</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="space-x-8 menu-horizontal px-1 text-white font-inter items-center font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
            >
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/salad"
              className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
            >
              Our Shop
            </NavLink>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>

          <li>
            <Link to="/dashboard">
              <div className="indicator">
                <span className="indicator-item badge bg-red-500 border-none text-white">
                  {carts.length}
                </span>
                <img className="w-12 rounded-full" src={cart} alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {user ? (
          <div className="flex-none pl-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className=" border-2 p-1 rounded-full">
                  <img
                  className="w-full rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a onClick={() => logout()}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-white space-x-2">
            <Link to="/login">
              <button className="px-6 rounded-lg font-inter bg-[#BB8506] py-3">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className=" px-6 rounded-lg font-inter bg-[#BB8506] py-3">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

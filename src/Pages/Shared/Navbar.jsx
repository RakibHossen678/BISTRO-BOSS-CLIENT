import { Link, NavLink } from "react-router-dom";
import cart from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
// import profile from "../../assets/others/profile.png";
const Navbar = () => {
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
            <img className="w-16" src={cart} alt="" />
          </li>
        </ul>
      </div>
      <div>
        {/* {user ? (
          <div className="flex-none pl-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={profile} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <button>Login</button>
            <button>Login</button>
          </div>
        )} */}
        <div className="text-white space-x-2">
          <Link to='/login'>
            <button className="px-6 rounded-lg font-inter bg-[#BB8506] py-3">
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button className=" px-6 rounded-lg font-inter bg-[#BB8506] py-3">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { FaAd, FaCalendar, FaHome, FaLink, FaList, FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 p-4 min-h-screen  bg-[#D1A054]">
        <div className="flex-1">
          <a className="flex text-center flex-col text-white font-cinzel">
            <span className="text-3xl font-bold">BISTRO BOSS</span>
            <span className="text-2xl font-medium">Restaurant</span>
          </a>
        </div>
        <ul className="font-cinzel font-semibold uppercase">
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaHome></FaHome>
            <NavLink to="/dashboard/useHome">User Home</NavLink>
          </li>
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaCalendar></FaCalendar>
            <NavLink to="/dashboard/reservation">Reservation</NavLink>
          </li>
          {/* <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            
            <NavLink to="/dashboard/payment">Payment History</NavLink>
          </li> */}
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaShoppingCart></FaShoppingCart>
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaAd></FaAd>
            <NavLink to="/dashboard/review">Add Review</NavLink>
          </li>
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaBookBookmark></FaBookBookmark>
            <NavLink to="/dashboard/booking">my booking</NavLink>
          </li>
          <div className="divider"></div>

          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaHome></FaHome>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
            <FaList></FaList>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
            >
              Our Menu
            </NavLink>
          </li>
          <li className="flex items-center space-x-2 hover:text-white py-2 text-lg">
              <FaShop></FaShop>
            <NavLink
              to="/shop/salad"
              className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
            >
              Our Shop
            </NavLink>
          </li>
         
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

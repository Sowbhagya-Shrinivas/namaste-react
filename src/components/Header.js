import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    console.log("Whole Header Render")
    const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-gray-100">
        <div className="logo-container">
          <img className="w-40" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
            <li className="px-4"> <Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery Store</Link></li>
            <li className="px-4">
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              />
            </li>
            <button
              className="px-4"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
}
export default Header;
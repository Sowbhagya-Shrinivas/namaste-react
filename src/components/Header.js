import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    console.log("Whole Header Render")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
              <img
                className="cart"
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              />
            </li>
            <button
              className="login"
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
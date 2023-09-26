import { Link } from "react-router-dom";
import foodLogo from "../../resources/images/foodLogo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log("header");

  // if dependency is not present, useEffect will execute on each component rendering
  // if dependency is empty => [], useEffect will execute on only initial component rendering
  // if dependency has some value => [loginBtn], useEffect wil execute only on when the state will update
  useEffect(() => {
    const v = setTimeout(() => console.log("useEffect"), 2000);
    return () => {
      console.log("unmounting");
      clearTimeout(v);
    };
  });
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={foodLogo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

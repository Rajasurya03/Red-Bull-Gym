import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../components/Auth";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const auth = useAuth();
  const logOut = () => {
    window.localStorage.clear();
    alert("Logged Out Successfully!");
    window.location.href = "./sign-in";
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">RedBull Gym</div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/exercise">Exercise</NavLink>
            </li>
            <li>
              <NavLink to="/bmi">BMI Calculator</NavLink>
            </li>
            <li>
              <NavLink to="#about">About</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

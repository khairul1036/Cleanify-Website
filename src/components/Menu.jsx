import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-primary"
        tabIndex={0}
      >
        Menu
      </button>

      {/* Dropdown Menu */}
      <ul
        className={`menu menu-sm dropdown-content bg-white rounded-box z-20 mt-3 w-52 p-2 shadow ${
          !toggle ? "hidden" : ""
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "bg-orange-500" : "")}
          >
            My Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-food"
            className={({ isActive }) => (isActive ? "bg-orange-500" : "")}
          >
            Add Food
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? "bg-orange-500" : "")}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <button onClick={() => alert("Logging out...")} className="btn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

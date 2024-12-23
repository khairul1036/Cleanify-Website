import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // dark light mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggleMode = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li>
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={handleToggleMode}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="bg-base-100 rounded-t-none p-2 w-48">
                <li>
                  <NavLink to={"/add-service"}>Add Service</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-booking"}>My Booking</NavLink>
                </li>
                <li>
                  <NavLink to={"/manage-services"}>Manage Services</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <div className="flex ">
            <img
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full"
              alt="img"
              src={user?.photoURL}
            />
            <button onClick={logOut} className="btn">
              Logout
            </button>
          </div>
        </>
      ) : (
        <Link to={"/login"}>
          <button className="btn">Login</button>
        </Link>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="flex items-center menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

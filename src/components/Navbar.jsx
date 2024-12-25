import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

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

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-2">
        <div>
          <Link className="text-2xl font-bold">Fixtronics</Link>
        </div>
        <div>
          <ul className="flex items-center menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            {user?.email && (
              <>
                <li>
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="bg-base-100 rounded-t-none p-2 w-40 relative right-1 z-10 top-5">
                      <li>
                        <NavLink to={"/add-service"}>Add Service</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/manage-services"}>
                          Manage Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/my-booking"}>Booked Service</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/service-to-do"}>Service To-Do</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          {/* light-dark mode button */}
          <div>
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
          </div>
          {user?.email ? (
            <div className="flex gap-5">
              <button
                onClick={logOut}
                className="relative group text-3xl"
              >
                <IoIosLogOut />

                {/* Logout text - hidden by default, shown on hover */}
                <span className="absolute text-xs left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Logout
                </span>
              </button>
              <img
                referrerPolicy="no-referrer"
                className="w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="img"
                src={user?.photoURL}
              />
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

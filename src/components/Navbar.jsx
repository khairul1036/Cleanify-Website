import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
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
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <NavLink to={"/a"}>Link 1</NavLink>
                </li>
                <li>
                  <NavLink to={"/b"}>Link 2</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <div className="flex ">
            <img
              className="w-12 h-12 rounded-full"
              alt="Tailwind CSS Navbar component"
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
          <ul className="flex items-center menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

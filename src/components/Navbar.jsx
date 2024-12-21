import React from "react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logOut } = useAuth();
  return <div onClick={logOut}>nav</div>;
};

export default Navbar;

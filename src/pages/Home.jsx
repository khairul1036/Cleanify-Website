import React from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Carousel/>
      </div>
    </>
  );
};

export default Home;

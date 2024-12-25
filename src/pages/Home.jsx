import React from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Carousel/>
      </div>
      <div>
        <AboutUs/>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import PopularServices from "../components/PopularServices";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel />
      <AboutUs />
      <PopularServices/>
      <WhyChooseUs/>
    </>
  );
};

export default Home;

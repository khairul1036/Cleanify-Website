import React from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import PopularServices from "../components/PopularServices";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWorks from "../components/HowWorks";
import Testimonial from "../components/Testimonial";

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
      <HowWorks/>
      <Testimonial/>
    </>
  );
};

export default Home;

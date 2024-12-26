import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import PopularServices from "../components/PopularServices";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWorks from "../components/HowWorks";
import Testimonial from "../components/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Home || Cleanify</title>
      </Helmet>
      <div data-aos="zoom-in">
        <Carousel />
      </div>
      <div data-aos="fade-up">
        <AboutUs />
      </div>
      <div data-aos="zoom-in-up">
        <PopularServices />
      </div>
      <div data-aos="flip-left">
        <WhyChooseUs />
      </div>
      <div data-aos="fade-right">
        <HowWorks />
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <Testimonial />
      </div>
    </>
  );
};

export default Home;

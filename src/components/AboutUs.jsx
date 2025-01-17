import React from "react";
import aboutPic from "../assets/images/about-image.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { LuPaintbrush } from "react-icons/lu";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl md:flex items-center mx-auto px-5 pt-14">
      <div className="md:w-1/2">
        <img className="rounded-lg" src={aboutPic} alt="img" />
        <div className="bg-amber-500 w-2/4 md:w-1/4 flex justify-center items-center text-white rounded-xl gap-1 py-2 relative -top-14">
          <GrUserExpert className="text-4xl pl-5 w-1/2" />
          <h1 className="font-bold">10 Years Of Experience</h1>
        </div>
      </div>
      <div className="md:w-1/2 space-y-5 md:space-y-8">
        <div className="text-center md:text-left mb-10">
          <span className="text-blue-400 bg-gray-100 dark:bg-blue-200 dark:text-gray-950 px-5 py-1 rounded-full">
            <LuPaintbrush className="inline-block mr-2" />
            About Us
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200">
          Transforming spaces with expert care
        </h1>
        <p className="md:text-lg">
          With customized solutions tailored to your specific needs, we ensure
          your home or business is spotless and well-maintained. Using
          eco-friendly products and proven techniques, we bring a fresh, clean
          look.
        </p>
        <ul className="space-y-4 grid md:grid-cols-2">
          <li className="flex items-center text-gray-600 dark:text-gray-200">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Highly trained professionals
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-200">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Eco-friendly products
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-200">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Flexible scheduling
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-200">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Free project sample
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-200">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Tailored cleaning solutions
          </li>
          <li className="flex items-center text-gray-600 dark:text-gray-200">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Customer-centered approach
          </li>
        </ul>
        <button className="btn bg-blue-600 text-lg text-white border-none hover:bg-amber-500">
          Get A Quote <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

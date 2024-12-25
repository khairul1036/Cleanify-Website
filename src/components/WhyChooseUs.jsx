import React from "react";
import aboutPic from "../assets/images/about-image.jpg";
import whyChooPic2 from "../assets/images/why-choose-img-2.jpg";
import whyChooPic1 from "../assets/images/why-choose-img-1.jpg";
import { GrUserExpert } from "react-icons/gr";
import { LuPaintbrush } from "react-icons/lu";
import { IoMdClipboard } from "react-icons/io";
import { RiBrush3Fill } from "react-icons/ri";
import { IoBedSharp } from "react-icons/io5";
import { GiStabbedNote } from "react-icons/gi";



const WhyChooseUs = () => {
  return (
    <div className="md:flex items-center mx-auto px-5 pt-14">
      <div className="md:w-1/2 space-y-5 md:space-y-8">
        <div className="text-center md:text-left mb-10">
          <span className="text-blue-400 bg-gray-100 dark:bg-blue-200 dark:text-gray-950 px-5 py-1 rounded-full">
            <LuPaintbrush className="inline-block mr-2" />
            Why Choose Us
          </span>
        </div>
        <h1 className="text-3xl md:mr-10 md:text-5xl font-bold text-gray-700 dark:text-gray-200">
          Discover the difference with our cleaning
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mr-5">
          <div className="space-y-2">
            <IoMdClipboard className="text-7xl bg-gray-100 p-2 text-blue-500 rounded-xl dark:bg-gray-700"/>
            <h1 className="flex items-center text-2xl gap-2 text-gray-700 dark:text-gray-300 font-semibold">
              Experienced Professionals
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Our team is highly trained, bringing years of expertise.
            </p>
          </div>
          <div className="space-y-2">
            <RiBrush3Fill  className="text-7xl bg-gray-100 p-2 text-blue-500 rounded-xl dark:bg-gray-700"/>
            <h1 className="flex items-center text-2xl gap-2 text-gray-700 dark:text-gray-300 font-semibold">
            Satisfaction Guarantee
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
            Your satisfaction is our top priority. We strive for perfection in every job.
            </p>
          </div>
          <div className="space-y-2">
            <IoBedSharp className="text-7xl bg-gray-100 p-2 text-blue-500 rounded-xl dark:bg-gray-700"/>
            <h1 className="flex items-center text-2xl gap-2 text-gray-700 dark:text-gray-300 font-semibold">
            Affordable Rates
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
            We offer competitive pricing on without compromising quality.
            </p>
          </div>
          <div className="space-y-2">
            <GiStabbedNote className="text-7xl bg-gray-100 p-2 text-blue-500 rounded-xl dark:bg-gray-700"/>
            <h1 className="flex items-center text-2xl gap-2 text-gray-700 dark:text-gray-300 font-semibold">
            Reliable & Trustworthy
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
            You can count on us to be punctual, reliable on respectful of your space.
            </p>
          </div>

        </div>
      </div>

      <div className="md:w-1/2 mt-10 relative">
        <img className="hidden md:block mx-auto rounded-full border-t-[20px] border-blue-500 absolute top-80 right-[480px]" src={whyChooPic2} alt="img" />
        <img className="mx-auto rounded-full border-t-[25px] border-blue-500" src={whyChooPic1} alt="img" />
      </div>
    </div>
    
  );
};

export default WhyChooseUs;

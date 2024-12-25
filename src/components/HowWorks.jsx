import React from "react";
import { LuPaintbrush } from "react-icons/lu";

const HowWorks = () => {
  return (
    <div className="bg-blue-600 rounded-2xl mt-10">
      <div className="text-center pt-14">
        <span className="text-blue-400 bg-white dark:bg-blue-200 dark:text-gray-950 px-5 py-1 rounded-full">
          <LuPaintbrush className="inline-block mr-2" />
          How It Works
        </span>
      </div>
      <div className="text-center flex justify-center items-center py-5">
        <h1 className="md:w-2/5 px-5 text-3xl md:text-5xl font-bold text-white">
          Get amazing cleaning in 3 simple steps
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 max-w-screen-xl mx-auto space-y-10 md:space-y-0 py-10">
        <div className="text-center">
          <div className="indicator">
            <img
              className="w-full rounded-full"
              src="https://demo.awaikenthemes.com/netto/wp-content/uploads/2024/11/how-work-img-1.jpg"
              alt="img"
            />
            <span className="indicator-item font-bold bg-white text-blue-600 border-none badge badge-secondary">
              01
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-white">
            Provide A Details
          </h1>
          <p className="text-gray-100 px-10">
            Choose from a variety of services, such as deep cleaning, regular
            maintenance, move-in/move-out cleaning
          </p>
        </div>

        <div className="text-center">
          <div className="indicator">
            <img
              className="w-full rounded-full"
              src="https://demo.awaikenthemes.com/netto/wp-content/uploads/2024/11/how-work-img-2.jpg"
              alt="img"
            />
            <span className="indicator-item font-bold bg-white text-blue-600 border-none badge badge-secondary">
              02
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-white">
            Schedule Your Service
          </h1>
          <p className="text-gray-100 px-10">
            Choose a convenient date and time for your cleaning. Allowing you to
            select the best time for your schedule.
          </p>
        </div>

        <div className="text-center">
          <div className="indicator">
            <img
              className="w-full rounded-full"
              src="https://demo.awaikenthemes.com/netto/wp-content/uploads/2024/11/how-work-img-3.jpg"
              alt="img"
            />
            <span className="indicator-item font-bold bg-white text-blue-600 border-none badge badge-secondary">
              03
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-white">Satisfaction</h1>
          <p className="text-gray-100 px-10">
            Our professional cleaners will arrive on time and provide
            exceptional service, leaving your home clean and ready.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;

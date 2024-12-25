import React from "react";
import { LuPaintbrush } from "react-icons/lu";

const Testimonial = () => {
  return (
    <div className="my-6 font-sans max-w-6xl mx-auto">
      <div className="text-center pt-14">
        <span className="text-blue-400 bg-gray-100 dark:bg-blue-200 dark:text-gray-950 px-5 py-1 rounded-full">
          <LuPaintbrush className="inline-block mr-2" />
          Our Testimonial
        </span>
      </div>
      <div className="text-center flex justify-center items-center py-5">
        <h1 className="md:w-2/4 text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200">
          Shining feedback from satisfied customers
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
        {/* Testimonial 1 */}
        <div className="rounded-md">
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              alt="Client 1"
              className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
            />
            <div className="mt-4">
              <h4 className="text-xl font-extrabold text-gray-700 dark:text-gray-200">
                John Doe
              </h4>
              <p className="text-sm text-blue-600 font-bold mt-1">
                CEO, Company
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>

          <div className="flex justify-center space-x-1 mt-4">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 fill-[${index < 3 ? "#007bff" : "#CED5D8"}]`}
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="rounded-md">
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-3.webp"
              alt="Client 2"
              className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
            />
            <div className="mt-4">
              <h4 className="text-xl font-extrabold text-gray-700 dark:text-gray-200">
                Mark Adair
              </h4>
              <p className="text-sm text-blue-600 font-bold mt-1">
                CEO, Company
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>

          <div className="flex justify-center space-x-1 mt-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 fill-[${index < 4 ? "#007bff" : "#CED5D8"}]`}
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="rounded-md">
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-4.webp"
              alt="Client 3"
              className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
            />
            <div className="mt-4">
              <h4 className="text-xl font-extrabold text-gray-700 dark:text-gray-200">
                Simon Konecki
              </h4>
              <p className="text-sm text-blue-600 font-bold mt-1">
                CEO, Company
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              The service was amazing. I never had to wait that long for my
              food. The staff was friendly and attentive, and the delivery was
              impressively prompt.
            </p>
          </div>

          <div className="flex justify-center space-x-1 mt-4">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 fill-[${index < 4 ? "#007bff" : "#CED5D8"}]`}
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

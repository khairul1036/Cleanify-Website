import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const PopularServiceCard = ({ service }) => {
  const {
    _id,
    provider,
    title,
    createDate,
    price,
    photoUrl,
    location,
    description,
    req_count,
  } = service;
  return (
    <div className="bg-white dark:bg-slate-700 mx-auto p-5 rounded-lg">
      <img
        className="lg:w-96 h-60 mx-auto object-cover rounded-lg"
        src={photoUrl}
        alt="img"
      />
      <div className="space-y-2 pt-5">
        <h1 className="text-xl md:text-3xl font-bold text-gray-700 dark:text-gray-200">
          {title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description.substring(0, 100)}....
        </p>
        <h2 className="font-bold text-gray-700 dark:text-gray-200">
          Provider:
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <img
              className="w-14 h-14 rounded-full"
              src={provider?.photo}
              alt="img"
            />
            <div className="text-gray-500 dark:text-gray-300">
              <p>Name: {provider?.name}</p>
              <p>Area: {location}</p>
            </div>
          </div>
          <h1 className="font-semibold text-3xl text-gray-800 dark:text-gray-200">
            ${price}
          </h1>
        </div>
        <div className="text-center">
          <Link to={`/services/${_id}`}>
            <button className="w-full btn bg-blue-600 text-lg text-white border-none hover:bg-amber-500">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;

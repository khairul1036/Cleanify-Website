import React, { useEffect, useState } from "react";
import { LuPaintbrush } from "react-icons/lu";
import PopularServiceCard from "./PopularServiceCard";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";
import NoDataFound from "./NoDataFound";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const { loading, setLoading } = useAuth();

  // Fetching popular 6 services 
  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/popular-services`
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllServices();
  }, [setLoading]);

  return (
    <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl mt-10">
      <div className="text-center pt-14">
        <span className="text-blue-400 bg-white dark:bg-blue-200 dark:text-gray-950 px-5 py-1 rounded-full">
          <LuPaintbrush className="inline-block mr-2" />
          Popular Services
        </span>
      </div>
      <div className="text-center flex justify-center items-center py-5">
        <h1 className="md:w-2/5 text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-200">
          Our range of specialized cleaning services
        </h1>
      </div>
      {/* 2 column layout card */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 py-14 px-5 gap-5">
        {/* Display Services */}
        {loading ? (
          <LoadingSpinner />
        ) : services.length === 0 ? (
          <NoDataFound/>
        ) : (
          services.map((service) => (
            <PopularServiceCard key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularServices;

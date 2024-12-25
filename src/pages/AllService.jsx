import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import { IoSearchSharp } from "react-icons/io5";
import NoDataFound from "../components/NoDataFound";

const AllService = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const { loading, setLoading } = useAuth();

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchAllService = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching
        const { data } = await axiosSecure.get(`/services?page=${currentPage}&size=${itemsPerPage}&search=${search}`);
        setServices(data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching services:", error); // Handle error if any
      } finally {
        setLoading(false); // Set loading state to false once the request completes
      }
    };

    fetchAllService();
  }, [currentPage,itemsPerPage,search, setLoading]); // Re-run the effect when search changes

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  //  handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
        <div>
          {/* Search Form */}
          <div className="flex flex-col justify-center items-center gap-5">
            <form>
              <div className="flex items-center p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 dark:bg-gray-800 border-gray-600">
                <IoSearchSharp className="text-2xl" />

                <input
                  className="px-2 py-2 placeholder-gray-500 bg-white dark:bg-gray-800 outline-none focus:placeholder-transparent"
                  type="text"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter Service Title"
                  aria-label="Enter Service Title"
                />
              </div>
            </form>
          </div>

          {/* Display Services */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 gap-5 md:gap-8 mt-8">
              {services.length === 0 ? (
                <NoDataFound />
              ) : (
                services.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))
              )}
            </div>
          )}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllService;

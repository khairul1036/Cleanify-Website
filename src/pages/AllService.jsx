import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const AllService = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    const fetchAllService = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching
        const { data } = await axiosSecure.get(`/services?search=${search}`);
        setServices(data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching services:", error); // Handle error if any
      } finally {
        setLoading(false); // Set loading state to false once the request completes
      }
    };

    fetchAllService();
  }, [search, setLoading]); // Re-run the effect when search changes

  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            <form>
              <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter Job Title"
                  aria-label="Enter Job Title"
                />

                <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                  Search
                </button>
              </div>
            </form>
          </div>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.length === 0 ? (
                  <p>No Data</p>
                ) : (
                  services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))
                )}
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default AllService;

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const SingleServiceDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const [service, setService] = useState([]);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  // Fetching single data
  useEffect(() => {
    fetchAllService();
  }, [id]);

  const fetchAllService = async () => {
    try {
      const { data } = await axiosSecure.get(`/services/${id}`);
      setService(data);
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  const {
    _id,
    provider,
    title,
    createDate,
    price,
    photoUrl,
    location,
    description,
  } = service;

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Book now data handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const instructions = form.instructions.value;
    const userAddress = form.address.value;

    if (!userAddress) {
      return toast.error("Address is required");
    }

    const bookingData = {
      title,
      userInfo: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
      provider,
      instructions: 'N/A',
      userAddress,
      price,
      location,
      photoUrl,
      bookingAt: new Date(),
      serviceStatus: "Pending",
    };

    try {
      await axiosSecure.post("/booking-request", bookingData);
      form.reset();
      toast.success("Service booking request successfully");
      navigate("/my-booking");
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Service Details || Cleanify</title>
      </Helmet>
      <div className="rounded-lg my-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-20 bg-blue-50 dark:bg-gray-800 rounded-lg p-5">
          <div>
            {/* Service Image */}
            <img
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-lg"
              src={photoUrl}
              alt="Service"
            />
          </div>

          <div className="mt-6">
            {/* Service Name and Description */}
            <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
              {title}
            </h2>
            <p className=" mt-3 text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>

            {/* Service Price */}
            <p className="mt-4 text-2xl text-gray-700 dark:text-gray-200 font-semibold">
              Price: ${price}
            </p>

            {/* Provider Information */}
            <div className="provider-info mt-6 border-t pt-6">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                Service Provider
              </h3>
              <div className="flex items-center mt-4">
                {/* Provider Image */}
                <img
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover"
                  src={provider?.photo}
                  alt="Provider"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-700 dark:text-gray-200">
                    {provider?.name}
                  </p>
                  <p className="text-sm ">Area: {location}</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={toggleModal}
                className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-lg w-full">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                  Book Service
                </h2>
                <button
                  onClick={toggleModal}
                  className="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                >
                  X
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Service Image */}
                <img
                  referrerPolicy="no-referrer"
                  className="w-28 h-20 object-cover rounded-md mb-4"
                  src={photoUrl}
                  alt="Service Image"
                />

                {/* Service Id */}
                <label className="text-gray-700 dark:text-gray-200" htmlFor="">
                  Service Id:
                </label>
                <input
                  type="text"
                  value={_id}
                  disabled={true}
                  className="w-full p-2 border dark:border-gray-500 dark:bg-gray-600 mb-4 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                  placeholder="Service ID"
                />

                {/* Service Name */}
                <label className="text-gray-700 dark:text-gray-200" htmlFor="">
                  Service Title:
                </label>
                <input
                  type="text"
                  value={title}
                  disabled={true}
                  className="w-full p-2 border mb-4 dark:border-gray-500 dark:bg-gray-600 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                  placeholder="Service Name"
                />

                <div className="flex items-center gap-2">
                  {/* Provider Name */}
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor=""
                    >
                      Provider Name:
                    </label>
                    <input
                      type="text"
                      value={provider?.name}
                      disabled={true}
                      className="w-full p-2 border mb-4 dark:border-gray-500 dark:bg-gray-600 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                      placeholder="Provider Name"
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor=""
                    >
                      Provider Email:
                    </label>
                    <input
                      type="email"
                      value={provider?.email}
                      disabled={true}
                      className="w-full p-2 border dark:border-gray-500 dark:bg-gray-600 mb-4 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor=""
                    >
                      Your Name:
                    </label>
                    <input
                      type="text"
                      value={user?.displayName}
                      disabled={true}
                      className="w-full p-2 border dark:border-gray-500 dark:bg-gray-600 mb-4 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    {/* User Info */}
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor=""
                    >
                      Your Email:
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      disabled={true}
                      className="w-full p-2 border dark:border-gray-500 dark:bg-gray-600 mb-4 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                {/* Date Picker */}
                {/* <div className="mb-4">
                <DatePicker
                  className="w-full p-2 border rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select Service Date"
                />
              </div> */}

                {/* User Address */}
                <input
                  className="w-full p-2 border text-gray-800 dark:text-gray-100 dark:border-gray-500 dark:bg-gray-600 border-gray-300 mb-4 rounded-md bg-gray-50"
                  placeholder="Write your address"
                  name="address"
                />

                {/* Special Instructions */}
                <textarea
                  className="w-full p-2 border text-gray-800 dark:text-gray-100 dark:border-gray-500 dark:bg-gray-600 border-gray-300 mb-4 rounded-md bg-gray-50"
                  name="instructions"
                  placeholder="Any special Instructions"
                  rows="3"
                ></textarea>

                {/* Price */}
                <input
                  type="text"
                  value={`$${price}`}
                  disabled={true}
                  className="w-full p-2 border dark:border-gray-500 dark:bg-gray-600 mb-4 rounded-md hover:cursor-not-allowed bg-gray-200 text-gray-700 dark:text-gray-200"
                  placeholder="Price"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition duration-300"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleServiceDetails;

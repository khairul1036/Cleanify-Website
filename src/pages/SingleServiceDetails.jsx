import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../hooks/useAxiosSecure";

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
    const bookingData = {
      title,
      userInfo: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
      provider,
      instructions,
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
    <div className="max-w-4xl mx-auto  shadow-lg rounded-lg p-6 border-t mt-10">
      <div className="service-details">
        {/* Service Image */}
        <img
          referrerPolicy="no-referrer"
          className="w-full h-64 object-cover rounded-lg"
          src={photoUrl}
          alt="Service"
        />

        <div className="mt-6">
          {/* Service Name and Description */}
          <h2 className="text-3xl font-semibold ">{title}</h2>
          <p className=" mt-3 text-sm">{description}</p>

          {/* Service Price */}
          <p className="mt-4 text-2xl font-semibold">
            Price: <span className="text-green-600">{`$${price}`}</span>
          </p>

          {/* Provider Information */}
          <div className="provider-info mt-6 border-t pt-6">
            <h3 className="text-xl font-medium ">Service Provider</h3>
            <div className="flex items-center mt-4">
              {/* Provider Image */}
              <img
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-full object-cover"
                src={provider?.photo}
                alt="Provider"
              />
              <div className="ml-4">
                <p className="font-semibold ">{provider?.name}</p>
                <p className="text-sm ">{location}</p>
                <p className="text-sm ">Email: {provider?.email}</p>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={toggleModal}
              className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold  mb-4">Book Service</h2>
              <button onClick={toggleModal} className="text-2xl font-semibold ">
                X
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Service Id */}
              <input
                type="text"
                value={_id}
                disabled={true}
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Service ID"
              />

              {/* Service Name */}
              <input
                type="text"
                value={title}
                disabled={true}
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Service Name"
              />

              {/* Service Image */}
              <img
                referrerPolicy="no-referrer"
                className="w-20 h-20 object-cover rounded-md mb-4"
                src={photoUrl}
                alt="Service Image"
              />

              {/* Provider Name */}
              <input
                type="text"
                value={provider?.name}
                disabled={true}
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Provider Name"
              />

              {/* User Info */}
              <input
                type="email"
                value={user?.email}
                disabled={true}
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Your Email"
              />
              <input
                type="text"
                value={user?.displayName}
                disabled={true}
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Your Name"
              />

              {/* Date Picker */}
              <div className="mb-4">
                <DatePicker
                  className="w-full p-2 border rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select Service Date"
                />
              </div>

              {/* User Address */}
              <input
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Your address"
                name="address"
              />

              {/* Special Instructions */}
              <textarea
                className="w-full p-2 border mb-4 rounded-md"
                name="instructions"
                placeholder="Special Instructions"
                rows="3"
              ></textarea>

              {/* Price */}
              <input
                type="text"
                value={`$${price}`}
                disabled={true}
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Price"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleServiceDetails;

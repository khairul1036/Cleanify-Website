import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SingleServiceDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const [service, setService] = useState([]);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  // fetching single data
  useEffect(() => {
    fetchAllService();
  }, [id]);

  const fetchAllService = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/services/${id}`);
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
    req_count,
  } = service;

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // book now data handle
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
      await axios.post("http://localhost:5000/booking-request", bookingData);
      form.reset();
      toast.success("Service booking request successfully");
      navigate("/my-booking");
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Service Image */}
      <img
        referrerPolicy="no-referrer"
        className="w-full h-64 object-cover rounded-md"
        src={photoUrl}
        alt="img"
      />

      <div className="mt-4">
        {/* Service Name */}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

        {/* Service Description */}
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Service Provider Information */}
        <div className="flex items-center mt-4">
          {/* Provider Image */}
          <img
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-full"
            src={provider?.photo}
            alt="img"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-800">{provider?.name}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        {/* Service Price */}
        <p className="mt-4 text-xl font-semibold text-gray-900">{`$${price}`}</p>

        {/* Book Now Button */}
        <button
          onClick={toggleModal}
          className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Book Service
              </h2>
              <button onClick={toggleModal} className="text-xl">
                X
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Service Id */}
              <input
                type="text"
                value={_id}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Service ID"
              />

              {/* Service Name */}
              <input
                type="text"
                value={title}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Service Name"
              />

              {/* Service Image */}
              <img
                referrerPolicy="no-referrer"
                className="w-20 h-20 object-cover rounded-md mb-4"
                src={photoUrl}
                alt="img"
              />

              {/* Provider Name */}
              <input
                type="text"
                value={provider?.name}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Provider Name"
              />

              {/* Provider Email */}
              <input
                type="email"
                value={provider?.email}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Provider Email"
              />

              {/* Current User Email */}
              <input
                type="email"
                value={user?.email}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Your Email"
              />

              {/* Current User Name */}
              <input
                type="text"
                value={user?.displayName}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Your Name"
              />

              {/* Service Taking Date */}
              <div className="mb-4">
                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              {/* User Address */}
              <input
                className="w-full p-2 border mb-4 rounded-md"
                placeholder="Your address"
                name="address"
              ></input>

              {/* Special Instruction */}
              <textarea
                className="w-full p-2 border mb-4 rounded-md"
                name="instructions"
                placeholder="Special Instructions"
                rows="3"
              ></textarea>

              {/* Service Price */}
              <input
                type="text"
                value={`$${service.price}`}
                disabled={true}
                className="w-full hover:cursor-not-allowed p-2 border mb-4 rounded-md"
                placeholder="Price"
              />

              {/* Purchase Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
              >
                Purchase
              </button>
            </form>

            {/* Close Modal Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleServiceDetails;

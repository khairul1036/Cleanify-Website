import React from "react";
import { format } from 'date-fns'

const BookingDetailsModal = ({ booking, isOpen, closeModal }) => {
  if (!isOpen) return null;

  const {
    title,
    provider,
    userInfo,
    instructions,
    userAddress,
    price,
    location,
    photoUrl,
    bookingAt,
    serviceStatus,
  } = booking;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-80">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Booked Details
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 dark:text-gray-400 transition-colors duration-200 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <div>
            <img
              className="w-60 h-40 rounded-lg shadow-md"
              src={photoUrl}
              alt="Service"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Provider Info */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Provider Information
            </h3>
            <p>
              <strong className="font-semibold">Name:</strong> {provider?.name}
            </p>
            <p>
              <strong className="font-semibold">Email:</strong>{" "}
              {provider?.email}
            </p>
            <p className="flex items-center space-x-2">
              <strong className="font-semibold text-gray-700 dark:text-gray-200">
                Status:
              </strong>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
              ${
                serviceStatus === "Pending"
                  ? "bg-yellow-100 text-yellow-500 dark:bg-yellow-600 dark:text-yellow-200"
                  : serviceStatus === "Working"
                  ? "bg-blue-100 text-blue-500 dark:bg-blue-600 dark:text-blue-200"
                  : serviceStatus === "Complete"
                  ? "bg-green-100 text-green-500 dark:bg-green-600 dark:text-green-200"
                  : "bg-gray-100 text-gray-500 dark:bg-gray-600 dark:text-gray-300"
              }`}
              >
                <span
                  className={`h-2 w-2 rounded-full mr-2 
                ${
                  serviceStatus === "Pending"
                    ? "bg-yellow-500"
                    : serviceStatus === "Working"
                    ? "bg-blue-500"
                    : serviceStatus === "Complete"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                ></span>
                {serviceStatus}
              </span>
            </p>
          </div>

          {/* User Info */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              User Information
            </h3>
            <p>
              <strong className="font-semibold">Name:</strong> {userInfo?.name}
            </p>
            <p>
              <strong className="font-semibold">Email:</strong>{" "}
              {userInfo?.email}
            </p>
            <p>
              <strong className="font-semibold">Address:</strong> {userAddress}
            </p>
            <p>
              <strong className="font-semibold">Booking Date:</strong>{" "}
              {format(new Date(bookingAt), "P")}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Service Details
            </h3>
            <p>
              <strong className="font-semibold">Title:</strong> {title}
            </p>
            <p>
              <strong className="font-semibold">Location:</strong> {location}
            </p>
            <p>
              <strong className="font-semibold">Price:</strong> ${price}
            </p>
            <p>
              <strong className="font-semibold">Instructions:</strong>{" "}
              {instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;

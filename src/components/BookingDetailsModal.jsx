import React from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Booked Details</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
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

        <div className="mt-4">
          <img
            className="w-32 h-32 rounded-full"
            src={photoUrl}
            alt="Service"
          />
          <div className="mt-4">
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Provider:</strong> {provider?.email}
            </p>
            <p>
              <strong>Booking Date:</strong> {bookingAt}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>User Address:</strong> {userAddress}
            </p>
            <p>
              <strong>Instructions:</strong> {instructions}
            </p>
            <p>
              <strong>Status:</strong> {serviceStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;

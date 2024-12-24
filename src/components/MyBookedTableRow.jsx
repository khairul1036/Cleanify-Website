import React, { useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal";

const MyBookedTableRow = ({ myBooked }) => {
  const {
    title,
    provider,
    price,
    location,
    photoUrl,
    bookingAt,
    serviceStatus,
  } = myBooked;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          <img className="w-12 h-12 rounded-full" src={photoUrl} alt="img" />
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {title}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {provider?.name}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {bookingAt}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          ${price}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {location}
        </td>

        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500`}
          >
            <span className={`h-1.5 w-1.5 rounded-full bg-yellow-500`}></span>
            <h2 className="text-sm font-normal">{serviceStatus}</h2>
          </div>
        </td>

        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <button
            onClick={openModal}
            className="flex justify-center items-center text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </td>
      </tr>

      {/* Modal with full booking details */}
      <BookingDetailsModal
        booking={myBooked}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default MyBookedTableRow;

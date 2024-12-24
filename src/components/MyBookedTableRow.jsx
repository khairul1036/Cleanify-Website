import React, { useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal";
import { FaEye } from "react-icons/fa";

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
            <FaEye className="text-2xl" />
          </button>
          {/* Modal with full booking details */}
          <BookingDetailsModal
            booking={myBooked}
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        </td>
      </tr>
    </>
  );
};

export default MyBookedTableRow;

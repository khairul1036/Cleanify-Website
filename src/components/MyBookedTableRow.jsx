import React, { useState } from "react";
import BookingDetailsModal from "./BookingDetailsModal";
import { FaEye } from "react-icons/fa";
import { format } from 'date-fns'

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
      <tr className="dark:bg-gray-800 text-gray-500 dark:text-gray-200">
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <img className="w-12 h-12 rounded-full" src={photoUrl} alt="img" />
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          {title}
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          {provider?.name}
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
        {format(new Date(bookingAt), 'P')}
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          ${price}
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          {location}
        </td>

        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 
              ${serviceStatus === 'Pending' ? 'bg-yellow-100 text-yellow-500' : 
                serviceStatus === 'Working' ? 'bg-blue-100 text-blue-500' : 
                serviceStatus === 'Complete' ? 'bg-green-100 text-green-500' : ''}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full 
                ${serviceStatus === 'Pending' ? 'bg-yellow-500' : 
                  serviceStatus === 'Working' ? 'bg-blue-500' : 
                  serviceStatus === 'Complete' ? 'bg-green-500' : ''}`}
            ></span>
            <h2 className="text-sm font-normal">{serviceStatus}</h2>
          </div>
        </td>


        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
          <button
            onClick={openModal}
            className="flex justify-center items-center transition-colors duration-200 hover:text-blue-500 focus:outline-none"
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

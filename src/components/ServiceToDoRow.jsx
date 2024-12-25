import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import BookingDetailsModal from "./BookingDetailsModal";
import { format } from "date-fns";

const ServiceToDoRow = ({ booking, handleStatusChange }) => {
  const {
    _id,
    title,
    userInfo,
    provider,
    price,
    location,
    photoUrl,
    bookingAt,
    serviceStatus,
  } = booking;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //   console.log(serviceStatus);
  return (
    <tr className="dark:bg-gray-800 text-gray-500 dark:text-gray-200">
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <img className="w-12 h-12 rounded-full" src={photoUrl} alt="img" />
      </td>
      <td className="px-4 py-4 text-sm  whitespace-nowrap">{title}</td>
      <td className="px-4 py-4 text-sm  whitespace-nowrap">
        {userInfo?.email}
      </td>

      <td className="px-4 py-4 text-sm  whitespace-nowrap">
        {format(new Date(bookingAt), "P")}
      </td>

      <td className="px-4 py-4 text-sm  whitespace-nowrap">${price}</td>
      <td className="px-4 py-4 text-sm  whitespace-nowrap">{location}</td>

      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <select
          disabled={serviceStatus === "Complete"}
          id="status"
          name="newStatus"
          defaultValue={serviceStatus}
          onChange={(e) => handleStatusChange(e, _id, serviceStatus)}
          className={`border rounded-lg p-2 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500
            ${
              serviceStatus === "Pending"
                ? "bg-yellow-100 text-yellow-500"
                : serviceStatus === "Working"
                ? "bg-blue-100 text-blue-500"
                : serviceStatus === "Complete"
                ? "bg-green-100 text-green-500 hover:cursor-not-allowed"
                : ""
            }`}
        >
          <option value="Pending" className="text-yellow-500">
            Pending
          </option>
          <option value="Working" className="text-blue-500">
            Working
          </option>
          <option value="Complete" className="text-green-500">
            Complete
          </option>
        </select>
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
          booking={booking}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default ServiceToDoRow;

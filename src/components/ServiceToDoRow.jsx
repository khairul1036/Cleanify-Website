import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import BookingDetailsModal from "./BookingDetailsModal";

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
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        <img className="w-12 h-12 rounded-full" src={photoUrl} alt="img" />
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {userInfo?.email}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {bookingAt}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        ${price}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {location}
      </td>

      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <select
          disabled={serviceStatus === "Complete"}
          id="status"
          name="newStatus"
          //   value={status}
          defaultValue={serviceStatus}
          onChange={(e) => handleStatusChange(e, _id, serviceStatus)}
          className="border rounded-lg p-2 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="Working">Working</option>
          <option value="Complete">Complete</option>
        </select>
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
          booking={booking}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default ServiceToDoRow;

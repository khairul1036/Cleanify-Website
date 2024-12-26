import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import ServiceToDoRow from "../components/ServiceToDoRow";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ServiceToDo = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    fetchBooking();
  }, [user]);

  const fetchBooking = async () => {
    try {
      const { data } = await axiosSecure.get(
        `my-booking/${user?.email}?provider=true`
      );
      setBooking(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleStatusChange = async (e, id, preStatus) => {
    const serviceStatus = e.target.value;

    try {
      const { data } = await axiosSecure.patch(`/booked-status-update/${id}`, {
        serviceStatus,
      });
      toast.success(`Status Changed To ${serviceStatus}`);
      fetchBooking();
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Service ToDo || Cleanify</title>
      </Helmet>
      <section className="container px-4 mx-auto my-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Service To-Do</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {bookings.length} Booking Requests
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-600 md:rounded-lg">
                <table className="min-w-full divide-y dark:divide-gray-600 divide-gray-200 ">
                  <thead className="bg-gray-50">
                    <tr className="dark:bg-gray-800 text-gray-500 dark:text-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Image</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Email</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <span>Booking Date</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-gray-600">
                    {bookings.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center text-gray-700 dark:text-gray-300 py-5">
                          No Data Here
                        </td>
                      </tr>
                    ) : (
                      bookings.map((booking) => (
                        <ServiceToDoRow
                          key={booking._id}
                          booking={booking}
                          handleStatusChange={handleStatusChange}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceToDo;

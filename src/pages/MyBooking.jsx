import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import MyBookedTableRow from "../components/MyBookedTableRow";
import { Helmet } from "react-helmet-async";

const MyBooking = () => {
  const { user } = useAuth();
  const [myBookings, setMyBooking] = useState([]);

  useEffect(() => {
    fetchMyBooking();
  }, [user]);

  const fetchMyBooking = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/my-booking/${user?.email}`
      );
      setMyBooking(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Booked Services</title>
      </Helmet>
      <section className="container px-4 mx-auto my-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            My Booked Service
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {myBookings.length} Booked
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Image</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Provider</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Booking Date</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {myBookings.length === 0 ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="text-center text-gray-500 py-5"
                        >
                          No Data Here
                        </td>
                      </tr>
                    ) : (
                      myBookings.map((myBooked) => (
                        <MyBookedTableRow
                          key={myBooked._id}
                          myBooked={myBooked}
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

export default MyBooking;

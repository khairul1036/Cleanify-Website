import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import ManageServicesRow from "../components/ManageServicesRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageServices = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [myServices, setMyServices] = useState([]);
  useEffect(() => {
    fetchMyServices();
  }, [user]);

  const fetchMyServices = async () => {
    try {
      const { data } = await axiosSecure.get(`/my-service/${user?.email}`);
      setMyServices(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your service has been deleted.",
            icon: "success",
          });
          const { data } = await axiosSecure.post(
            `/delete-service/${id}`
          );
          fetchMyServices();
        }
      });
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Service</title>
      </Helmet>
      <section className="container px-4 mx-auto py-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Manage Service</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {myServices.length} Service
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
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <span>CreateAt</span>
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
                        Description
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-600 ">
                    {myServices.length === 0 ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="text-center text-gray-500 py-5"
                        >
                          No Data Here
                        </td>
                      </tr>
                    ) : (
                      myServices.map((myService) => (
                        <ManageServicesRow
                          key={myService._id}
                          myService={myService}
                          handleDelete={handleDelete}
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

export default ManageServices;

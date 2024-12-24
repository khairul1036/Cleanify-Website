import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [service, setService] = useState([]);

  // fetching single data
  useEffect(() => {
    fetchAllService();
  }, [id]);

  const fetchAllService = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/services/${id}`);
      setService(data);
      setStartDate(new Date(data.createDate));
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  // update service form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.service_title.value;
    const createDate = startDate;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const location = form.location.value;
    const description = form.description.value;

    const formData = {
      provider: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      title,
      createDate,
      price,
      photoUrl,
      location,
      description,
      req_count: service.req_count,
    };

    try {
      await axios.put(`http://localhost:5000/update-service/${id}`, formData);
      form.reset();
      toast.success("Data Updated Successfully!!!");
      navigate("/manage-services");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Update Service</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Update a Service
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/*  name  */}
              <div>
                <label className="text-gray-700 " htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md  focus:border-blue-400 hover:cursor-not-allowed focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              {/* email  */}
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md  focus:border-blue-400 hover:cursor-not-allowed focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* service name  */}
            <div>
              <label className="text-gray-700 " htmlFor="service_title">
                Service Title
              </label>
              <input
                id="service_title"
                name="service_title"
                type="text"
                defaultValue={service.title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* create date  */}
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              {/* price  */}
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  defaultValue={service.price}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              {/* photo url  */}
              <div>
                <label className="text-gray-700 " htmlFor="photoUrl">
                  Image URL
                </label>
                <input
                  id="photoUrl"
                  name="photoUrl"
                  type="text"
                  defaultValue={service.photoUrl}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              {/* service location  */}
              {service?.location && (
                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700 " htmlFor="location">
                    Area
                  </label>
                  <select
                    name="location"
                    id="location"
                    className="border p-2 rounded-md"
                    defaultValue={service.location}
                  >
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Comilla">Comilla</option>
                    <option value="Narayanganj">Narayanganj</option>
                    <option value="Bogra">Bogra</option>
                    <option value="Tangail">Tangail</option>
                    <option value="Jessore">Jessore</option>
                    <option value="Naogaon">Naogaon</option>
                  </select>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                defaultValue={service.description}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdateService;
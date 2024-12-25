import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddService = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.service_title.value;
    const createDate = startDate;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const location = form.location.value;
    const description = form.description.value;

    // Validate required fields and show toast errors
    if (!title) {
      return toast.error("Title is required");
    }

    if (!price) {
      return toast.error("Price must be a valid number");
    }

    if (!photoUrl) {
      return toast.error("Photo URL is required");
    }

    if (!location) {
      return toast.error("Location is required");
    }

    if (!description) {
      return toast.error("Description is required");
    }

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
      req_count: 0,
    };
    try {
      await axiosSecure.post("/add-service", formData);
      form.reset();
      toast.success("Service added successfully");
      navigate("/manage-services");
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-gray-200">
            Post a Service
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/*  name  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 dark:border-gray-500 dark:text-gray-100 dark:bg-gray-500 text-gray-700 bg-gray-200 border border-gray-200 rounded-md  focus:border-blue-400 hover:cursor-not-allowed focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              {/* email  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled={true}
                  className="block w-full px-4 dark:border-gray-500 dark:text-gray-100 dark:bg-gray-500 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md  focus:border-blue-400 hover:cursor-not-allowed focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* service name  */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200 "
                htmlFor="service_title"
              >
                Service Title
              </label>
              <input
                id="service_title"
                name="service_title"
                type="text"
                className="block w-full px-4 py-2 mt-2  dark:border-gray-500 dark:text-gray-100 dark:bg-gray-600 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* create date  */}
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 dark:text-gray-200">
                  Deadline
                </label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              {/* price  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 dark:border-gray-500 dark:text-gray-100 dark:bg-gray-600 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              {/* photo url  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="photoUrl"
                >
                  Image URL
                </label>
                <input
                  id="photoUrl"
                  name="photoUrl"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 dark:border-gray-500 dark:text-gray-100 dark:bg-gray-600 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              {/* service location  */}
              <div className="flex flex-col gap-2 ">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="location"
                >
                  Area
                </label>
                <select
                  name="location"
                  id="location"
                  className="border p-2 rounded-md bg-white text-gray-800 dark:border-gray-500 dark:text-gray-100 dark:bg-gray-600"
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
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mt-4">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 dark:border-gray-500 dark:text-gray-100 dark:bg-gray-600 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddService;

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    provider,
    title,
    createDate,
    price,
    photoUrl,
    location,
    description,
    req_count,
  } = service;

  return (
    <div className="max-w-sm">
      {/* Service Image */}
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={photoUrl}
        alt="photo"
      />

      <div className="p-4">
        {/* Service Name */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        {/* Service Description */}
        <p className="text-gray-600 text-sm mt-2">
          {description.substring(0, 100)}....
        </p>

        <h1 className="mt-4 text-lg font-bold">Service Provider:</h1>
        <div className="mt-1 flex items-center">
          {/* Service Provider Image */}
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={provider?.photo}
            alt="img"
          />

          {/* Service Provider Name */}
          <div>
            <p className="text-gray-700 font-medium">{provider?.name}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Service Price */}
          <p className="mt-4 text-lg font-semibold text-gray-900">{`$${price}`}</p>
          {/* ViewDetail Button */}
          <Link to={`/services/${_id}`}>
            <button className="btn mt-4 text-blue-500 hover:text-blue-700 text-sm">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

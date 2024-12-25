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
    <div className="md:flex justify-between items-center gap-10 shadow-md p-5 rounded-lg border dark:border-gray-400">
      {/* Service Image */}
      <div className="flex flex-col md:flex-row">
        <img
          className="w-96 h-48 object-cover rounded-lg"
          src={photoUrl}
          alt="photo"
        />

        <div className="pt-2 md:p-4">
          {/* Service Name */}
          <h3 className="text-xl font-semibold">{title}</h3>

          {/* Service Description */}
          <p className="text-sm mt-2">{description.substring(0, 100)}....</p>

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
              <p className="font-medium">{provider?.name}</p>
              <p className="text-sm">Area: <span className="font-bold">{location}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col justify-between items-end">
        {/* Service Price */}
        <p className="mt-4 text-2xl font-semibold">{`$${price}`}</p>
        {/* ViewDetail Button */}
        <Link to={`/services/${_id}`}>
          <button className="btn mt-4 text-sm">View Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

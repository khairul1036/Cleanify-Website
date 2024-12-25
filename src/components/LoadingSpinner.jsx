import Lottie from "lottie-react";
import loading from "../assets/lottie/loading.json";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-305px)] text-center">
      <div className="w-48">
        {" "}
        <Lottie animationData={loading}></Lottie>
      </div>
    </div>
  );
};

export default LoadingSpinner;

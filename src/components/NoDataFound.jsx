import React from "react";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/lottie/noDataAnimation.json";

const NoDataFound = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="w-60">
        <Lottie animationData={noDataAnimation}></Lottie>
      </div>
    </div>
  );
};

export default NoDataFound;

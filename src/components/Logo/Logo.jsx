import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={logo} alt="logo" />
      <span className=" mt-4 -ml-3 font-bold">
        Zap<span className=" text-[#caeb66]">Shift</span>
      </span>
    </div>
  );
};

export default Logo;

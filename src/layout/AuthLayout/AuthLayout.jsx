import React from "react";
import Logo from "../../components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="  min-h-screen pt-20 sm:pt-0">
      <div className=" flex absolute top-4 left-4">
        <Logo></Logo>
      </div>
      <div className="flex mx-2">
        <div className=" flex-1">
          <Outlet></Outlet>
        </div>
        <aside className="flex-1 hidden sm:flex items-center min-h-screen bg-green-100 justify-center">
          <img src={authImg} alt="Auth" />
        </aside>
      </div>
    </div>
  );
};

export default AuthLayout;

import React from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Forget = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { passwordResetEmail, user } = useAuth();

  const handleForgetPassword = (data) => {
    console.log(data);

    passwordResetEmail(data.email)
      .then(() => {
        //  Success alert
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Redirecting to login...",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);

        //  Error alert
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to send password reset email.",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md">
        <div className="card p-6 md:p-8 rounded-2xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Forgot Password
          </h1>

          <p className="text-center text-sm md:text-base text-gray-500 mb-6">
            Enter your email address and we’ll send you a reset link.
          </p>

          {/* Form */}
          <div className="card-body p-0">
            <form onSubmit={handleSubmit(handleForgetPassword)}>
              <fieldset className="space-y-4">
                {/* Email Input */}
                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    className="input input-bordered w-full h-12 text-base"
                    placeholder="Enter your email"
                  />

                  {/* Validation error */}
                  {errors.email?.type === "required" && (
                    <p className="text-red-500 text-xs mt-1 font-bold">
                      Email is required...!
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  className="btn btn-neutral w-full h-12 text-base mt-2"
                  type="submit"
                >
                  Send
                </button>
              </fieldset>
            </form>

            {/* Redirect to Login */}
            <p className="text-center text-sm mt-4">
              Remember your password?
              <Link
                to="/login"
                className="link link-hover text-blue-500 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;

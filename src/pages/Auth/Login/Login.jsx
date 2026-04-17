import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, userLoginWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);

    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        //  Success alert after login
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 1500,
          showConfirmButton: false,
        });

        //  Redirect after login
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);

        //  Error alert if login fails
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const handleGoogleSignIn = () => {
    userLoginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        //  Success alert for Google login
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Logged in with Google!",
          timer: 1500,
          showConfirmButton: false,
        });

        //  Redirect after login
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);

        // Error alert for Google login
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md">
        <div className="card p-6 md:p-8 rounded-2xl">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-sm md:text-base text-gray-500 mb-6">
            Login with ZapShift
          </p>

          {/* Form */}
          <div className="card-body p-0">
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="space-y-4">

                {/* Email Input */}
                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    className="input input-bordered w-full h-12 text-base"
                    placeholder="Enter your email"
                  />
                  {errors.email?.type === `required` && (
                    <p className="text-red-500 text-xs mt-1 font-bold">
                      Email Address is required...!
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label className="label font-semibold">Password</label>
                  <input
                    type="password"
                    className="input input-bordered w-full h-12 text-base"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    })}
                  />

                  {/* Validation Errors */}
                  {errors.password?.type === `required` && (
                    <p className="text-red-500 mt-1 font-bold">
                      Password is required...!
                    </p>
                  )}
                  {errors.password?.type === `minLength` && (
                    <p className="text-red-500 mt-1 font-bold">
                      Password must be at least 6 characters...!
                    </p>
                  )}
                  {errors.password?.type === `maxLength` && (
                    <p className="text-red-500 mt-1 font-bold">
                      Password must be less than 20 characters...!
                    </p>
                  )}
                  {errors.password?.type === `pattern` && (
                    <p className="text-red-500 mt-1 font-bold">
                      Password must contain at least one lowercase letter, one
                      uppercase letter, one digit, and one special character...!
                    </p>
                  )}
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <Link
                    to="/forget"
                    className="link link-hover text-sm text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-neutral w-full h-12 text-base mt-2"
                >
                  Login
                </button>

              </fieldset>
            </form>

            {/* Register Redirect */}
            <p className="text-center text-sm mt-4">
              Don’t have any account?{" "}
              <Link
                state={location.state}
                to="/register"
                className="link link-hover text-blue-500 font-semibold"
              >
                Register
              </Link>
            </p>

            {/* Divider */}
            <div className="divider my-6">OR</div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border border-gray-300 w-full h-12 flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              Login with Google
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import userAvatar from "../../../assets/user-avater.png";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

const Register = () => {
  const [preview, setPreview] = useState(userAvatar);
  const { userRegister, userUpdateProfile, userLoginWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const imageFile = data.avatar?.[0];

    const formData = new FormData();
    formData.append("image", imageFile);
    const imageApiKey = import.meta.env.VITE_imageApiKey;
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

    // ✅ Register user first
    userRegister(data.email, data.password)
      .then((result) => {
        console.log(result);

        // ✅ Upload image to imgbb
        axios
          .post(imageUploadUrl, formData)
          .then((response) => {
            const imageUrl = response.data.data.url;
            console.log(imageUrl);

            // ✅ Update user profile with name and image
            userUpdateProfile({
              displayName: data.name,
              photoURL: imageUrl,
            })
              .then(() => {
                console.log("Profile updated successfully");

                // 🎉 Success Alert
                Swal.fire({
                  icon: "success",
                  title: "Registration Successful",
                  text: "Your account has been created!",
                  timer: 1500,
                  showConfirmButton: false,
                });

                // ✅ Redirect after success
                navigate(location.state || "/");
              })
              .catch((error) => {
                console.error("Error updating profile:", error);

                // ❌ Profile update error alert
                Swal.fire({
                  icon: "error",
                  title: "Profile Update Failed",
                  text: error.message || "Something went wrong!",
                });
              });
          })
          .catch((error) => {
            console.error("Error uploading image:", error);

            // ❌ Image upload error alert
            Swal.fire({
              icon: "error",
              title: "Image Upload Failed",
              text: "Please try again!",
            });
          });
      })
      .catch((error) => {
        console.error(error);

        // ❌ Registration error alert
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const handleGoogleSignIn = () => {
    userLoginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        // 🎉 Google login success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Logged in with Google!",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);

        // ❌ Google login error alert
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const avatarRegister = register("avatar");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="card p-6 md:p-8 rounded-2xl">

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Create an Account
          </h1>

          <p className="text-center text-sm md:text-base text-gray-500 mb-6">
            Login with ZapShift
          </p>

          <div className="card-body p-0">
            <form onSubmit={handleSubmit(handleRegister)}>
              <fieldset className="space-y-4">

                {/* Avatar Upload */}
                <div>
                  <label
                    htmlFor="avatar"
                    className="label font-semibold justify-center flex flex-col cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={preview}
                        className="h-16 w-16 rounded-full object-cover border"
                        alt="userAvatar"
                      />
                      <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                        <FaUpload className="text-gray-600 text-xs" />
                      </div>
                    </div>

                    {/* Validation error */}
                    {errors.avatar?.type === `required` && (
                      <p className="text-red-500 text-xs text-center font-bold">
                        Image is required...!
                      </p>
                    )}

                    <span className="text-sm text-gray-500">Upload Image</span>
                  </label>

                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("avatar", { required: true })}
                    onChange={(e) => {
                      avatarRegister.onChange(e);

                      const file = e.target.files[0];
                      if (file) {
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="label font-semibold">Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full h-12 text-base"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                    })}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label font-semibold">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full h-12 text-base"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/,
                    })}
                  />
                </div>

                {/* Password */}
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
                </div>

                <button className="btn btn-neutral w-full h-12 text-base mt-2">
                  Register
                </button>

              </fieldset>
            </form>

            <p className="text-center text-sm mt-4">
              Already have an account?
              <Link
                state={location.state}
                to="/login"
                className="link link-hover text-blue-500 font-semibold"
              >
                Login
              </Link>
            </p>

            <div className="divider my-6">OR</div>

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

export default Register;
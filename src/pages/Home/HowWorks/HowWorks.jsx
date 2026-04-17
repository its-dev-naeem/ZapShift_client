import React from "react";
import img1 from "../../../assets/bookingIcon.png";

const HowWorks = () => {
  const info = [
    {
      id: 1,
      img: img1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      img: img1,
      title: "Booking 2",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      img: img1,
      title: "Booking Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      img: img1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className=" mx-auto max-w-5xl mt-20">
      <h1 className="font-bold text-2xl mb-4">How It Works</h1>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {info.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl flex justify-center items-center flex-col hover:bg-green-100 transition duration-500"
          >
            <img src={item.img} alt={item.title} className=" h-18 w-18 mb-2" />
            <h1 className=" text-md font-bold mb-2"> {item.title}</h1>
            <p className=" text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;

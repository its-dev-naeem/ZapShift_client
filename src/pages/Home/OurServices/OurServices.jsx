import React from "react";
import img1 from "../../../assets/return-box.png";
import img2 from "../../../assets/cash-on-delivery.png";

const OurServices = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      img: img2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      img: img2,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      img: img2,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      img: img2,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      img: img2,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className=" mx-auto mt-20 bg-secondary py-20 px-10 rounded-2xl items-center flex flex-col">
      <h1 className="text-2xl font-bold text-white text text-center ">Our Services</h1>
      <span className=" w-[60%] block text-center text-gray-300 mt-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-500 transition duration-500">
            <img src={service.img} alt={service.title} className="bg-gray-100 rounded-full p-4 w-20 h-20 mx-auto" />
            <h1 className="text-xl font-bold text-center mt-4">{service.title}</h1>
            <span className="text-gray-600 text-center block mt-2">{service.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

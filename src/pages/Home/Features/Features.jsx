import React from "react";
import image3 from "../../../assets/safe-delivery.png";
import image2 from "../../../assets/big-deliveryman.png";
import image1 from "../../../assets/live-tracking.png";

const Features = () => {
  const features = [
    {
      id: 1,
      image: image1,
      title: "Live Parcel Tracking",
      details:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment s journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: image2,
      title: "100% Safe Delivery",
      details:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      image: image3,
      title: "24/7 Call Center Support",
      details:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className=" flex flex-col my-20 gap-5">
      {features.map((cart) => (
        <div key={cart.id} className="bg-white p-5 rounded-2xl flex-col sm:flex-row flex items-center gap-10">
          <img className="w-fit h-30 xl:h-50 bg-cover " src={cart.image} alt="image" />
          <div className=" sm:border-l border-dotted sm:pl-10">
            <h1 className=" text-xl font-bold">{cart.title}</h1>
            <p>{cart.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

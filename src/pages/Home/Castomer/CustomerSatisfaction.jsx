import React from "react";
import bg1 from "../../../assets/be-a-merchant-bg.png";
import bg2 from "../../../assets/location-merchant.png";

const CustomerSatisfaction = () => {
  return (
    <div
      className="w-full flex rounded-3xl p-10 bg-accent text-white relative overflow-hidden mb-20"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col justify-center ">
        <h1 className="text-3xl font-bold mb-3">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p className="text-sm max-w-lg opacity-90 mb-6">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Our courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-5 py-3 bg-primary rounded-full text-black font-medium">
            Become a Merchant
          </button>
          <button className="px-5 py-3 bg-transparent border rounded-full text-white font-medium">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div className=" hidden md:block">
        <img src={bg2} />
      </div>
    </div>
  );
};

export default CustomerSatisfaction;

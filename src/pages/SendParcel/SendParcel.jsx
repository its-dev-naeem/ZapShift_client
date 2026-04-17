import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleParcelSend = (data) => {
    console.log(data);
  };
  return (
    <div className="rounded-2xl bg-gray-100 p-2 md:p-20 my-5">
      <h1 className="text-3xl font-bold mb-4">Send A Percel</h1>
      <p className="text-gray-600 mb-6 font-bold">Enter your parcel details</p>
      <hr className="border-gray-300 border-dashed" />

      <form onSubmit={handleSubmit(handleParcelSend)}>
        <fieldset>
          <div>
            <div className="flex gap-4 py-4">
              <label htmlFor="document">
                <input className="radio" type="checkbox" id="document" />
                Docoment
              </label>

              <label htmlFor="non-document">
                <input className="radio" type="checkbox" id="non-document" />
                Non-Docoment
              </label>
            </div>

            <div className="flex w-full gap-4 pb-8">
              <div className="flex flex-col flex-1">
                <label className="flex flex-row" htmlFor="parcelName">
                  Parcel Name
                </label>
                <input
                  className="input w-full"
                  type="text"
                  id="parcelName"
                  placeholder="Parcel Name"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="flex flex-row" htmlFor="parcelWeight">
                  Parcel Weight (KG)
                </label>
                <input
                  id="parcelWeight"
                  className="input w-full"
                  type="text"
                  placeholder="Parcel Weight (KG)"
                />
              </div>
            </div>
            <hr className="border-gray-300 border-dashed" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 py-4">

            <div className="flex flex-1 flex-col py-4">
              <h1 className=" font-bold text-xl mb-4">Sender Details</h1>

              {/* Sender Name */}
              <label htmlFor="senderName">Sender Name</label>
              <input
                id="senderName"
                placeholder="Sender Name"
                type="text"
                className="input w-full mb-4"
              />

              {/* Address */}
              <label htmlFor="senderAddress">Sender Address</label>
              <input
                id="senderAddress"
                placeholder="Sender Address"
                type="text"
                className="input w-full mb-4"
              />

              {/* Sender Phone No */}
              <label htmlFor="senderPhone">Sender Phone No</label>
              <input
                id="senderPhone"
                placeholder="Sender Phone No"
                type="text"
                className="input w-full mb-4"
              />

              {/* Sender District */}
              <label htmlFor="senderDistrict">Sender District</label>
              <input
                id="senderDistrict"
                placeholder="Sender District"
                type="text"
                className="input w-full mb-4"
              />

              {/* Pickup Instruction */}
              <label htmlFor="senderInstruction">Pickup Instruction</label>
              <input
                id="senderInstruction"
                placeholder="Pickup Instruction"
                type="text"
                className="input w-full h-20 mb-4  "
              />
            </div>

            <div className="flex flex-1 flex-col py-4">
              <h1 className="font-bold text-xl mb-4">Receiver Details</h1>

              {/* Receiver Name */}
              <label htmlFor="receiverName">Receiver Name</label>
              <input
                id="receiverName"
                placeholder="Receiver Name"
                type="text"
                className="input w-full mb-4"
              />

              {/* Address */}
              <label htmlFor="receiverAddress">Receiver Address</label>
              <input
                id="receiverAddress"
                placeholder="Receiver Address"
                type="text"
                className="input w-full mb-4"
              />

              {/* Receiver Phone No */}
              <label htmlFor="receiverPhone">Receiver Phone No</label>
              <input
                id="receiverPhone"
                placeholder="Receiver Phone No"
                type="text"
                className="input w-full mb-4"
              />

              {/* Receiver District */}
              <label htmlFor="receiverDistrict">Receiver District</label>
              <input
                id="receiverDistrict"
                placeholder="Receiver District"
                type="text"
                className="input w-full mb-4"
              />

              {/* Pickup Instruction */}
              <label htmlFor="receiverInstruction">Delivery Instruction</label>
              <input
                id="receiverInstruction"
                placeholder="Delivery Instruction"
                type="text"
                className="input w-full h-20 mb-4"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <span className="font-bold text-gray-500">
              *PickUp Time 4pm-7pm Approx.
            </span>
            <button
              onClick={handleSubmit(handleParcelSend)}
              className="btn bg-primary input text-black"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SendParcel;

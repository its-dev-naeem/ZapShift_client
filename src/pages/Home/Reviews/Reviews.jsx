import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);

  //  date format function
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-BD", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <div className="px-4 md:mx-10 my-25 ">
      <h1 className="text-3xl font-bold text-center mb-2">What our customers are saying</h1>
      <p className="text-center text-gray-600 mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease.
      </p>
      <Swiper
        effect={"coverflow"}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={true}
        

        //  responsive slides
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}

        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}

        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="w-full max-w-sm mx-auto bg-base-100 shadow-xl rounded-xl p-4">

              {/* user info */}
              <div className="flex items-center gap-3">
                <img
                  src={review.user_photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-sm md:text-base font-semibold">
                    {review.userName}
                  </h1>
                  <span className="text-xs text-gray-500">
                    {review.user_email}
                  </span>
                </div>
              </div>

              <hr className="my-3 border-dashed border-gray-300" />

              {/* review */}
              <p className="text-sm md:text-base min-h-30 bg-gray-100 rounded-2xl p-2 text-center flex justify-center items-center font-bold">
                {review.review}
              </p>

              <hr className="my-3 border-dashed border-gray-300" />

              {/* footer */}
              <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-2">
                <span>Rating ⭐ {review.ratings}</span>
                <span>{formatDate(review.date)}</span>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
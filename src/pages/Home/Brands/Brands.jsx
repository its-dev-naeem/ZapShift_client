import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import star_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brands = [amazon, casio, moonstar, randstad, star, star_people];
  return (
    <div className=" mt-20">
      <h1 className=" text-3xl font-bold text-center mb-20">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={5}
        autoplay={{ delay: 900, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} alt={`Brand ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;

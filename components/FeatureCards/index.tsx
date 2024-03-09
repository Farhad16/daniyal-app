"use client";
import { features } from "@/constance/features";
import React from "react";
import Card from "./Card";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureCards = () => {
  return (
    <div className="flex w-full">
      <div className="hidden sm:grid md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-8">
        {features.map((feature) => (
          <Card key={feature.id} {...feature} />
        ))}
      </div>

      <div className="block sm:hidden w-full">
        <Swiper
          autoHeight={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2000,
          }}
          spaceBetween="10"
          pagination={{ clickable: true, el: ".slider-page" }}
          loop
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <Card {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-page text-center mt-4 space-x-2 flex flex-row items-center justify-center" />
      </div>
    </div>
  );
};

export default FeatureCards;

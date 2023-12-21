"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import Link from "next/link";
const HomeSlide = () => {
  const { Slides } = useData();
  return (
    <div className=" flex flex-col">
      <div>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div>
            {Slides.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/chuyen-muc/thiet-ke-nha-pho`}
                  className="w-full p:h-auto d:h-[600px] overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt="slide"
                    className="w-full    hover:scale-105 duration-300 object-contain p:h-auto d:h-[600px]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="my-10 p:mx-2 d:mx-auto h-[1px] bg-mainorange p:w-auto d:w-[1400px] "></div>
    </div>
  );
};

export default HomeSlide;

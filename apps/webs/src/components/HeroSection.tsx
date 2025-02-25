"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"; // Import Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoSearchOutline } from "react-icons/io5";
const images = [
  "https://www.studypool.com/img/backgrounds/homepage_bg_v2/splash_4.jpg",
  "https://www.studypool.com/img/backgrounds/homepage_bg_v2/splash_5.jpg",
];
export const HeroSection = () => {
  return (
    <section>
      <div>
        <div className="carousel-container relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false, // Keeps autoplay running after user interaction
            // }}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {images.map((img, index) => {
              return (
                <div>
                  {" "}
                  <SwiperSlide key={index} className="slide-content w-full ">
                    <div className="slide-content">
                      <img className="w-full" src={img} alt="Slide 1" />
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          <div className="  text-white z-30 w-1/2 left-[20%] top-[20%] absolute">
            <h3 className=" font-[600] text-[38px]">
              Find & Solve PYQs with AI Assistance
            </h3>
            <p className="text-[21px]">
              Get access to a vast collection of PYQs and book PDFs in one
              place.
            </p>
            <div
              className=" rounded-lg  flex items-center bg-[#FFFFFF] border-[1px]
                 hover:shadow-[#69D4F3] hover:shadow-sm  "
            >
              <input
                className="placeholder:text-gray-500 placeholder:text-[18px] w-full
                 text-black px-4 py-5 hover:outline-[#69D4F3] rounded-lg outline-none bg-[#FFFFFF]"
                placeholder="Search study resources"
              ></input>
              <div className=" px-4 border-l-[1px] rounded-l-none py-2">
                <IoSearchOutline className=" font-[600] w-[21px] h-[21px] text-[#69D4F3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

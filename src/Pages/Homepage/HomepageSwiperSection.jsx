import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1Bg from "../../Pictures/slide1Bg.jpg";
import slide2Bg from "../../Pictures/slide2Bg.jpg";
import slide3Bg from "../../Pictures/slide3Bg.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

export default function HomepageFormSection() {
  return (
    <Swiper
      className="w-screen h-screen"
      modules={[Navigation, Pagination, Autoplay, Keyboard]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      keyboard={{
        enable: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-nextCustom",
        prevEl: ".swiper-button-prevCustom",
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <img src={slide1Bg} className=" object-cover w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2Bg} className=" object-cover w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3Bg} className=" object-cover w-full h-full" />
      </SwiperSlide>
      <div className="swiper-button-nextCustom"></div>
      <div className="swiper-button-prevCustom"></div>
    </Swiper>
  );
}

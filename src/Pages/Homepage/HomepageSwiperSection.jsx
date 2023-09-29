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
        <div className="pr-[10vw] md:pr-0 md:w-fit w-full flex md:justify-normal justify-center">
          <h1 className="text-white w-fit flex gap-2 md:text-xl text-2xl">
            учимся
            <span className="w-fit text-[#3577F6]"> Онлайн</span>
          </h1>
        </div>
        <div className="absolute md:top-1/2 top-[60vh] left-1/2 w-full md:ml-[10vw] -translate-x-[46.5%] -translate-y-1/2 flex flex-col md:gap-8 gap-3">
          <div className="flex flex-col gap-5">
            <p className="underline w-fit underline-offset-8 md:font-bold text-white md:text-base text-xl font-semibold rounded-r-none">
              Mufasa Travel - USA
            </p>
            <h1 className="text-white w-fit md:text-9xl text-4xl font-medium">
              Travel to
              <br />
              New York City
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-8 justify-between">
            <p className="text-white bg-[#050402] bg-opacity-50 font-thin mr-[15vw] text-xl leading-7">
              Book your NYC adventure today <br />
              and explore the heart of the Big Apple
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2Bg} className=" object-cover w-full h-full" />
        <div className="pr-[10vw] md:pr-0 md:w-fit w-full flex md:justify-normal justify-center">
          <h1 className="text-white w-fit flex gap-2 md:text-xl text-2xl">
            учимся
            <span className="w-fit text-[#3577F6]"> Онлайн</span>
          </h1>
        </div>
        <div className="absolute md:top-1/2 top-[60vh] left-1/2 w-full md:ml-[10vw] -translate-x-[46.5%] -translate-y-1/2 flex flex-col md:gap-8 gap-3">
          <div className="flex flex-col gap-5">
            <p className="w-fit underline underline-offset-8 md:font-bold text-white md:text-base text-xl font-semibold">
              Mufasa Travel - Turkey
            </p>
            <h1 className="text-white md:text-9xl text-4xl font-medium">
              Travel to
              <br />
              Istanbul
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-8 justify-between">
            <p className="text-white bg-[#133369] bg-opacity-50 font-thin mr-[15vw] text-xl leading-7">
              Book your tour to visit <br />
              the ancient city of Istanbul - the heart of Turkey
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3Bg} className=" object-cover w-full h-full" />
        <div className="pr-[10vw] md:pr-0 md:w-fit w-full flex md:justify-normal justify-center">
          <h1 className="text-white w-fit flex gap-2 md:text-xl text-2xl">
            учимся
            <span className="w-fit text-[#3577F6]"> Онлайн</span>
          </h1>
        </div>
        <div className="absolute md:top-1/2 top-[60vh] left-1/2 w-full md:ml-[10vw] -translate-x-[46.5%] -translate-y-1/2 flex flex-col md:gap-8 gap-3">
          <div className="flex flex-col gap-5">
            <p className="underline underline-offset-8 md:font-bold text-white md:text-base text-xl font-semibold">
              Mufasa Travel - UK
            </p>
            <h1 className="text-white md:text-9xl text-4xl font-medium">
              Travel to <br />
              London
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-8 justify-between">
            <p className="text-white bg-[#101519] bg-opacity-50 font-thin mr-[15vw] text-xl leading-7">
              Book your London tour <br />
              and experience the charm of the UK capital
            </p>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-button-nextCustom"></div>
      <div className="swiper-button-prevCustom"></div>
    </Swiper>
  );
}

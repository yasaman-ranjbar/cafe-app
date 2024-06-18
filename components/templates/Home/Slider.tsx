import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  return (
    <Swiper
      className="h-screen"
      navigation
      modules={[Navigation]}
      scrollbar={{ draggable: true }}
      loop
    >
      <SwiperSlide style={{ backgroundImage: "url(/images/carousel-1.jpg)" }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-yellow text-[2rem] font-semibold">
            We Have Been Serving
          </h2>
          <h1 className="text-white text-[8rem] font-bold">COFFEE</h1>
          <h2 className="text-white text-[2rem] font-semibold">SINCE 1950</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url(/images/carousel-2.jpg)" }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-[#da9f5b] text-[2rem] font-semibold">
            We Have Been Serving
          </h2>
          <h1 className="text-white text-[8rem] font-bold">COFEE</h1>
          <h2 className="text-white text-[2rem] font-semibold">
            * SINCE 1950 *
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

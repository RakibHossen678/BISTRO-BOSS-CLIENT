import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Title from "../../Shared/Title";

const Category = () => {
  return (
    <div className="my-20">
      <div>
        <Title subHeading='---From 11:00am to 10:00pm---' Heading='ORDER ONLINE'></Title>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[450px]"
        >
          <SwiperSlide className="relative">
            <img src={slide1} alt="" />{" "}
            <p className="absolute -translate-x-[50%] bottom-20 left-[50%] font-cinzel text-[#FFFFFF] text-3xl font-medium">
              SALADS
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide2} alt="" />{" "}
            <p className="absolute -translate-x-[50%] bottom-20 left-[50%] font-cinzel text-[#FFFFFF] text-3xl font-medium">
              SOUP
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide3} alt="" />{" "}
            <p className="absolute -translate-x-[50%] bottom-20 left-[50%] font-cinzel text-[#FFFFFF] text-3xl font-medium">
              PIZZA
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide4} alt="" />{" "}
            <p className="absolute -translate-x-[50%] bottom-20 left-[50%] font-cinzel text-[#FFFFFF] text-3xl font-medium">
              DESSERTS
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide5} alt="" />{" "}
            <p className="absolute -translate-x-[50%] bottom-20 left-[50%] font-cinzel text-[#FFFFFF] text-3xl font-medium">
              SALADS
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;

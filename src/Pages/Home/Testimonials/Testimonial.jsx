import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(3);
  useEffect(() => {
    fetch("https://server-five-omega-98.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  return (
    <div className="my-20">
      <div>
        <Title
          Heading={"TESTIMONIALS"}
          subHeading={"---What Our Clients Say---"}
        ></Title>
        <div className="my-10 text-center">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-center py-5">
                    <Rating
                      style={{ maxWidth: 200 }}
                      value={review.rating}
                      onChange={setRating}
                    />
                  </div>
                  <div className="text-6xl flex justify-center py-4">
                    <FaQuoteLeft />
                  </div>
                  <p className="font-inter">{review.details}</p>
                  <h2 className="text-[#CD9003] text-2xl font-inter font-medium py-2">
                    {review.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SlideCard from "./SlideCard";

const Slide = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/slideCardBook.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <Swiper
        navigation={true}
        slidesPerView={4}
        loop={true}
        spaceBetween={30}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper max-w-7xl max-auto"
      >
        {books.map((book) => (
          <SwiperSlide>
            <SlideCard book={book}></SlideCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;

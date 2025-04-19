import React from "react";
import banner4 from "../../assets/banner4.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner1 from "../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <div className="flex flex-col justify-center p-6 ml-0 md:ml-12">
              <h1 className="font-poppins text-black text-3xl font-bold md:text-5xl">
                Unlock the World of Knowledge
              </h1>
              <p className="text-base text-[#666666] mt-5 animate__animated animate__fadeInLeft md:text-lg">Access a vast and diverse collection of books anytime, anywhere, and explore limitless wisdom and knowledge.</p>
              <p className="text-base text-[#666666] animate__animated animate__fadeInLeft md:text-lg">Library offers a seamless reading experience that fits your lifestyle.</p>
              <button className="btn w-fit bg-black text-white px-10 mt-10 rounded-full hover:bg-[#FF5722]">Explore more</button>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={banner4}
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <div className="flex flex-col justify-center p-6 ml-0 md:ml-12">
              <h1 className="font-poppins text-3xl font-bold md:text-5xl">
              Where Books Meet Readers
              </h1>
              <p className="text-base text-[#666666] mt-5 md:text-lg">Connecting passionate readers with the right books, making every unique reading experience truly meaningful and enjoyable.</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={banner3}
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <div className="flex flex-col justify-center p-6 ml-0 md:ml-12">
              <h1 className="font-poppins text-3xl font-bold md:text-5xl">
              Read, Learn, and Grow
              </h1>
              <p className="text-base text-[#666666] mt-5 md:text-lg">Expand your curious mind and enrich your daily life with every inspiring and thought-provoking page you turn.</p>
              <p className="text-base text-[#666666] md:text-lg">From academic resources to literary masterpieces.</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full max-h-[600px] object-cover"
                src={banner2}
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <div className="flex flex-col justify-center p-6 ml-0 md:ml-12">
              <h1 className="font-poppins text-3xl font-bold md:text-5xl">
              Your Gateway to Endless Stories
              </h1>
              <p className="text-base text-[#666666] mt-5 md:text-lg">Step into a world of imagination, creativity, and boundless knowledge,</p>
              <p className="text-base text-[#666666] md:text-lg">where every book opens a new and exciting adventure. Whether you seek thrilling fiction, insightful non-fiction, or inspiring biographies.</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={banner1}
                alt=""
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent border-2 border-black hover:bg-red-600">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

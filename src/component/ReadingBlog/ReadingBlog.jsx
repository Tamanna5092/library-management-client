import React from "react";
import { Link } from "react-router-dom";

const ReadingBlog = () => {
  return (
    <div className='relative my-20'>
        <img className='w-full h-[400px] bg-black lg:h-[600px]' src="https://i.ibb.co.com/bRK0d7tt/bg-home.jpg" alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h1 className='font-rubik text-2xl font-bold lg:text-5xl'>Inspire Daily Reading</h1>
            <p className='mt-4'>Explore the world of books and reading with our blog. Discover tips, reviews, and insights to enhance your reading journey.</p>
            <Link to={'/blogs'} className='font-rubik inline-block px-8 py-3 mt-10 font-semibold rounded-md bg-black text-white border-none hover:bg-[#FF5722]'>View Our Blog</Link>
        </div>
    </div>
  );
};

export default ReadingBlog;

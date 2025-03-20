import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      setBooks(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="grid grid-cols-1 gap-6 px-4 md:px-0">
        {books.map((book) => (
          <div className="">
            <div className="card card-side flex flex-col bg-base-100 p-4 border-2 md:flex-row">
              <div>
                <img
                  className="w-full h-72 md:h-56 md:w-56 "
                  src={book.image}
                  alt="Movie"
                />
              </div>
              <div className="flex flex-col justify-between ml-0 md:ml-4">
              <div>
                <h2 className="font-rubik text-2xl font-semibold">
                  {book.name}
                </h2>
                <>{book.author}</>
                <p>{book.category}</p>
                <p className="flex items-center gap-2"><span><FaStar className="w-5 h-5 text-yellow-400"></FaStar></span> {book.rating}</p>
              </div>
                <div>
                  <Link to={`/updateBook/${book._id}`} className="btn bg-[#FF5722] text-white px-10 hover:bg-black">Update</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

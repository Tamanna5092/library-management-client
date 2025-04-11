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


  const handleDelete = async (id) => {
    console.log('delete book')
    // try {
    //   const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/book/${id}`)
    //   console.log('data from data',data)
    //   // getData()
    // } catch (error) {
    //   console.log(error)
    // }
  }

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
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                  <Link to={`/updateBook/${book._id}`} className="btn bg-[#FF5722] text-white px-10 hover:bg-black">Update</Link>
                  <button onClick={()=> handleDelete(book._id)} className="btn bg-[#FF5722] text-white px-10 hover:bg-black">Delete</button>
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

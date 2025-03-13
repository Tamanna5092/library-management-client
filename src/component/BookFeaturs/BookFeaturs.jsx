import React, { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";

const BookFeaturs = () => {
  const [books, setBooks] = useState([])
  const [dataLength, setDataLength] = useState(6)

  useEffect(()=> {
    const getData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`)
      setBooks(data)
    }
    getData()
  }, [])

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">Our Book Collections</h1>
        <p className="text-center text-[#666666]">
          Books open doors to new worlds, knowledge, and imagination. They
          inspire, educate, entertain, and connect readers across time and
          cultures.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
       {
        books.slice(0, dataLength).map((book) => <Books key={book._id} book={book}></Books>)
       }
      </div>
      <div className={dataLength === books.length && 'hidden'}>
      <div onClick={()=> setDataLength(books.length)} className="text-center">
        <button className="btn bg-[#FF5722] text-white px-10 mt-10 hover:bg-black">Show All books</button>
      </div>
      </div>
    </div>
  );
};

export default BookFeaturs;

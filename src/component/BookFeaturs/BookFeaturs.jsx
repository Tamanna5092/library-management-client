import React, { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";

const BookFeaturs = () => {
  const [books, setBooks] = useState([])

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
        books.map((book) => <Books key={book._id} book={book}></Books>)
       }
      </div>
    </div>
  );
};

export default BookFeaturs;

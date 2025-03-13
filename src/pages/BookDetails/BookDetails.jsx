import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Borrow from "./Borrow";

const BookDetails = () => {
  const book = useLoaderData();
  const { name, image, quantity, author, category, publishing_year, publisher, number_of_pages, short_description, price, rating, content } = book;
  // console.log(book);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 my-10 md:grid-cols-2">
        <div>
            <img className="w-full h-[600px]" src={image} alt="" />
        </div>
        <div>
            <h2 className="text-4xl font-rubik font-extrabold">{name}</h2>
            <h3 className="text-[#797979] my-3">Author: <span className="text-[#FF5722] font-rubik ml-2">{author}</span></h3>
            <p className="text-[#797979]">{short_description}</p>
            <p className="text-[#797979] my-3">Price: {price}</p>
            <p className="text-[#797979] my-3">Category: {category}</p>
            <p className="text-[#797979]">Rating: {rating}</p>
            <p className="text-[#797979] my-3">Quantity: {quantity}</p>
            <p className="text-[#797979]">Publishing Year: {publishing_year}</p>
            <p className="text-[#797979] my-3">Publisher: {publisher}</p>
            <p className="text-[#797979]">Number of Pages: {number_of_pages}</p>
            <p className="text-[#797979] my-3">{content}</p>
            <div>
<button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn bg-[#FF5722] text-white px-10 mt-4 rounded-full hover:bg-black">Borrow</button>
<Borrow book={book}></Borrow>
            </div>
        </div>
    </div>
  );
};

export default BookDetails;

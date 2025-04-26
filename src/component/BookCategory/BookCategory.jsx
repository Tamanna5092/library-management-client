import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookCategory = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
        setBooks(data);
      };
      getData();
    }, []);

  const handleShowAll = (category) => {
    const filteredBooks = books.filter((book) => book.category === category);
    setSelectedCategory(filteredBooks);
    console.log(filteredBooks);
  }

  return (
    <div className="my-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 px-4 md:px-0 md:grid-cols-3 lg:grid-cols-5">
        {/* category 1 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
          Science Fiction
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Science Fiction")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Science Fiction")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 2 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Fantasy
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Fantasy")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Fantasy")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 3 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            History
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "History")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("History")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 4 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Philosophy
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Philosophy")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Philosophy")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 5 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Religion
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Religion")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Religion")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 6 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Travel
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Travel")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Travel")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 7 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Self-Help
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Self-Help")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Self-Help")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 8 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Romance
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Romance")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Romance")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 9 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Adventure
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Adventure")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Adventure")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 10 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Economics
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Economics")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Economics")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>{" "}
        {/* category 11 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Cooking
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Cooking")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Cooking")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 12 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Mystery & Thriller
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Mystery & Thriller")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Mystery & Thriller")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 13 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Art & Photography
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Art & Photography")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                <Link onClick={() => handleShowAll("Art & Photography")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 14 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Business & Finance
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Business & Finance")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                 <Link onClick={() => handleShowAll("Business & Finance")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
        {/* category 15 */}
        <div className="bg-gray-100">
          <h3 className="text-center text-white bg-green-600 py-1 hover:underline">
            Science & Technology
          </h3>
          <div className="py-3">
            <ul>
              {books
                .filter((book) => book.category === "Science & Technology")
                .map((book) => (
                  <li
                    key={book._id}
                    className="w-fit text-sm ml-2 hover:underline"
                  >
                    <Link to={`/book/${book._id}`}>{book.name}</Link>
                  </li>
                ))}
                 <Link onClick={() => handleShowAll("Science & Technology")} className="ml-2 font-bold text-black">Show All</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCategory;

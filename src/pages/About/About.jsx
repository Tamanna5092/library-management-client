import React, { useEffect, useState } from "react";
import icon1 from "../../assets/icons/review.png";
import icon2 from "../../assets/icons/loupe.png";
import icon3 from "../../assets/icons/gift.png";

const About = () => {
  const [authors, setAuthors] = useState([]);
  const [dataLength, setDataLength] = useState(6);

  useEffect(() => {
    fetch("/authors.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAuthors(data);
      });
  }, []);

  return (
    <div className="mx-auto max-w-7xl my-20">
      <div className="animate__animated animate__fadeInDown">
        <h1 className="text-4xl font-bold text-center my-10">Our Mission</h1>
        <p className="max-w-5xl mx-auto text-justify px-3 md:text-center md:px-0">
          Welcome to BookSphere, your ultimate destination for book lovers! We
          are passionate about connecting readers with the stories they love.
          Our platform offers a vast collection of books across various genres,
          ensuring that there's something for everyone. Whether you're a fan of
          fiction, non-fiction, mystery, or romance, we've got you covered. Join
          us on this literary journey and discover your next favorite read!
        </p>
      </div>
      <div className="my-8">
        <img
          className="w-full h-[600px]"
          src="https://i.ibb.co.com/TxQj53J7/photo-1597167100957-1dfa110c1c14-1.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-20 mb-10 md:text-4xl">
          Most Popular Authors
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-10 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3">
          {authors.slice(0, dataLength).map((author) => (
            <div key={author.id} className="card w-full p-4 border-2">
              <figure>
                <img className="w-full h-80 hover:animate-pulse" src={author.img} alt="Author" />
              </figure>
              <div className="my-6">
                <h2 className="font-rubik text-2xl font-bold text-center">
                  {author.author}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className={dataLength === authors.length && "hidden"}>
          <div
            onClick={() => setDataLength(authors.length)}
            className="text-center"
          >
            <button className="btn text-white px-10 mt-10 bg-black border-none hover:bg-[#FF5722]">
              More Authors
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 my-20 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex justify-center items-center">
            <img className="w-20 h-20" src={icon1} alt="" />
          </div>
          <div>
            <h2 className="font-rubik text-2xl text-center font-medium my-2 hover:text-[#FF5722] md:text-3xl">
              Read Reader’s Reviews
            </h2>
            <p className="text-center px-2 md:px-0">
              You will find reviews of magazines, online sources and favorite
              books.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img className="w-20 h-20" src={icon2} alt="" />
          </div>
          <div>
            <h2 className="font-rubik text-2xl text-center font-medium my-2 hover:text-[#FF5722] md:text-3xl">
              Find Your Favorite Authors
            </h2>
            <p className="text-center px-2 md:px-0">
              Great writers are pretty inspiring, so we offer the widest
              selection.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img className="w-20 h-20" src={icon3} alt="" />
          </div>
          <div>
            <h2 className="font-rubik text-2xl text-center font-medium my-2 hover:text-[#FF5722] md:text-3xl">
              Make the Best Present
            </h2>
            <p className="text-center">
              A book is still one of the best presents for anyone on any
              occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

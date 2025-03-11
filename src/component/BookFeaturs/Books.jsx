import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({ book }) => {
  const { _id, name, image, short_description, } = book;

    return (
        <div className=''>
             <div className="card w-full h-full border-2 rounded-none">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt=""
              className="h-96"
            />
          </figure>
          <div className="my-5 px-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>{short_description}</p>
            <div className="card-actions">
              <Link to={`/book/${_id}`} className="btn bg-[#FF5722] text-white px-10 mt-10 rounded-full hover:bg-black">View Details</Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Books;
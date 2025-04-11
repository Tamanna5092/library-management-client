import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const updateBook = useLoaderData()
    const { _id, name, image, author, category, price, quantity, number_of_pages, publishing_year, publisher, short_description, content } = updateBook;
    const navigate = useNavigate()

    const handleUpdateBook = async(e) => {
        e.preventDefault();
        console.log('button clicked');
        const from = e.target;
        const name = from.name.value;
        const image = from.image.value;
        const author = from.author.value;
        const category = from.category.value;
        const price = parseInt(from.price.value);
        const quantity = parseInt(from.quantity.value);
        const number_of_pages = parseInt(from.number_of_pages.value);
        const publishing_year = parseInt(from.publishing_year.value);
        const publisher = from.publisher.value;
        const short_description = from.short_description.value;
        const content = from.content.value; 
        console.log(name, image, author, category, price, quantity, number_of_pages, publishing_year, publisher, short_description, content);
        
        const updateBook = {
            name,
            image,
            author,
            category,
            price,
            quantity,
            number_of_pages,
            publishing_year,
            publisher,
            short_description,
            content
        }

        try {
          const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/book/${_id}`, updateBook);
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Book update has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/allBooks')
        }
        catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
      <section className="p-6 max-w-5xl mx-auto shadow-md dark:bg-gray-100 dark:text-gray-900">
        <h1 className="font-rubik text-3xl text-center font-semibold my-5">
          Update Book
        </h1>
        <form
          onSubmit={handleUpdateBook}
          className="container flex flex-col mx-auto space-y-6"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={name}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="text"
                defaultValue={image}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="author">Author Name</label>
              <input
                id="author"
                name="author"
                type="text"
                defaultValue={author}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                defaultValue={category}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                defaultValue={price}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="quantity">Quantity of the book</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                defaultValue={quantity}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="number_of_pages">Number of pages</label>
              <input
                id="number_of_pages"
                name="number_of_pages"
                type="number"
                defaultValue={number_of_pages}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="publishing_year">Publishing Year</label>
              <input
                id="publishing_year"
                name="publishing_year"
                type="number"
                defaultValue={publishing_year}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="publisher">Publisher</label>
              <input
                id="publisher"
                name="publisher"
                type="text"
                defaultValue={publisher}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="short_description">Short description</label>
              <input
                id="short_description"
                name="short_description"
                type="text"
                defaultValue={short_description}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <textarea
                name="content"
                id="content"
                rows={5}
                placeholder="Content"
                defaultValue={content}
                required
                className="w-full border mt-4 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn bg-[#FF5722] text-white px-10 hover:bg-black">
            Update
            </button>
          </div>
        </form>
      </section>
    </div>
    );
};

export default UpdateBook;
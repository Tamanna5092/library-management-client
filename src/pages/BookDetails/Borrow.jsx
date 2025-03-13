import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Borrow = ({book} ) => {
  const { name, image, category} = book
  console.log(book)
  const {user} = useContext(AuthContext)

const handleBorrowBook = async(e) => {
  e.preventDefault()
  console.log('Borrowing book')
  const from = e.target
  const user_name = from.user_name.value
  const email = from.email.value
  const borrowed_date = from.borrowed_date.value
  const return_date = from.return_date.value
  console.log(name, email, borrowed_date, return_date)

  const borrowData = {
    name,
    image,
    category,
    return_date,
    userInfo: {
      user_name,
      email
    }
  }

  try {
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/borrow`, borrowData)
    console.log(data)
    toast.success('Book borrowed successfull')
  }
  catch(error) {
    console.log(error)
  }
}

  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog"> 
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <section className="p-6 max-w-5xl mx-auto dark:bg-gray-100 dark:text-gray-900">
        <h1 className="font-rubik text-xl text-center font-semibold my-5">
          Fill this form to borrow this book
        </h1>
        <form
          onSubmit={handleBorrowBook}
          className="container flex flex-col mx-auto space-y-6"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="user_name">Name</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                value={user?.displayName}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={user?.email}
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="borrowed_date">Borrowed Date</label>
              <input
                id="borrowed_date"
                name="borrowed_date"
                type="date"
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="return_date">Return Date</label>
              <input
                id="return_date"
                name="return_date"
                type="date"
                required
                className="w-full border p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn bg-[#FF5722] text-white px-10 hover:bg-black">
              Submit
            </button>
          </div>
        </form>
      </section>
  </div>
</dialog>
    </div>
  );
};

export default Borrow;

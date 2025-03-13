import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)


  const navlinks = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <a>All Books</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BookSphere</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        {!user && (
          <Link to={'/signIn'} className="navbar-end">
          <a className="btn">Sign In</a>
        </Link>
          )
        }
        {user && (
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full" title={user?.displayName}>
              <img
              referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
        <Link to={'/addBook'}>Add Book</Link>
      </li>
            <li>
        <Link to={'/borrowedBooks'}>Borrowed Books</Link>
      </li>
            <li onClick={logOut}><button className="block text-center text-red-600">Logout</button></li>
          </ul>
        </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;

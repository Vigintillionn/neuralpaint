import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white
    sm:px-8 px-4 py-4 border-b border-b-bright-gray">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="create-post" className="font-inter font-medium bg-lightblue
      text-white px-4 py-2 rounded-md">
        Create
      </Link>
    </header>
  )
}

export default Navbar;
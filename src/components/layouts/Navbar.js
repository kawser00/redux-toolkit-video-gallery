import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div
        className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
      >
        <Link to="/">
        <h2 className="font-bold text-xl">Simple Video Gallery</h2>
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
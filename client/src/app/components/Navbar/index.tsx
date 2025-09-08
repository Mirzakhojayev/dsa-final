"use client";
import {Search} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className='w-full py-3 fixed top-0 z-50 text-white border-b border-primary backdrop-blur-sm bg-transparent'>
      <div className='container-wrapper flex justify-between px-4 mx-4'>
        <div className='flex items-center gap-10'>
          {/* Logo */}
          <h1
            className='ml-8 text-2xl font-extrabold text-gray-100 cursor-pointer'
            onClick={() => (window.location.href = "/")}>
            DSA
          </h1>

          {/* Navigation Links */}
          <nav className='flex items-center gap-4 text-primary'>
            <Link
              role='link'
              tabIndex={0}
              className=' hover:text-white cursor-pointer ml-3'
              href='/'>
              Home
            </Link>
            <Link
              role='link'
              tabIndex={0}
              className=' hover:text-white cursor-pointer ml-3'
              href='/problemset'>
              Problemset
            </Link>
            <Link
              role='link'
              tabIndex={0}
              className=' hover:text-white cursor-pointer ml-3'
              href='/read'>
              Read
            </Link>
            <Link
              role='link'
              tabIndex={0}
              className=' hover:text-white cursor-pointer ml-3'
              href='/roadmap'>
              Roadmap
            </Link>
            <Link
              role='link'
              tabIndex={0}
              className=' hover:text-white cursor-pointer ml-3'
              href='/about'>
              About Us
            </Link>
          </nav>
        </div>

        {/* Search Bar */}
        <div className='flex items-center gap-4'>
          <div className='relative flex h-min w-[240px]'>
            <Search className='absolute left-[10px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer' />
            <input
              className='w-full rounded-lg border border-border-primary h-8 bg-black p-2 pl-9 placeholder-gray-500 focus:border-transparent focus:outline-none'
              type='search'
              placeholder='Search...'
            />
          </div>

          <button className='px-4 py-1 text-black bg-gray-100 border-lg rounded cursor-pointer h-8 w-24 hover:opacity-70'>
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

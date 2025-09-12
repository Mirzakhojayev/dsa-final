"use client";

import {
  ChevronLeft,
  ChevronRight,
  ListCollapse,
  Search,
} from "lucide-react";
import Link from "next/link";
import Timer from "../Timer";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <div className='flex items-center justify-between w-full text-white py-3 px-3'>
      <div className="flex">
        <h1
        className='ml-4 text-2xl font-extrabold text-gray-100 cursor-pointer'
        onClick={() => (window.location.href = "/")}>
        DSA
      </h1>
      <div className="w-px self-center h-5 bg-[#888888]/[0.5] mx-4 rounded" />
      <div className='flex items-center gap-1 flex-1 justify-center'>
        <Link
          href='/problemset'
          className='flex items-center gap-2 font-medium max-w-[170px] cursor-pointer hover:opacity-70'>
          <div>
            <ListCollapse className='h-5 w-5 text-[#888888] rounded' />
          </div>
          <p>Problems List</p>
        </Link>
        <div className='flex items-center justify-center rounded h-8 w-8 cursor-pointer'>
          <ChevronLeft className='h-6 w-6 text-[#888888] rounded hover:bg-[#888888]/[0.4]' />
        </div>
        <div className='flex items-center justify-center rounded h-8 w-8 cursor-pointer'>
          <ChevronRight className='h-6 w-6 text-[#888888] rounded hover:bg-[#888888]/[0.4]' />
        </div>
      </div>
      </div>
      <Timer />
      <div className='flex gap-4'>
        <div className='flex items-center gap-4'>
          <div className='relative flex h-min w-[240px]'>
            <Search className='absolute left-[10px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer' />
            <input
              className='w-full rounded-lg border border-[#888888] h-8 bg-black p-2 pl-9 placeholder-gray-500 focus:border-transparent focus:outline-none'
              type='search'
              placeholder='Search...'
            />
          </div>
        </div>
        <button className='px-4 py-1 text-black bg-gray-100 border-lg rounded cursor-pointer h-8 w-24 hover:opacity-70'>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Topbar;

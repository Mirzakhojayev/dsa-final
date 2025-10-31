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
    <div className='flex items-center justify-between w-full text-white py-3 px-3 max-w-3xl'>
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
    </div>
  );
};

export default Topbar;

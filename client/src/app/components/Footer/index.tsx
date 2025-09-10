import {Mail, Send} from "lucide-react";
import React from "react";
import {FaFacebook, FaInstagram, FaTelegramPlane} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='w-full border-t border-primary'>
      <div className='grid grid-cols-5 gap-6 px-6 py-10'>
        {/* Logo */}
        <div>
          <h1 className='text-2xl font-extrabold text-white cursor-pointer'>
            DSA.uz
          </h1>
          <p className='mt-2 text-sm text-primary max-w-xs'>
            Ma'lumot turlari va Algoritmlarni O'zbek tilida o'rganing
          </p>
          <div className='flex gap-2 mt-2'>
            <div className='w-10 h-10 bg-[#222222] items-center justify-center rounded-full flex cursor-pointer hover:bg-white hover:text-black relative'>
              <Mail className='h-6 w-6 z-10' />
            </div>
            <div className='w-10 h-10 bg-[#222222] items-center justify-center rounded-full flex cursor-pointer hover:bg-white hover:text-black relative'>
              <FaTelegramPlane className='h-6 w-6 z-10' />
            </div>
            <div className='w-10 h-10 bg-[#222222] items-center justify-center rounded-full flex cursor-pointer hover:bg-white hover:text-black relative'>
              <FaInstagram className='h-6 w-6 z-10' />
            </div>
            <div className='w-10 h-10 bg-[#222222] items-center justify-center rounded-full flex cursor-pointer hover:bg-white hover:text-black relative'>
              <FaFacebook className='h-6 w-6 z-10' />
            </div>
          </div>
        </div>
        {/* Kompaniya */}
        <div className='text-bold text-white'>
          <h3 className='text-lg font-semibold mb-2'>Kompaniya</h3>
          <ul className='text-primary text-sm'>
            <li className='hover:text-white cursor-pointer'>Biz haqimizda</li>
            <li className='hover:text-white cursor-pointer'>Blog</li>
            <li className='hover:text-white cursor-pointer'>Hamkorlik</li>
            <li className='hover:text-white cursor-pointer'>Karyera</li>
            <li className='hover:text-white cursor-pointer'>Aloqa</li>
          </ul>
        </div>
        {/* Masalalar */}
        <div className='text-bold text-white'>
          <h3 className='text-lg font-semibold mb-2'>Masalalar</h3>
          <ul className='text-primary text-sm'>
            <li className='hover:text-white cursor-pointer'>Massiv</li>
            <li className='hover:text-white cursor-pointer'>Stack</li>
            <li className='hover:text-white cursor-pointer'>Queue</li>
            <li className='hover:text-white cursor-pointer'>Linked List</li>
            <li className='hover:text-white cursor-pointer'>Tree</li>
            <li className='hover:text-white cursor-pointer'>Graph</li>
            <li className='hover:text-white cursor-pointer'>Hash Table</li>
            <li className='hover:text-white cursor-pointer'>Sorting</li>
            <li className='hover:text-white cursor-pointer'>Searching</li>
            <li className='hover:text-white cursor-pointer'>
              Dynamic Programming
            </li>
            <li className='hover:text-white cursor-pointer'>
              Greedy Algorithms
            </li>
            <li className='hover:text-white cursor-pointer'>Rekursiya</li>
          </ul>
        </div>
        {/* Maqolalar */}
        <div className='text-bold text-white'>
          <h3 className='text-lg font-semibold mb-2'>Maqolalar</h3>
          <ul className='text-primary text-sm'>
            <li className='hover:text-white cursor-pointer'>Matematika</li>
            <li className='hover:text-white cursor-pointer'>Hisob</li>
            <li className='hover:text-white cursor-pointer'>Geometriya</li>
            <li className='hover:text-white cursor-pointer'>Algoritmlar</li>
            <li className='hover:text-white cursor-pointer'>Massiv</li>
            <li className='hover:text-white cursor-pointer'>Stack</li>
            <li className='hover:text-white cursor-pointer'>Queue</li>
            <li className='hover:text-white cursor-pointer'>Linked List</li>
            <li className='hover:text-white cursor-pointer'>Tree</li>
            <li className='hover:text-white cursor-pointer'>Graph</li>
            <li className='hover:text-white cursor-pointer'>Hash Table</li>
            <li className='hover:text-white cursor-pointer'>Sorting</li>
            <li className='hover:text-white cursor-pointer'>Searching</li>
            <li className='hover:text-white cursor-pointer'>
              Dynamic Programming
            </li>
            <li className='hover:text-white cursor-pointer'>
              Greedy Algorithms
            </li>
            <li className='hover:text-white cursor-pointer'>Rekursiya</li>
          </ul>
        </div>
        {/* Havolalar */}
        <div className='text-bold text-white'>
          <h3 className='text-lg font-semibold mb-2'>Havolalar</h3>
          <ul className='text-primary text-sm'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>Masalalar</li>
            <li className='hover:text-white cursor-pointer'>Maqolalar</li>
            <li className='hover:text-white cursor-pointer'>Roadmap</li>
            <li className='hover:text-white cursor-pointer'>Biz haqimizda</li>
          </ul>
        </div>
      </div>
      <div className='w-full items-center text-center py-4 border-t border-primary'>
        <p className='text-sm text-primary'>
          &copy; 2025 dsa.com.uz. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

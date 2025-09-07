'use client'
import Navbar from "../Navbar";
import {CheckCircle} from "lucide-react";
import Background from "./background";

export default function Main() {
  return (
    <div className='w-full min-h-full bg-primary text-white overflow-hidden'>
      <Navbar />
      <main className='relative flex flex-col items-center justify-center h-screen border-b border-primary max-h-[100vh]'>
        <Background />
        <h1 className='text-7xl font-extrabold text-center text-gray-100 p-8'>
          Ma'lumot turlari va Algoritmlarni_ O'zbek tilida o'rganing
        </h1>
        <p className='mt-4 text-lg text-[#888888] text-center max-w-4xl'>
          Bu yerda siz ma'lumot turlari va algoritmlarni oson va tushunarli
          tarzda o'rganishingiz, amaliy masalalarni yechishingiz hamda o'z
          bilimlaringizni mustahkamlashingiz mumkin. Platformamiz zamonaviy va
          interaktiv darslar, testlar hamda jamoa bilan birga rivojlanish
          imkoniyatini taqdim etadi.
        </p>

        <div className='flex gap-4 mt-6'>
          <button className='px-4 py-2 text-black bg-gray-100 rounded-lg cursor-pointer h-10 w-32 hover:opacity-70'>
            Masalalar
          </button>
          <button
            className='px-4 py-2 text-white bg-black border rounded-lg cursor-pointer h-10 w-32 hover:opacity-70'
            onClick={() => (window.location.href = "/problemset")}>
            O'rganish
          </button>
        </div>

        <div className='flex items-center justify-center mt-8 gap-5'>
          <div className='flex items-center'>
            <CheckCircle className='h-6 w-6 text-green-700' />
            <span className='ml-1 text-sm text-primary'>100% tekin</span>
          </div>

          <div className='flex items-center'>
            <CheckCircle className='h-6 w-6 text-green-700' />
            <span className='ml-1 text-primary text-sm'>
              Oson tushunarli darslar
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

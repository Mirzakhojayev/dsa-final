"use client";
import Navbar from "../Navbar";
import {CheckCircle} from "lucide-react";
import Background from "./background";
import Footer from "../Footer";
import Features from "./features";
import Learn from "./learn";
import Courses from "./courses";
import RecentProblems from "./recentProblems";
import Image from "next/image";

export default function Main() {
  return (
    <div className='w-full min-h-full bg-primary text-white overflow-hidden'>
      <Navbar />
      <main className='relative flex flex-col items-center justify-center h-screen border-b border-primary max-h-[100vh]'>
        <Background />
        <div className='relative z-10 flex flex-col items-center'>
          <h1 className='text-7xl font-extrabold text-center text-gray-100 p-8'>
            Ma'lumot turlari va Algoritmlarni <br /> O'zbek tilida o'rganing
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
        </div>
      </main>
      <Features />
      <Courses />
      <div className='relative w-full h-[70vh] mt-10 mb-10 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-transparent z-10'></div>
        <Image
          src='/main-bg-image.png'
          alt='Platform Preview'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center'>
          <h2 className='text-5xl font-bold text-white mb-4'>
            Zamonaviy Dasturlash Platformasi
          </h2>
          <p className='text-xl text-[#CCCCCC] max-w-2xl'>
            Interaktiv darslar va real vaqtda test qilish imkoniyati
          </p>
        </div>
      </div>
      <RecentProblems />
      {/* <Learn /> */}
      <Footer />
    </div>
  );
}

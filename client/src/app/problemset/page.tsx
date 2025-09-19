import React from "react";
import Navbar from "../components/Navbar";
import ProblemsTable from "../components/ProblemsTable";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type Props = {};

const ProblemSetPage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className='relative w-full max-w-[80%] mx-auto mt-[80px]'>
        <Carousel className='w-full h-full p-4'>
          <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
          <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
          <CarouselContent className='[&>*]:basis-[280px] md:[&>*]:basis-[320px] lg:[&>*]:basis-[320px] [&>*]:h-[190px]'>
            <CarouselItem>
              <div className='h-[180px] flex flex-col justify-between px-3 py-4 rounded-xl bg-gradient-to-br from-green-700 to-green-900 border border-green-600/20 shadow-lg'>
                <div className=''>
                  <h2 className='font-semibold text-lg leading-tight'>
                    DSA's Data Structures Crash Course:
                  </h2>
                  <p className='opacity-70 text-sm leading-snug'>
                    Data Structures & Algorithms
                  </p>
                </div>
                <Button
                  className='bg-[#FFFFFF] hover:bg-[#d9d9d9] cursor-pointer text-black w-[120px] h-7'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='h-[180px] flex flex-col justify-between px-3 py-4 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-600/20 shadow-lg'>
                <div className='space-y-1'>
                  <h2 className='font-semibold text-lg leading-tight min-h-[20px]'>
                    DSA's Algorithms Crash Course:
                  </h2>
                  <p className='opacity-70 text-sm leading-snug'>
                    Algorithms & Problem Solving
                  </p>
                </div>
                <Button
                  className='bg-[#FFFFFF] hover:bg-[#d9d9d9] cursor-pointer text-black w-[120px] h-7'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='h-[180px] flex flex-col justify-between px-3 py-4 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/20 shadow-lg'>
                <div className='space-y-1'>
                  <h2 className='font-semibold text-lg leading-tight min-h-[20px]'>
                    DSA's System Design Crash Course:
                  </h2>
                  <p className='opacity-70 text-sm leading-snug'>
                    System Design & Architecture
                  </p>
                </div>
                <Button
                  className='bg-[#FFFFFF] hover:bg-[#d9d9d9] cursor-pointer text-black w-[120px] h-7'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='h-[180px] flex flex-col justify-between px-3 py-4 rounded-xl bg-gradient-to-br from-orange-600 to-red-800 border border-orange-500/20 shadow-lg'>
                <div className='space-y-1'>
                  <h2 className='font-semibold text-lg leading-tight min-h-[20px]'>
                    DSA's Databases Crash Course:
                  </h2>
                  <p className='opacity-70 text-sm leading-snug'>
                    Databases & Data Management
                  </p>
                </div>
                <Button
                  className='bg-[#FFFFFF] hover:bg-[#d9d9d9] cursor-pointer text-black w-[120px] h-7'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className='relative overflow-x-auto mx-auto mt-4 px-6 pb-10'>
          <ProblemsTable />
      </div>
    </div>
  );
};

export default ProblemSetPage;

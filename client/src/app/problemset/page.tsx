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
      <div className='relative w-full max-w-[70%] mx-auto mt-[80px]'>
        <Carousel className='w-full h-full p-4'>
          <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
          <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
          <CarouselContent>
            <CarouselItem className='basis-3/10'>
              <div className='flex flex-col px-4 py-5 rounded-xl bg-gradient-to-br from-green-700 to-green-900 border border-green-600/20 shadow-lg'>
                <h2 className='font-semibold text-xl'>
                  DSA's Data Structures Crash Course:
                </h2>
                <p className='opacity-70 text-sm'>
                  Data Structures & Algorithms
                </p>
                <Button
                  variant='outline'
                  className='bg-[#FFFFFF] hover:bg-white text-black max-w-[120px] h-8 mt-4'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-3/10'>
              <div className='flex flex-col px-4 py-5 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-600/20 shadow-lg'>
                <h2 className='font-semibold text-xl'>
                  DSA's Algorithms Crash Course:
                </h2>
                <p className='opacity-70 text-sm'>
                  Algorithms & Problem Solving
                </p>
                <Button
                  variant='outline'
                  className='bg-[#FFFFFF] hover:bg-white text-black max-w-[120px] h-8 mt-4'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-3/10'>
              <div className='flex flex-col px-4 py-5 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/20 shadow-lg'>
                <h2 className='font-semibold text-xl'>
                  DSA's System Design Crash Course:
                </h2>
                <p className='opacity-70 text-sm'>
                  System Design & Architecture
                </p>
                <Button
                  variant='outline'
                  className='bg-[#FFFFFF] hover:bg-white text-black max-w-[120px] h-8 mt-4'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-3/10'>
              <div className='flex flex-col px-4 py-5 rounded-xl bg-gradient-to-br from-orange-600 to-red-800 border border-orange-500/20 shadow-lg'>
                <h2 className='font-semibold text-xl'>
                  DSA's Databases Crash Course:
                </h2>
                <p className='opacity-70 text-sm'>
                  Databases & Data Management
                </p>
                <Button
                  variant='outline'
                  className='bg-[#FFFFFF] hover:bg-white text-black max-w-[120px] h-8 mt-4'>
                  Start Learning
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className='relative overflow-x-auto mx-auto mt-4 px-6 pb-10'>
        <table className='text-sm text-left text-gray-400 mx-auto w-full max-w-[70%]'>
          <thead className='text-gray-100 uppercase border-b border-[#888888]'>
            <tr>
              <th
                scope='col'
                className='px-1 py-3 w-0 font-medium'>
                Status
              </th>
              <th
                scope='col'
                className='px-6 py-3 w-0 font-medium'>
                Title
              </th>
              <th
                scope='col'
                className='px-6 py-3 w-0 font-medium'>
                Difficulty
              </th>

              <th
                scope='col'
                className='px-6 py-3 w-0 font-medium'>
                Category
              </th>
              <th
                scope='col'
                className='px-6 py-3 w-0 font-medium'>
                Solution
              </th>
            </tr>
          </thead>
          <ProblemsTable />
        </table>
      </div>
    </div>
  );
};

export default ProblemSetPage;

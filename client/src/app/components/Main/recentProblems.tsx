import Link from "next/link";
import {problems} from "../ProblemsTable/mockProblems";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecentProblems = () => {
  const recentProblems = problems.slice(0, 6);

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Easy") return "bg-[#1a4d2e] text-[#4ade80]";
    if (difficulty === "Medium") return "bg-[#4d3a1a] text-[#fbbf24]";
    return "bg-[#4d1a1a] text-[#f87171]";
  };

  return (
    <div className='w-full py-10'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-white mb-8'>
          So'nggi Masalalar
        </h1>

        <Carousel className='w-full relative'>
          <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
          <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
          <CarouselContent className='ml-0'>
            {recentProblems.map((problem) => (
              <CarouselItem
                key={problem.id}
                className='basis-1/3'>
                <div className='max-w-[380px] h-[300px] flex flex-col justify-between bg-[#141414] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#3A3A3A]'>
                  <div className='items-center gap-2 mb-3'>
                    <div className="flex items-center gap-2 mb-3">
                    <h3 className='text-lg font-semibold text-white'>
                      {problem.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                        problem.difficulty
                      )}`}>
                      {problem.difficulty}
                    </span>
                    </div>
                    <p className="text-[#9f9f9f]">{problem.description.length < 200 ? problem.description : problem.description.substring(0, 200)}...</p>
                  </div>

                  <Link href={`/problem/${problem.id}`}>
                    <button className='w-full bg-[#FFFFFF] hover:bg-[#E5E5E5] cursor-pointer text-black font-semibold py-2 px-4 mt-2 rounded-lg transition'>
                      Yechish
                    </button>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default RecentProblems;

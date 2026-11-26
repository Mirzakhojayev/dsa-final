"use client";

import {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {getQuestions} from "@/lib/api";
import type {Difficulty, QuestionListItem} from "@/types/question";

const RECENT_COUNT = 6;

const difficultyColor: Record<Difficulty, string> = {
  Easy: "bg-[#1a4d2e] text-[#4ade80]",
  Medium: "bg-[#4d3a1a] text-[#fbbf24]",
  Hard: "bg-[#4d1a1a] text-[#f87171]",
};

const cardClass =
  "max-w-[380px] h-[300px] flex flex-col justify-between bg-[#141414] border border-[#2A2A2A] rounded-xl p-5";

const RecentProblems = () => {
  const [problems, setProblems] = useState<QuestionListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback((signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    getQuestions({sort: "newest", limit: RECENT_COUNT}, {signal})
      .then(setProblems)
      .catch((err: Error) => {
        if (signal?.aborted) return;
        setError(err.message);
      })
      .finally(() => {
        if (!signal?.aborted) setLoading(false);
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  return (
    <div className='w-full py-10'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-white mb-8'>
          So'nggi Masalalar
        </h1>

        {loading && (
          <div className='grid grid-cols-3 gap-4'>
            {Array.from({length: 3}).map((_, idx) => (
              <div
                key={idx}
                className={`${cardClass} animate-pulse`}>
                <div>
                  <div className='h-6 w-2/3 rounded bg-[#2a2a2a] mb-4' />
                  <div className='h-4 w-full rounded bg-[#2a2a2a] mb-2' />
                  <div className='h-4 w-5/6 rounded bg-[#2a2a2a]' />
                </div>
                <div className='h-10 w-full rounded-lg bg-[#2a2a2a]' />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className='rounded-xl border border-[#2A2A2A] bg-[#141414] p-6 text-center'>
            <p className='text-red-400'>
              Masalalarni yuklashda xatolik yuz berdi: {error}
            </p>
            <button
              onClick={() => load()}
              className='mt-3 px-4 py-1 rounded bg-gray-100 text-black cursor-pointer hover:opacity-70'>
              Qayta urinish
            </button>
          </div>
        )}

        {!loading && !error && problems.length === 0 && (
          <p className='text-[#9f9f9f]'>Hozircha masalalar yo&apos;q.</p>
        )}

        {!loading && !error && problems.length > 0 && (
          <Carousel className='w-full relative'>
            <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
            <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#1E1E1E] hover:bg-[#2E2E2E] border-gray-800 z-10' />
            <CarouselContent className='ml-0'>
              {problems.map((problem) => (
                <CarouselItem
                  key={problem.slug}
                  className='basis-1/3'>
                  <div className={`${cardClass} hover:border-[#3A3A3A]`}>
                    <div className='items-center gap-2 mb-3'>
                      <div className='flex items-center gap-2 mb-3'>
                        <h3 className='text-lg font-semibold text-white'>
                          {problem.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            difficultyColor[problem.difficulty]
                          }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <p className='text-[#9f9f9f]'>{problem.excerpt}</p>
                    </div>

                    <Link href={`/problem/${problem.slug}`}>
                      <button className='w-full bg-[#FFFFFF] hover:bg-[#E5E5E5] cursor-pointer text-black font-semibold py-2 px-4 mt-2 rounded-lg transition'>
                        Yechish
                      </button>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default RecentProblems;

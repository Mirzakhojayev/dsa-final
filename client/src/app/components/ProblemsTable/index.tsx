"use client";

import {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {CheckCircle} from "lucide-react";
import {getQuestions} from "@/lib/api";
import type {Difficulty, QuestionListItem} from "@/types/question";

const difficultyColor: Record<Difficulty, string> = {
  Easy: "text-green-500",
  Medium: "text-yellow-500",
  Hard: "text-red-500",
};

const COLUMN_COUNT = 4;
const SKELETON_ROWS = 6;

const ProblemsTable = () => {
  const [problems, setProblems] = useState<QuestionListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback((signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    getQuestions({}, {signal})
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
    <table
      className='text-sm text-left text-gray-400 mx-auto w-full max-w-[80%] rounded-lg mb-4'
      style={{borderCollapse: "separate", borderSpacing: "0px 6px"}}>
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
        </tr>
      </thead>
      <tbody className='text-white rounded-lg mb-4'>
        {loading &&
          Array.from({length: SKELETON_ROWS}).map((_, idx) => (
            <tr key={idx}>
              <td
                colSpan={COLUMN_COUNT}
                className='bg-[#151515] rounded-lg px-4 py-3'>
                <div className='h-4 w-full rounded bg-[#2a2a2a] animate-pulse' />
              </td>
            </tr>
          ))}

        {!loading && error && (
          <tr>
            <td
              colSpan={COLUMN_COUNT}
              className='bg-[#151515] rounded-lg px-4 py-6 text-center'>
              <p className='text-red-400'>
                Masalalarni yuklashda xatolik yuz berdi: {error}
              </p>
              <button
                onClick={() => load()}
                className='mt-3 px-4 py-1 rounded bg-gray-100 text-black cursor-pointer hover:opacity-70'>
                Qayta urinish
              </button>
            </td>
          </tr>
        )}

        {!loading && !error && problems.length === 0 && (
          <tr>
            <td
              colSpan={COLUMN_COUNT}
              className='bg-[#151515] rounded-lg px-4 py-6 text-center text-[#ADADAD]'>
              Hozircha masalalar yo&apos;q.
            </td>
          </tr>
        )}

        {!loading &&
          !error &&
          problems.map((doc) => (
            <tr
              key={doc.slug}
              className='align-middle hover:opacity-70 cursor-pointer'>
              {/* TODO (step 4.8): show only for problems the user has solved */}
              <td className='px-4 py-2 bg-[#151515] text-[#FFFFFF] rounded-l-lg w-10'>
                <CheckCircle size={22} />
              </td>

              <td className='px-4 py-2 bg-[#151515] text-[#FFFFFF] font-semibold'>
                <Link
                  href={`/problem/${doc.slug}`}
                  className='flex items-center gap-6 font-medium'>
                  {doc.order}. {doc.title}
                </Link>
              </td>

              <td className={`bg-[#151515]`}>
                <span className={`${difficultyColor[doc.difficulty]} ml-6`}>
                  {doc.difficulty}
                </span>
              </td>

              <td className='px-4 py-2 bg-[#151515] text-[#ADADAD] rounded-r-lg'>
                {doc.category}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ProblemsTable;

"use client";

import {problems} from "./mockProblems";
import Link from "next/link";
import {CheckCircle} from "lucide-react";

const ProblemsTable = () => {
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
        {problems.map((doc, idx) => {
          const difficultyColor =
            doc.difficulty === "Easy"
              ? "green"
              : doc.difficulty === "Medium"
              ? "yellow"
              : "red";
          return (
            <tr
              key={doc.id}
              className='align-middle hover:opacity-70 cursor-pointer'>
              <td className='px-4 py-2 bg-[#0f0f0f] text-[#FFFFFF] rounded-l-lg w-10'>
                <CheckCircle size={22} />
              </td>

              <td className='px-4 py-2 bg-[#0f0f0f] text-[#FFFFFF] font-semibold'>
                <Link
                  href={`/problems/${doc.id}`}
                  className='flex items-center gap-6 font-medium'>
                  {doc.title}
                </Link>
              </td>

              <td className={`bg-[#0f0f0f]`}>
                  <span className={`text-${difficultyColor}-600 ml-6`}>
                    {doc.difficulty}
                  </span>
              </td>

              <td className='px-4 py-2 bg-[#0f0f0f] text-[#ADADAD] rounded-r-lg'>
                {doc.category}
              </td>

              {/* <td
                colSpan={4}
                className='py-2'>
                <div className='rounded-lg bg-[#181818] flex items-center gap-6 px-3'>
                  <div className='flex items-center justify-center w-8'>
                    <CheckCircle size={20} />
                  </div>
                  <div className="flex py-2 gap-4 items-center justify-around w-full">
                    <Link
                      className='hover:opacity-50 text-lg font-medium'
                      href={`/problems/${doc.id}`}>
                      {doc.title}
                    </Link>
                    <div className='mt-1 text-sm text-[#888888]'>
                      {doc.category}
                    </div>
                    <div }>
                      {doc.difficulty}
                    </div>
                  </div>
                </div>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProblemsTable;

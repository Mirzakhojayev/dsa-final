import {
  BookOpenText,
  CheckCircle,
  Lightbulb,
  NotebookText,
} from "lucide-react";
import React from "react";

type Props = {};

const ProblemDescription = (props: Props) => {
  return (
    <div className='h-screen bg-[#262626] m-1 rounded-xl'>
      {/* Header */}
      <div className='flex gap-2 items-center px-2 py-1 bg-[#333333] text-[#b4b4b4] text-sm rounded-t-xl'>
        <div className='flex gap-1 items-center cursor-pointer hover:bg-[#444444] px-2 py-1 rounded'>
          <NotebookText size={18} />
          <span>Description</span>
        </div>
        <div className='w-[2px] self-center h-5 bg-[#888888]'></div>
        <div className='flex gap-1 items-center cursor-pointer hover:bg-[#444444] px-2 py-1 rounded'>
          <BookOpenText size={18} />
          <span>Editorial</span>
        </div>
        <div className='w-[2px] self-center h-5 bg-[#888888]'></div>
        <div className='flex gap-1 items-center cursor-pointer hover:bg-[#444444] px-2 py-1 rounded'>
          <Lightbulb size={18} />
          <span>Solution</span>
        </div>
      </div>

      <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto custom-scrollbar'>
        <div className='px-5'>
          {/* Problem heading */}
          <div className='w-full'>
            <div className='flex space-x-4'>
              <div className='flex-1 mr-2 text-lg text-white font-medium'>
                1. Two Sum
              </div>
            </div>
            <div className='flex items-center mt-3'>
              <div className='text-green-500 bg-[#333333] inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize'>
                Easy
              </div>
              <div className='rounded p-[3px] ml-4 text-lg text-green-500'>
                <CheckCircle />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className='text-white text-sm'>
              <p className='mt-3'>
                Given an array of integers <code>nums</code> and an integer{" "}
                <code>target</code>, return
                <em>
                  indices of the two numbers such that they add up to
                </em>{" "}
                <code>target</code>.
              </p>
              <p className='mt-3'>
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use
                thesame element twice.
              </p>
              <p className='mt-3'>You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className='mt-4'>
              {/* Example 1 */}
              <div>
                <p className='font-medium text-white '>Example 1: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input: </strong> nums =
                    [2,7,11,15], target = 9 <br />
                    <strong>Output:</strong> [0,1] <br />
                    <strong>Explanation:</strong>Because nums[0] + nums[1] == 9,
                    we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className='font-medium text-white '>Example 2: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input: </strong> nums =
                    [3,2,4], target = 6 <br />
                    <strong>Output:</strong> [1,2] <br />
                    <strong>Explanation:</strong>Because nums[1] + nums[2] == 6,
                    we return [1, 2].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className='font-medium text-white '>Example 3: </p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input: </strong> nums =
                    [3,3], target = 6
                    <br />
                    <strong>Output:</strong> [0,1] <br />
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className='my-5'>
              <div className='text-white font-bold text-lg'>Constraints:</div>
              <ul className='text-sm text-[#b4b4b4] ml-5 list-disc'>
                <li className='mt-2'>
                  <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li className='mt-2'>
                  <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li className='mt-2'>
                  <code>-10 ≤ target ≤ 10</code>
                </li>
                <li className='mt-2 text-sm'>
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>

            {/* TestCases */}
            <div className='flex items-center mt-1 text-white font-bold text-lg'>
              Testcases:
            </div>
            <div className='flex flex-col my-1'>
              {/* Case 1 */}
              <div className='flex items-center text-white font-medium'>
                <span>Case 1:</span>
              </div>
              <div className='font-semibold text-sm text-white'>
                <div className='example-card my-1'>
                  <p className='text-sm font-medium text-white'>
                    Input:{" "}
                    <span className='text-[#b4b4b4] font-normal'>
                      nums: [2, 7, 11, 15], target: 9
                    </span>
                  </p>
                  <p className='text-sm font-medium text-white'>
                    Output:{" "}
                    <span className='text-[#b4b4b4] font-normal'>[0, 1]</span>
                  </p>
                </div>
              </div>
              {/* Case 2 */}
              <div className='flex items-center py-1 text-white font-medium'>
                <span>Case 2:</span>
              </div>
              {/* Case 3 */}
              <div className='flex items-center py-1 text-white font-medium'>
                <span>Case 3:</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;

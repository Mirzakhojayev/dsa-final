import {
  BookOpenText,
  CheckCircle,
  Lightbulb,
  NotebookText,
} from "lucide-react";
import React from "react";
import type {Difficulty, Question} from "@/types/question";

const difficultyColor: Record<Difficulty, string> = {
  Easy: "text-green-500",
  Medium: "text-yellow-500",
  Hard: "text-red-500",
};

// Renders `backtick` spans as <code>. Odd-indexed parts of the split are inside backticks.
const renderInline = (text: string) =>
  text.split("`").map((part, idx) =>
    idx % 2 === 1 ? (
      <code
        key={idx}
        className='bg-[#3a3a3a] text-[#e6e6e6] px-1 py-0.5 rounded font-mono text-[13px]'>
        {part}
      </code>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );

type Props = {
  question: Question;
};

const ProblemDescription = ({question}: Props) => {
  const paragraphs = question.description
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

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
        <div className='px-5 w-full'>
          {/* Problem heading */}
          <div className='w-full'>
            <div className='flex space-x-4'>
              <div className='flex-1 mr-2 text-lg text-white font-medium'>
                {question.order}. {question.title}
              </div>
            </div>
            <div className='flex items-center mt-3'>
              <div
                className={`${
                  difficultyColor[question.difficulty]
                } bg-[#333333] inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize`}>
                {question.difficulty}
              </div>
              <div className='bg-[#333333] text-[#b4b4b4] inline-block rounded-[21px] px-2.5 py-1 ml-2 text-xs font-medium'>
                {question.category}
              </div>
              {/* TODO (step 4.8): show only when the user has solved this problem */}
              <div className='rounded p-[3px] ml-4 text-lg text-green-500'>
                <CheckCircle />
              </div>
            </div>

            {/* Problem statement */}
            <div className='text-white text-sm'>
              {paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className='mt-3 leading-relaxed'>
                  {renderInline(paragraph)}
                </p>
              ))}
            </div>

            {/* Examples */}
            {question.examples.length > 0 && (
              <div className='mt-4'>
                {question.examples.map((example, idx) => (
                  <div key={idx}>
                    <p className='font-medium text-white'>Example {idx + 1}:</p>
                    <div className='example-card'>
                      <pre>
                        <strong className='text-white'>Input: </strong>
                        {example.input}
                        <br />
                        <strong className='text-white'>Output: </strong>
                        {example.output}
                        {example.explanation && (
                          <>
                            <br />
                            <strong className='text-white'>Explanation: </strong>
                            {example.explanation}
                          </>
                        )}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Constraints */}
            {question.constraints.length > 0 && (
              <div className='my-5'>
                <div className='text-white font-bold text-lg'>Constraints:</div>
                <ul className='text-sm text-[#b4b4b4] ml-5 list-disc'>
                  {question.constraints.map((constraint, idx) => (
                    <li
                      key={idx}
                      className='mt-2'>
                      <code>{constraint}</code>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Test cases (only visible ones are sent by the API) */}
            {question.testCases.length > 0 && (
              <>
                <div className='flex items-center mt-1 text-white font-bold text-lg'>
                  Testcases:
                </div>
                <div className='flex flex-col my-1 pb-4'>
                  {question.testCases.map((testCase, idx) => (
                    <div key={idx}>
                      <div className='flex items-center py-1 text-white font-medium'>
                        <span>Case {idx + 1}:</span>
                      </div>
                      <div className='example-card my-1'>
                        <p className='text-sm font-medium text-white'>Input:</p>
                        <pre className='font-mono'>{testCase.input}</pre>
                        <p className='text-sm font-medium text-white mt-2'>
                          Output:
                        </p>
                        <pre className='font-mono'>{testCase.output}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;

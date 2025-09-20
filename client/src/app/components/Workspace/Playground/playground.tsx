"use client";
import {ChevronDown, Code2} from "lucide-react";
import React, {useRef, useState} from "react";
import dynamic from "next/dynamic";
import LanguageModal from "./languageModal";

const Editor = dynamic(() => import("@monaco-editor/react"), {ssr: false});

const Playground = () => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  return (
    <div className='w-full'>
      <div className='bg-[#262626] m-1 rounded-xl flex flex-col h-screen overflow-hidden'>
        <div className='flex gap-1 items-center px-4 py-2 bg-[#333333] text-[#b4b4b4] text-sm rounded-t-xl'>
          <Code2 size={18} />
          <span>Code</span>
        </div>
        <div className='p-1'>
          <button
            className='text-[#b4b4b4] flex items-center gap-1 cursor-pointer hover:bg-[#333333]/[0.7] px-1 rounded'
            onClick={() => setIsLanguageModalOpen(!isLanguageModalOpen)}>
            <span>Python</span>
            <ChevronDown size={18} />
          </button>
          {isLanguageModalOpen && <LanguageModal />}
        </div>
        <div className='h-[1px] w-full bg-[#4e4e4e]'></div>
        <div className='h-full'>
          <Editor
            language='python'
            theme='vs-dark'
            height='100%'
            options={{
              fontSize: 14,
              minimap: {enabled: false},
              automaticLayout: true,
              scrollBeyondLastLine: false,
            }}
            defaultValue={`def two_sum(nums, target):
        # Create a dictionary to store number indices
        num_map = {}
        for i, num in enumerate(nums):
          complement = target - num
          if complement in num_map:
            # Return indices if complement is found
            return [num_map[complement], i]
          num_map[num] = i
        return []

      if __name__ == "__main__":
        nums = [2, 7, 11, 15]
        target = 9
        result = two_sum(nums, target)
        print("Indices:", result)
      `}
          />
        </div>
      </div>
    </div>
  );
};

export default Playground;

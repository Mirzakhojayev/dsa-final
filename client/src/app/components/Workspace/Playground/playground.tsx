"use client";
import {ChevronDown, Code2} from "lucide-react";
import React, {useRef, useState} from "react";
import dynamic from "next/dynamic";
import LanguageModal from "./languageModal";
import {useLanguageStore} from "@/store/useLanguageStore";

const Editor = dynamic(() => import("@monaco-editor/react"), {ssr: false});

const defaultCode = {

  Cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[i] + nums[j] == target) {
                return {i, j};
            }
        }
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,

  Python: `def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []

if __name__ == "__main__":
    nums = [2, 7, 11, 15]
    target = 9
    result = two_sum(nums, target)
    print("Indices:", result)`,

  JavaScript: `function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log("Indices:", result);`,

  Java: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[] {numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        return new int[] {};
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }
}`,
};

const Playground = () => {
  const {language, setLanguage} = useLanguageStore();
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
            <span>{language}</span>
            <ChevronDown size={18} />
          </button>
          {isLanguageModalOpen && (
            <LanguageModal onClose={() => setIsLanguageModalOpen(false)} />
          )}
        </div>
        <div className='h-[1px] w-full bg-[#4e4e4e]'></div>
        <div className='h-full'>
          <Editor
            language={language.toLowerCase()}
            theme='vs-dark'
            height='100%'
            options={{
              fontSize: 14,
              minimap: {enabled: false},
              automaticLayout: true,
              scrollBeyondLastLine: false,
            }}
            value={defaultCode[language as keyof typeof defaultCode]}
          />
        </div>
      </div>
    </div>
  );
};

export default Playground;

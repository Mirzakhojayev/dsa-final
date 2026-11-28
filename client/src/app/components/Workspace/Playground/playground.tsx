"use client";
import {ChevronDown, Code2, RotateCcw} from "lucide-react";
import React, {useState} from "react";
import dynamic from "next/dynamic";
import LanguageModal from "./languageModal";
import {useLanguageStore, type Language} from "@/store/useLanguageStore";
import type {Question} from "@/types/question";

const Editor = dynamic(() => import("@monaco-editor/react"), {ssr: false});

const LANGUAGES: Language[] = ["Cpp", "Python", "JavaScript", "Java"];

// Generic templates. TODO (step 4.4): per-problem starter code that reads stdin.
const defaultCode: Record<Language, string> = {
  Cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write your solution here

    return 0;
}
`,

  Python: `# Write your solution here
`,

  JavaScript: `// Write your solution here
`,

  Java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your solution here
    }
}
`,
};

// Code is saved per problem and per language, so switching languages or
// reloading the page never loses work.
const storageKey = (slug: string, lang: Language) => `dsa:code:${slug}:${lang}`;

const loadCode = (slug: string): Record<Language, string> => {
  const code = {...defaultCode};
  if (typeof window === "undefined") return code;
  for (const lang of LANGUAGES) {
    const saved = window.localStorage.getItem(storageKey(slug, lang));
    if (saved !== null) code[lang] = saved;
  }
  return code;
};

type Props = {
  question: Question;
};

const Playground = ({question}: Props) => {
  const {language} = useLanguageStore();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [code, setCode] = useState(() => loadCode(question.slug));

  const updateCode = (value: string) => {
    setCode((prev) => ({...prev, [language]: value}));
    window.localStorage.setItem(storageKey(question.slug, language), value);
  };

  const resetCode = () => {
    if (!window.confirm("Kodni boshlang'ich holatiga qaytarasizmi?")) return;
    setCode((prev) => ({...prev, [language]: defaultCode[language]}));
    window.localStorage.removeItem(storageKey(question.slug, language));
  };

  return (
    <div className='w-full'>
      <div className='bg-[#262626] m-1 rounded-xl flex flex-col h-screen overflow-hidden'>
        <div className='flex gap-1 items-center px-4 py-2 bg-[#333333] text-[#b4b4b4] text-sm rounded-t-xl'>
          <Code2 size={18} />
          <span>Code</span>
        </div>
        <div className='p-1 flex items-start justify-between'>
          <div>
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
          <button
            className='text-[#b4b4b4] flex items-center cursor-pointer hover:bg-[#333333]/[0.7] p-1 rounded'
            onClick={resetCode}
            title="Kodni tiklash">
            <RotateCcw size={16} />
          </button>
        </div>
        <div className='h-[1px] w-full bg-[#4e4e4e]'></div>
        <div className='h-full'>
          <Editor
            // A separate Monaco model per problem + language keeps undo history apart.
            path={`${question.slug}/${language}`}
            language={language.toLowerCase()}
            theme='vs-dark'
            height='100%'
            options={{
              fontSize: 14,
              minimap: {enabled: false},
              automaticLayout: true,
              scrollBeyondLastLine: false,
            }}
            value={code[language]}
            onChange={(value) => updateCode(value ?? "")}
          />
        </div>
      </div>
    </div>
  );
};

export default Playground;

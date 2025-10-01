import React from 'react'
import { mockArticles } from './mockArticles'

type Props = {
  activeCategory: string;
}

const Sidebar = ({ activeCategory }: Props) => {
  const categories = [...new Set(mockArticles.map(a => a.category))];
  
  return (
    <div 
    className='flex flex-col p-4 left-0 top-15 h-screen w-65 border-r border-[#2A2A2A] fixed'
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <a 
            key={category}
            href={`#${category}`}
            className={`group flex items-center justify-between text-lg font-semibold px-3 py-2 transition-colors hover:border-y border-[#2A2A2A] cursor-pointer ${
              isActive ? 'text-white bg-[#1A1A1A] border-l-2 border-[#FFFFFF]' : 'text-[#888888]'
            }`}
          >
            <span>{category}</span>
            <span className='ml-3 text-[#888888] opacity-0 transform translate-x-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1'>
              →
            </span>
          </a>
        );
      })}
    </div>
  )
}

export default Sidebar
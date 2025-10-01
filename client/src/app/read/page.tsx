"use client";
import Navbar from "../components/Navbar";
import {mockArticles} from "./mockArticles";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";

const ReadPage = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const groupedArticles = mockArticles.reduce((acc, article) => {
    const category = article.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, typeof mockArticles>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px" }
    );

    Object.keys(groupedArticles).forEach((category) => {
      const element = document.getElementById(category);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#000000] to-[#0F0F0F]">
      <Navbar />
      <Sidebar activeCategory={activeCategory} />
      <div className='p-8 mx-auto mt-[80px] ml-[260px]'>
        {Object.entries(groupedArticles).map(([category, articles]) => (
          <div
            key={category}
            id={category}
            className='mb-12'>
            <div className='flex items-center gap-4 mb-4'>
              <h3 className='text-3xl font-bold text-white'>{category}</h3>
              <div className='flex-1 h-[1px] bg-[#2A2A2A]'></div>
            </div>
            <table
              className='text-sm text-left text-gray-400 w-full mb-4'
              style={{borderCollapse: "separate", borderSpacing: "0px 6px"}}>
              <tbody>
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className='bg-[#181818] hover:bg-[#202020] hover:scale-[1.01] transition-all duration-200 border-l-2 border-transparent hover:border-[#4A4A4A]'>
                    <td className='rounded-lg'>
                      <Link
                        href={`/read/${article.id}`}
                        className='block text-white hover:text-gray-300 px-5 py-3'>
                        <h3 className='text-[18px] font-semibold'>
                          {article.title}
                        </h3>
                        <p className='text-[#888888] text-sm mt-1'>
                          {article.content.substring(0, 170)}...
                        </p>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadPage;

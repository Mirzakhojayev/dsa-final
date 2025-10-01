'use client';
import Navbar from "@/app/components/Navbar";
import React from "react";
import { mockArticles } from "../mockArticles";
import { useParams } from "next/navigation";

const Article = () => {
  const { article } = useParams() as { article: string };
  const found = mockArticles.find(a => String(a.id) === article);
  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-5xl mx-auto mt-[80px]">
        {found ? (
          <div key={String(found.id)}>
            <h2 className="text-6xl font-bold text-white">{found.title}</h2>
            <p className="text-white text-xl">{found.content}</p>
          </div>
        ) : (
          <p className="text-white text-xl">Maqola topilmadi.</p>
        )}
      </div>
    </div>
  );
};

export default Article;

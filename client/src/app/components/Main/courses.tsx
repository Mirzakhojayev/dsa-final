import React from "react";
import { Sigma, Ruler, Calculator, Braces, Server } from "lucide-react";

type Course = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const data: Course[] = [
  { name: "Mathematics", Icon: Sigma },
  { name: "Geometry", Icon: Ruler },
  { name: "Calculus", Icon: Calculator },
  { name: "DS&A", Icon: Braces },
  { name: "Information Technologies", Icon: Server },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-bold">Kurslar</h1>
      <div className="grid grid-cols-5 gap-6 my-4">
        {data.map(({ name, Icon }, i) => {
          const accents = [
            { from: "from-fuchsia-500/20", to: "to-purple-500/10" },
            { from: "from-emerald-500/20", to: "to-teal-500/10" },
            { from: "from-amber-500/20", to: "to-orange-500/10" },
            { from: "from-sky-500/20", to: "to-indigo-500/10" },
            { from: "from-rose-500/20", to: "to-pink-500/10" },
          ];
          const accent = accents[i % accents.length];
          return (
            <div
              key={i}
              className="relative cursor-pointer h-64 rounded-3xl border border-[#2A2A2A] bg-[#141414] p-6 overflow-hidden group transition-all duration-300 hover:border-[#444444] hover:bg-[#1E1E1E] hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="text-xl font-extrabold text-white drop-shadow-sm">{name}</div>

              <div className={`absolute -top-10 -right-10 h-44 w-44 rounded-full blur-2xl opacity-50 bg-gradient-to-br ${accent.from} ${accent.to}`} />

          <div className="absolute bottom-5 right-5 h-28 w-28 rounded-2xl bg-[#1E1E1E] border border-[#444444] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A4A4A] to-transparent opacity-70" />
            <Icon className="h-16 w-16 text-[#FFFFFF] drop-shadow-[0_0_12px_rgba(0,0,0,0.45)]" />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

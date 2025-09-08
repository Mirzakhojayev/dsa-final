"use client";

import {useEffect, useMemo, useRef, useState} from "react";

type Section = {
  id: string;
  title: string;
  points: string[];
};

export default function Learn() {
  const sections: Section[] = useMemo(
    () => [
      {
        id: "intro",
        title: "Bu platforma qanday ishlaydi?",
        points: [
          `Biz Ma'lumot turlari va Algoritmlarni va boshqa yo‘nalishlarni bosqichma-bosqich, sodda va tushunarli tilda izohlaymiz. 
          Har bir mavzuni oddiydan murakkabga qarab olib boramiz, shunda o‘quvchi asta-sekin bilimlarini 
          chuqurlashtirib boradi. Nazariy qoidalarni yanada aniqroq tushunish uchun ko‘rinadigan hayotiy
          misollar, turli xil vizuallashtirishlar va qiziqarli amaliy mashqlar bilan mustahkamlab boramiz. 
          Eng muhimi, barcha yo‘l-yo‘riqlarni faqat o‘zbek tilida, qisqa, aniq va tushunarli tarzda taqdim 
          etamiz. Shunday qilib, o‘rganish jarayoni nafaqat samarali, balki qulay ham bo‘ladi.
          Avvalo, poydevorni mustahkamlash muhim: dasturlash asoslari, mantiqiy fikrlash qobiliyatini rivojlantirish 
          va sinovdan o‘tish madaniyatini shakllantirish. Shu asosda keyingi barcha bilimlar mustahkam o‘rnashadi.
          Nazariy tushunchalarni osonroq qabul qilish uchun vizuallar yordamida massiv, navbat, stek va bog‘langan 
          ro‘yxatlar kabi ma’lumot tuzilmalarini jonli ko‘rinishda namoyish etamiz. Har bir mavzuni bosqichma-bosqich 
          o‘rganib, dastlab 2–3 ta sodda masalani, so‘ngra o‘rta darajadagi topshiriqlarni bajarish orqali mavzuni 
          chuqurlashtirib boramiz. Yordam sifatida izohli yechimlar, foydali maslahatlar va o‘quvchilar orasida eng ko‘p 
          uchraydigan xatolarni tahlil qilib beramiz. Shu tarzda, o‘quvchi nafaqat bilimni oladi, balki uni to‘g‘ri 
          qo‘llashni ham o‘rganadi.`,
        ],
      },
      {
        id: "advanced",
        title: "Tajribali o'quvchilar uchun",
        points: [
          `Murakkab bosqichlarda graf algoritmlari, dinamik dasturlash usullari hamda greedy yondashuvlari va turli 
          'tryuk'larni o‘rganamiz. Bunday mavzular ko‘plab real masalalarning yechimida asosiy rol o‘ynaydi va chuqur 
          mantiqiy yondashuvni talab qiladi. Shu bilan birga, har bir algoritm va yechimni tahlil qilish jarayonida 
          vaqt va xotira murakkabligini hisoblash, turli trade-offlarni ko‘rib chiqish hamda optimallashtirish usullarini 
          o‘rganamiz. Nazariyani mustahkamlash uchun amaliy mashqlarga e’tibor qaratamiz: real hayotdan olingan muammolar, 
          musobaqa (contest) formatidagi masalalar to‘plamlari va performance profiling orqali dastur samaradorligini 
          baholash. Yakunda intervyu tayyorgarligi uchun tez-tez uchraydigan naqshlar, umumiy strategiyalar va samarali 
          yondashuvlarni ko‘rib chiqib, o‘quvchini nafaqat o‘qishga, balki amaliy sinovlarga ham puxta tayyorlaymiz.`,
        ],
      },
    ],
    []
  );

  const refs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let idx = activeIndex;
        for (const entry of entries) {
          const i = Number((entry.target as HTMLElement).dataset.index);
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            idx = i;
          }
        }
        if (idx !== activeIndex) setActiveIndex(idx);
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.5, 0.6, 0.75, 1],
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections.length, activeIndex]);

  return (
    <div className='w-full bg-primary text-white'>
      <div className='mx-auto max-w-5xl px-6'>
        {sections.map((s, i) => (
          <section
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className='flex items-center'>
            <div className='w-full py-10'>
              <h2
                className={[
                  "text-3xl md:text-5xl font-extrabold tracking-tight",
                  "transition-colors duration-700",
                  i === activeIndex ? "text-white" : "text-primary",
                ].join(" ")}>
                {s.title}
              </h2>
              <ul className='mt-6 space-y-4'>
                {s.points.map((p, j) => {
                  const on = i === activeIndex;
                  return (
                    <li
                      key={j}
                      className={[
                        "text-base md:text-lg leading-relaxed",
                        "transition-colors duration-700",
                        on ? "text-white" : "text-zinc-400",
                      ].join(" ")}>
                      {p}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

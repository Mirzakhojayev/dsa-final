import React from "react";

type Feature = {
  chip: string;
  title: string;
  paragraph: string;
};

const items: Feature[] = [
  {
    chip: "Vizual + Amaliy",
    title: "Vizual va amaliy o'rganish",
    paragraph: `Ma’lumot turlari va algoritmlar mavzularini bosqichma-bosqich, sodda tilda tushuntirib boramiz. Har bir tushuncha faqat 
      nazariy emas, balki vizuallar va jonli misollar orqali ko‘rsatiladi. Avvalo, array, stack, queue va linked list 
      kabi asosiy ma’lumot tuzilmalarini o‘rganamiz. Keyin tree va graph kabi murakkabroq tuzilmalar bilan tanishamiz, ularning 
      ishlash mantig‘ini amaliy ko‘rinishda tahlil qilamiz. Algoritmlar bo‘limida esa qidiruv va saralash usullari, ularning 
      afzalliklari hamda cheklovlari haqida gapirib o‘tamiz. Shu tarzda, har bir mavzu nafaqat tushunarli, 
      balki amaliy ko‘rinishda o‘rganiladi.`,
  },
  {
    chip: "Yo'l xaritasi",
    title: "Bosqichma-bosqich yo'l",
    paragraph: `Har bir mavzudan keyin qisqa mashqlar beriladi, bu orqali o‘quvchi o‘rganilgan bilimni darhol sinab ko‘rish imkoniga ega bo‘ladi. 
      Mashqlarning izohli yechimlari ham taqdim qilinadi, shunda o‘quvchi nafaqat to‘g‘ri javobni, balki unga qanday yo‘l bilan yetib 
      borishni ham tushunadi. Shu orqali o‘quvchi sekin-asta oddiy bilimlardan professional darajaga o‘tadi.`,
  },
  {
    chip: "Mashqlar + Baholash",
    title: "Test, muhokama va natija",
    paragraph: `Har kim o‘z fikrini erkin ayta oladi, o‘rganganlarini boshqalar bilan baham ko‘radi va kerak bo‘lsa yordam so‘raydi. Muhokama jarayonida 
    turli yondashuvlarni ko‘rib chiqish, xatolarni birgalikda tuzatish va yangi strategiyalarni topish o‘quv jarayonini yanada samarali qiladi. Bunday muhitda 
    o‘quvchi yolg‘iz emasligini his qiladi — uning atrofida bir xil maqsad sari intilayotgan odamlar bor, va ular bir-birini rag‘batlantirib boradi.`,
  },
];

export default function Features() {
  return (
    <section className='font-extralight w-full bg-primary text-white border-b border-primary'>
      <div className='mx-auto max-w-7xl px-6 py-20 space-y-20'>
        {items.map((f, i) => {
          const gif = (
            <div>
              <div className='w-full min-h-[360px] border border-white/15 rounded-xl bg-white/5 backdrop-blur-[2px] flex items-center justify-center'>
                <div className='w-[60%] text-center text-zinc-400'>
                  GIF uchun placeholder
                </div>
              </div>
            </div>
          );
          const text = (
            <div>
              <div className='inline-flex bg-white/10 text-white/90 border border-white/15 rounded-full px-3 py-1 text-sm backdrop-blur-sm mb-4'>
                {f.chip}
              </div>
              <h3 className='text-4xl font-extrabold tracking-tight'>
                {f.title}
              </h3>
              <div className='mt-6 space-y-4 text-zinc-300'>
                <p>{f.paragraph}</p>
              </div>
              <div className='mt-8'>
                <button className='h-11 rounded-lg text-white hover:opacity-70 transition-opacity cursor-pointer'>
                  Batafsil →
                </button>
              </div>
            </div>
          );
          const left = i === 1 ? gif : text;
          const right = i === 1 ? text : gif;
          return (
            <div
              key={i}
              className='grid grid-cols-2 gap-12 items-center'>
              {left}
              {right}
            </div>
          );
        })}
      </div>
    </section>
  );
}

import Link from "next/link";

const ProblemNotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center text-white px-6'>
      <h1 className='text-6xl font-extrabold text-gray-100'>404</h1>
      <p className='mt-4 text-lg text-[#888888]'>Bunday masala topilmadi.</p>
      <Link
        href='/problemset'
        className='mt-6 px-4 py-2 rounded-lg bg-gray-100 text-black hover:opacity-70'>
        Masalalar ro&apos;yxatiga qaytish
      </Link>
    </div>
  );
};

export default ProblemNotFound;

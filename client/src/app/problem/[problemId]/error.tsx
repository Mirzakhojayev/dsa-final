"use client";

import {startTransition} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

type Props = {
  error: Error & {digest?: string};
  reset: () => void;
};

const ProblemError = ({error, reset}: Props) => {
  const router = useRouter();

  // The page fetches on the server, so re-run it before resetting the boundary.
  const retry = () =>
    startTransition(() => {
      router.refresh();
      reset();
    });

  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center text-white px-6'>
      <h1 className='text-3xl font-bold text-gray-100'>
        Masalani yuklashda xatolik yuz berdi
      </h1>
      <p className='mt-3 text-[#888888]'>{error.message}</p>
      <div className='flex gap-3 mt-6'>
        <button
          onClick={retry}
          className='px-4 py-2 rounded-lg bg-gray-100 text-black cursor-pointer hover:opacity-70'>
          Qayta urinish
        </button>
        <Link
          href='/problemset'
          className='px-4 py-2 rounded-lg border border-[#888888] hover:opacity-70'>
          Masalalar ro&apos;yxati
        </Link>
      </div>
    </div>
  );
};

export default ProblemError;

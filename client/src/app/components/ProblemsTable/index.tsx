"use client";

import {problems} from "./mockProblems";
import {Youtube} from "lucide-react";
import Link from "next/link";
import YouTube from "react-youtube";
import {useState} from "react";
import {CheckCircle, X} from "lucide-react";

const ProblemsTable = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const closeModal = () => {
    setYoutubePlayer({
      isOpen: false,
      videoId: "",
    });
  };
  return (
    <>
      <tbody className='text-white'>
        {problems.map((doc, idx) => {
          const difficultyColor =
            doc.difficulty === "Easy"
              ? "text-green-600"
              : doc.difficulty === "Medium"
              ? "text-yellow-600"
              : "text-red-600";
          return (
            <tr
              key={doc.id}
              className={`${idx % 2 == 1 ? "bg-[#181818]" : ""}`}>
              <th className='px-6 py-3'>
                <CheckCircle size={20} />
              </th>
              <td className='px-6 py-4'>
                <Link
                  className='hover:opacity-50'
                  href={`/problems/${doc.id}`}>
                  {doc.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColor}`}>
                {doc.difficulty}
              </td>
              <td className='px-6 py-4'>{doc.category}</td>
              <td className='px-6 py-4'>
                {doc.videoId ? (
                  <Youtube
                    className='cursor-pointer hover:text-red-600'
                    size={30}
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: doc.videoId ?? "",
                      })
                    }
                  />
                ) : (
                  <p>Coming Soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <tfoot className='fixed top-0 left-0 flex items-center justify-center h-screen w-screen'>
          <div
            className='bg-black z-10 opacity-70 top-0 left-0 h-screen w-screen absolute'
            onClick={closeModal}></div>
          <div className='w-full z-50 px-6 relative h-full'>
            <div className='h-full w-full flex items-center justify-center relative'>
              <div className='w-full relative'>
                <X
                  fontSize={"35"}
                  className='cursor-pointer absolute -top-16 right-0'
                  onClick={closeModal}
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading='lazy'
                  iframeClassName='w-full min-h-[500px]'
                />
              </div>
            </div>
          </div>
        </tfoot>
      )}
    </>
  );
};

export default ProblemsTable;

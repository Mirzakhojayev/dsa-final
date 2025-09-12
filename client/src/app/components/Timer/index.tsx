"use client";

import {Pause, Play, RefreshCcw, TimerIcon, UploadCloud, X} from "lucide-react";
import {useEffect, useState} from "react";

type Props = {};

const Timer = (props: Props) => {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showTimer && isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [showTimer, isRunning]);

  return (
    <div className='flex gap-[1px] items-center justify-center h-8 text-[#888888]'>
      {showTimer ? (
        <div className='flex items-center h-8 cursor-pointer bg-[#2f2f2f] rounded-l px-1'>
          {isRunning ? (
            <>
              <Pause
                className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
                onClick={() => setIsRunning(false)}
              />
              <RefreshCcw
                className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
                onClick={() => setTime(0)}
              />
              <X
                className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
                onClick={() => {
                  setShowTimer(false);
                  setIsRunning(false);
                  setTime(0);
                }}
              />
            </>
          ) : (
            <>
              <Play
                className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
                onClick={() => setIsRunning(true)}
              />
              <RefreshCcw
                className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
                onClick={() => setTime(0)}
              />
              <X
                className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
                onClick={() => {
                  setShowTimer(false);
                  setIsRunning(false);
                  setTime(0);
                }}
              />
            </>
          )}

          {formatTime(time)}
        </div>
      ) : (
        <div className='flex items-center cursor-pointer'>
          <TimerIcon
            className='h-8 w-8 p-1.5 hover:bg-[#888888]/[0.6] bg-[#2f2f2f] rounded-l'
            onClick={() => {
              setShowTimer(true);
              setIsRunning(true);
            }}
          />
        </div>
      )}
      <div>
        <Play className='h-8 w-8 p-1.5 fill-current cursor-pointer text-[#ACACAC] hover:bg-[#888888]/[0.6] bg-[#2f2f2f] ' />
      </div>
      <div className='flex items-center h-8 px-2 justify-center cursor-pointer rounded-r bg-[#2f2f2f] text-green-500 hover:bg-[#888888]/[0.6]'>
        <UploadCloud className='h-6 w-6 pr-1' />
        <p>Submit</p>
      </div>
    </div>
  );
};

export default Timer;

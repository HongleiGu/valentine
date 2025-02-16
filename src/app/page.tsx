"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {

  
  const data = [
    {
      red: "可以",
      blue: "不要",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "?你认真的吗...",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "要不再想想?",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不许选这个!",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "我会很伤心...",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    },
    {
      red: "可以",
      blue: "不行:(",
      p: "可以成为我的恋人吗?",
      img: "/1"
    }
  ]

  const [scale, setScale] = useState(1);
  const maxScale = data.length;
  const pushMultiplierX = 30;
  const pushMultiplierY = 30;


  const handleRedClick = () => {
    if (scale < maxScale) {
      setScale(scale + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="flex flex-col justify-center align-middle"
        style={{
          transform: `translateY(${-(scale) * (pushMultiplierY)}px)`,
          transition: 'transform 0.3s, margin-right 0.3s'
        }}
      >
        <Image
          alt="这里应有图片"
          src="/something"
          width={200}
          height={200}
          className={"border-2 border-black"}
        />
        <p
          className='w-full text-center mt-10 font-extrabold'
        >{data[scale-1].p}</p>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <button
          onClick={handleRedClick}
          style={{ 
            transform: `scale(${scale})`,
            marginRight: `${(scale) * pushMultiplierX}px`,
            transition: 'transform 0.3s, margin-right 0.3s'
          }}
          className="bg-red-500 text-white py-2 px-4 rounded flex-grow origin-center"
        >
          {data[scale-1].red}
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded flex-grow transition-transform duration-300"
          style={{
            transform: `translateX(${(scale) * (pushMultiplierX)}px)`,
            transition: 'transform 0.3s, margin-right 0.3s'
          }}
        >
          {data[scale-1].blue}
        </button>
      </div>
    </div>
  );
}
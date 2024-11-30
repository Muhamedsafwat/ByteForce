import React from 'react';

interface CircleProps {
  prefix: string;
  number: number;
}

const Circle: React.FC<CircleProps> = ({ prefix, number }) => {
  return (
    <div className="relative flex h-36 w-36 cursor-pointer items-center justify-center rounded-full border-4 border-cyan-500 text-2xl text-white duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(0,188,212,0.2)] lg:h-40 lg:w-40">
      <p className="absolute left-1/2 top-1/2 z-10 translate-x-[-50%] translate-y-[-50%] text-[90px] font-black text-gray-400 opacity-5">
        0{number}
      </p>
      <h1 className="text-xl lg:text-2xl">{prefix}</h1>
    </div>
  );
};

export default Circle;

import Image from 'next/image';
import React from 'react';

interface SocialmediaProps {
  img: JSX.Element;
}

const Socialmedia: React.FC<SocialmediaProps> = ({ img }) => {
  return (
    <div className="gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-black">
      {img}
    </div>
  );
};

export default Socialmedia;

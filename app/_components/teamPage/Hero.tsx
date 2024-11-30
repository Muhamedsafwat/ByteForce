import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface HeroProps {
imgSrc?: string | StaticImageData;
}

const Hero: React.FC<HeroProps> = ({ imgSrc }) => {
  return (
<div className="relative h-[60vh] w-full">
<Image
  src={imgSrc || ''}
  className="inset-0 object-cover"
  alt="image"
  fill
/>
</div>
  );
};

export default Hero;
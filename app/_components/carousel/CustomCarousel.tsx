'use client';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from './Carousel';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

interface CustomCarousalProps {
  items: React.ReactNode[];
  lang: 'ar' | 'en';
  className?: string;
  delay?: number;
  showDots: boolean;
}
const CustomCarousel = ({
  lang,
  items,
  className,
  delay = 4000,
  showDots,
}: CustomCarousalProps) => {
  return (
    <Carousel
      rtl={lang == 'ar' ? true : false}
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay,
        }),
      ]}
    >
      <CarouselContent className="items-center gap-5 p-5 lg:gap-10 lg:p-10">
        {items.map((item, index) => (
          <CarouselItem key={index} className={className}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showDots ? <CarouselDots className="mt-6" /> : <></>}
    </Carousel>
  );
};

export default CustomCarousel;

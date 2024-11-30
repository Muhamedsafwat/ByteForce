import React from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import CardProps from '@/app/_types/CardProps';
//import { getLocale } from '@/app/_utils';

import { H3, P } from '../typography';

const FeedbackCard = async ({
  title,
  subtitle,
  imgSrc,
  description,
}: CardProps) => {
  return (
    <div className="gradient h-fit cursor-pointer rounded-lg bg-gradient-to-t p-5 text-center duration-150 lg:p-10 lg:text-left lg:hover:scale-[1.02]">
      <div className="flex w-full flex-col items-center gap-3 lg:flex-row">
        <div className="relative aspect-square w-16 overflow-hidden rounded-full">
          <Image
            src={imgSrc}
            alt="seven production"
            fill
            className="grayscale-100 object-cover"
          />
        </div>
        <div>
          <H3 className="text-white">{title}</H3>
          <P className="text-black">{subtitle}</P>
        </div>
      </div>
      <P className="text mt-5 flex-1 text-black">{description}</P>
    </div>
  );
};

export default FeedbackCard;

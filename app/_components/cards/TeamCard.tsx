import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardProps from '@/app/_types/CardProps';
import { getLocale } from '@/app/_utils';

import { H3, P } from '../typography';
import FadeEffect from '../FadeEffect.jsx';

const TeamCard = async ({
  title,
  subtitle,
  imgSrc,
  description,
  lang,
}: CardProps) => {
  const locale = await getLocale(lang);

  return (
    <FadeEffect fromY={20}>
      <div className="gradient flex flex-1 cursor-pointer flex-col items-center rounded-lg bg-gradient-to-t p-5 duration-150 hover:scale-[1.02] lg:p-10">
        <div className="flex w-full items-center gap-3">
          <div className="relative aspect-square w-24 overflow-hidden rounded-full">
            <Image
              src={imgSrc}
              alt="seven production"
              fill
              className="grayscale-100 object-cover"
            />
          </div>
          <div>
            <H3 className="text-[28px] text-white">{title}</H3>
            <P className="text-black">{subtitle}</P>
          </div>
        </div>
        <P className="my-5 flex-1 text-center text-black">{description}</P>
        <button className="gradient group mx-auto overflow-hidden rounded-lg bg-gradient-to-b">
          <div className="bg-white bg-opacity-30 px-3 py-1 duration-150 group-hover:bg-opacity-60">
            <Link
              href={`/teams/${title.toLowerCase()}`}
              className="text-sm font-medium"
            >
              {locale.learnMore}
            </Link>
          </div>
        </button>
      </div>
    </FadeEffect>
  );
};

export default TeamCard;

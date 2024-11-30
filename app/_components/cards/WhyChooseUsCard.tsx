import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

import { H3, P } from '../typography';

interface CardProps {
  icon: ReactNode;
  title: {
    ar: string;
    en: string;
  };
  subtitle: string;
  number: number;
  line: StaticImageData;
  lang: 'ar' | 'en';
}

const WhyChooseUsCard = async ({
  icon,
  title,
  subtitle,
  number,
  line,
  lang,
}: CardProps) => {
  return (
    <div className="gradient relative z-0 h-fit w-full cursor-pointer rounded-lg bg-gradient-to-t pb-5 duration-150 hover:scale-[1.02] lg:w-1/4 lg:pb-10 lg:last:pb-0 lg:last:pr-10 lg:even:mt-10">
      <p className="absolute left-[-2rem] top-[-4rem] z-10 text-[160px] font-black opacity-10">
        0{number}
      </p>
      <div className="relative z-20 flex flex-col">
        <div className="p-5 lg:p-10">
          {icon}
          <H3 className="text-2xl text-black">{title[lang]}</H3>
          <P className="text-gray-800">{subtitle}</P>
        </div>
        <div className="relative hidden min-h-48 w-full flex-1 lg:block">
          <Image
            alt="line vector"
            src={line}
            fill
            className={lang == 'ar' ? 'scale-x-[-1] transform' : ''}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;

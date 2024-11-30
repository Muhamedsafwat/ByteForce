// components/HeaderSection.tsx
import React from 'react';

interface TitleProps {
  prefix: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  lang: 'ar' | 'en';
}

const Title = async ({ prefix, title, lang }: TitleProps) => {
  return (
    <div className="font-manrope text-gradient flex w-full justify-center text-left text-3xl font-bold leading-tight tracking-tight md:justify-start lg:text-4xl">
      <h1>
        {prefix[lang]} {title[lang]}
      </h1>
    </div>
  );
};

export default Title;

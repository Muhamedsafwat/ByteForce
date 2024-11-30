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

const Title = async ({
  prefix,
  title,
  lang,
}: TitleProps) => {

  return (
    <div className="font-manrope text-4xl font-bold leading-tight tracking-tight text-left text-gradient flex justify-center w-full md:justify-start ">
      <h1>{prefix[lang]} {title[lang]}</h1>
    </div>
  );
};

export default Title;


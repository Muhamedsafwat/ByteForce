import React from 'react';
import Title from './TitleGradients';

interface ParagraphContainerProps {
  lang: 'ar' | 'en';
  prefix: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  description: string;
  secondDescription: string;
}

const ParagraphContainer: React.FC<ParagraphContainerProps> = ({
  lang,
  prefix,
  title,
  description,
  secondDescription,
}) => {
  return (
    <div
      className={`flex w-full flex-1 flex-col space-y-4 pb-10 text-center md:w-1/2 ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}
    >
      <Title lang={lang} prefix={prefix} title={title} />
      <div className="g:text-xl w-full text-lg text-white">
        <p>{description}</p>
        <p>{secondDescription}</p>
      </div>
    </div>
  );
};

export default ParagraphContainer;

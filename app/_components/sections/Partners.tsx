import React from 'react';
//utils
import { getLocale } from '@/app/_utils';
//components
import { H2 } from '../typography';
import InfiniteScroll from '../carousel/InfiniteScroll';
import FadeEffect from '../FadeEffect.jsx';
//import logos
import logo1 from '@/public/images/partners/shefaelogo.webp';
import logo2 from '@/public/images/partners/esclogo.webp';
import logo3 from '@/public/images/partners/goldencar.webp';
import logo4 from '@/public/images/partners/wara2a.png';
import logo5 from '@/public/images/partners/elhoda.png';
import logo6 from '@/public/images/partners/elrema7.png';
import logo7 from '@/public/images/partners/sarto.png';
import logo8 from '@/public/images/partners/elhoda2.png';
import logo9 from '@/public/images/partners/platinum.png';
import logo10 from '@/public/images/partners/elhoda3.png';

const Partners = async ({ lang }: { lang: 'ar' | 'en' }) => {
  //locale
  const locale = await getLocale(lang);
  const { partnersSection } = locale.homePage;
  return (
    <section
      dir={lang == 'ar' ? 'rtl' : 'ltr'}
      className="container mb-10 lg:mb-20"
    >
      <FadeEffect>
        <H2 className="text-gradient w-full text-center text-3xl uppercase lg:text-4xl">
          {partnersSection.title}
        </H2>
      </FadeEffect>
      <FadeEffect>
        <div className="gradient mt-5 h-1 w-full opacity-60 lg:mt-10" />
        <InfiniteScroll logos={partnersLogos} />
        <div className="gradient mt-5 h-1 w-full opacity-60 lg:mt-10" />
      </FadeEffect>
    </section>
  );
};

export default Partners;

const partnersLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

import React from 'react';
import { getLocale } from '@/app/_utils';
import { H2, P } from '../typography';
import WhyChooseUsCard from '../cards/WhyChooseUsCard';
import FadeEffect from '../FadeEffect.jsx';
//import icons
import { Megaphone, MonitorPlay, CodeXml } from 'lucide-react';
//import lines
import line0 from '@/public/vectors/line-01.svg';
import line1 from '@/public/vectors/line-02.svg';
import line2 from '@/public/vectors/line-03.svg';

const WhyChooseUs = async ({ lang }: { lang: 'ar' | 'en' }) => {
  const locale = await getLocale(lang);
  const { whyChooseUsSection } = locale.homePage;

  return (
    <section
      dir={lang == 'ar' ? 'rtl' : 'ltr'}
      className="container mb-20"
      id="services"
    >
      <FadeEffect>
        <H2 className="text-gradient w-full text-center text-2xl uppercase lg:text-4xl">
          {whyChooseUsSection.title}
        </H2>
        <P className="mx-auto mt-2 max-w-2xl text-center text-base lg:mt-5 lg:text-lg">
          {whyChooseUsSection.subTitle}
        </P>
      </FadeEffect>
      <FadeEffect>
        <div className="my-5 flex flex-col justify-center gap-10 lg:my-10 lg:flex-row lg:gap-20">
          {cardsData.map((item, index) => (
            <WhyChooseUsCard
              key={index}
              {...item}
              number={index + 1}
              lang={lang}
            />
          ))}
        </div>
      </FadeEffect>
    </section>
  );
};

export default WhyChooseUs;

const cardsData = [
  {
    icon: <Megaphone />,
    title: {
      ar: 'التسويق الرقمي',
      en: 'Digital Marketing',
    },
    subtitle: 'Mesaha',
    line: line0,
  },
  {
    icon: <MonitorPlay />,
    title: {
      ar: 'الميديا',
      en: 'Media Production',
    },
    subtitle: 'Seven',
    line: line1,
  },
  {
    icon: <CodeXml />,
    title: { en: 'Web Development', ar: 'تطوير المواقع' },
    subtitle: 'CodeX',
    line: line2,
  },
];

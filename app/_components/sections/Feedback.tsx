import React from 'react';
import { getLocale } from '@/app/_utils';
import { H2, P } from '../typography';
import FeedbackCard from '../cards/FeedbackCard';
import CustomCarousel from '../carousel/CustomCarousel';
//import logos
import sevenLogo from '@/public/images/seven/logo.png';
import codeXLogo from '@/public/images/codex/logo.jpeg';

import FadeEffect from '../FadeEffect.jsx';

const Feedback = async ({ lang }: { lang: 'ar' | 'en' }) => {
  const locale = await getLocale(lang);
  const { feedbackSection } = locale.homePage;
  return (
    <section
      dir={lang == 'ar' ? 'rtl' : 'ltr'}
      className="container mb-10 lg:mb-20"
      id="feedback"
    >
      <FadeEffect>
        <H2 className="text-gradient w-full text-center text-2xl uppercase lg:text-4xl">
          {feedbackSection.title}
        </H2>
        <P className="mt-2 text-center text-base lg:mt-5 lg:text-lg">
          {feedbackSection.subTitle}
        </P>
      </FadeEffect>
      <FadeEffect>
        <CustomCarousel
          showDots
          lang={lang}
          items={feedbacks.map((item, index) => (
            <FeedbackCard key={index} {...item} lang={lang} />
          ))}
          className="flex"
        />
      </FadeEffect>
    </section>
  );
};

export default Feedback;

const feedbacks = [
  {
    imgSrc: sevenLogo,
    title: 'Eng/Amr Elmor',
    subtitle: 'Founder & CEO of Trustplus',
    description:
      "Byteforce's strategic insights and tailored solutions accelerated our progress and improved efficiency. Their professionalism and dedication to our success have been outstanding.",
  },
  {
    imgSrc: codeXLogo,
    title: 'Eng/Mohamed Safwat',
    subtitle: 'Frontend dev at CodeX',
    description:
      'Byteforce revolutionized our operations with their innovative solutions and expert guidance. They boosted our efficiency and reduced costs significantly. Highly recommended for enhancing business processes.',
  },
  {
    imgSrc: sevenLogo,
    title: 'Eng/Youssef Medhat',
    subtitle: 'Fullstack dev at CodeX',
    description:
      'Partnering with Byteforce has greatly impacted our growth. Their expertise and commitment delivered excellent results. We’re excited to continue working with them.',
  },
  {
    imgSrc: codeXLogo,
    title: 'Eng/Mohamed Safwat',
    subtitle: 'Frontend dev at CodeX',
    description:
      'Byteforce revolutionized our operations with their innovative solutions and expert guidance. They boosted our efficiency and reduced costs significantly. Highly recommended for enhancing business processes.',
  },
  {
    imgSrc: sevenLogo,
    title: 'Eng/Youssef Medhat',
    subtitle: 'Fullstack dev at CodeX',
    description:
      'Partnering with Byteforce has greatly impacted our growth. Their expertise and commitment delivered excellent results. We’re excited to continue working with them.',
  },
];

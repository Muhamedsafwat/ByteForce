import React from 'react';
import { H1, P, Title } from '../typography';
import { getLocale } from '@/app/_utils';
import FadeEffect from '../FadeEffect.jsx';

type Stat = {
  num: number;
  text: 'orders' | 'workers' | 'clients' | 'projects';
  isPercentage?: boolean;
};

const StatsSection = async ({ lang }: { lang: 'ar' | 'en' }) => {
  const locale = await getLocale(lang);
  const { statsSection } = locale.homePage;

  const stats: Stat[] = [
    { num: 95, text: 'orders', isPercentage: true },
    { num: 50, text: 'workers' },
    { num: 60, text: 'clients' },
    { num: 20, text: 'projects' },
  ];

  return (
    <section className="container">
      <FadeEffect>
        <Title className="text-gradient mx-auto">{statsSection.title}</Title>
      </FadeEffect>
      <FadeEffect>
        <div className="flex flex-col justify-between pt-4 md:flex-row md:pt-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex w-full justify-around py-5 md:py-16"
            >
              {index > 0 && (
                <div className="gradient hidden h-full w-1 rounded-sm md:block"></div>
              )}
              <div className="text-center">
                <H1 className="!text-4xl">{`${stat.num}${stat.isPercentage ? ' %' : ' +'}`}</H1>
                <P className="mt-2">{statsSection[stat.text]}</P>
              </div>
            </div>
          ))}
        </div>
      </FadeEffect>
    </section>
  );
};

export default StatsSection;

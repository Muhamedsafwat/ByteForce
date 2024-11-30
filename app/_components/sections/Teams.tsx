import React from 'react';
import { getLocale } from '@/app/_utils';
import { H2 } from '../typography';
import TeamCard from '../cards/TeamCard';

import { teams } from '@/app/teamsData/teams';

import FadeEffect from '../FadeEffect.jsx';

const Teams = async ({ lang }: { lang: 'ar' | 'en' }) => {
  const locale = await getLocale(lang);
  const { teamsSection } = locale.homePage;
  return (
    <section
      dir={lang == 'ar' ? 'rtl' : 'ltr'}
      className="container mb-20"
      id="teams"
    >
      <FadeEffect>
        <H2 className="text-gradient w-full text-center text-3xl uppercase lg:text-start lg:text-4xl">
          {teamsSection.title}
        </H2>
      </FadeEffect>
      <div className="my-5 flex flex-col justify-between gap-10 lg:my-10 lg:flex-row lg:gap-20">
        {teams.map((item, index) => (
          <TeamCard
            key={index}
            {...item}
            title={item.title[lang]}
            subtitle={item.subtitle[lang]}
            description={item.description[lang]}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
};

export default Teams;

import React from 'react';
import Image from 'next/image';
import { teams } from '@/app/teamsData/teams';
import { PageProps } from '@/app/_types';
import Title from '@/app/_components/teamPage/TitleGradients';
import Circle from '@/app/_components/teamPage/Circle';
import InfiniteSlider from '@/app/_components/carousel/InfiniteScroll';
import Hero from '@/app/_components/teamPage/Hero';
import ParagraphContainer from '@/app/_components/teamPage/ParagraphContainer';

export default async function TeamPage({ params: { lang, id } }: PageProps) {
  const team = teams.find(
    (team) => team.title.en.toLowerCase() == id.toLocaleLowerCase(),
  );

  return (
    <div dir={lang == 'ar' ? 'rtl' : 'ltr'}>
      <Hero imgSrc={team?.cover || team?.imgSrc} />
      <div className="container flex w-full flex-col items-center md:items-start">
        <div className="mt-9 flex w-full items-center justify-between gap-20">
          <ParagraphContainer
            lang={lang}
            prefix={{ ar: 'عن', en: 'About' }}
            title={{ ar: team?.title.ar || '', en: team?.title.en || '' }}
            description={team?.description[lang] || ''}
            secondDescription=""
          />

          <div className="relative hidden aspect-square w-[35%] md:block">
            <Image src={team?.aboutImgSrc || ''} fill alt="image" />
          </div>
        </div>
        {!!team?.approach?.length ? (
          <div className="flex flex-col space-y-10 pb-10 md:w-full lg:mb-10">
            <Title
              lang={lang}
              prefix={{ ar: 'نهجنا', en: 'Our approach' }}
              title={{ ar: '', en: '' }}
            />
            <div className="flex w-full flex-wrap items-center justify-center gap-12 md:w-full md:justify-between lg:flex-row lg:gap-5">
              {(team?.approach || []).map((item, index) => (
                <Circle key={index} number={index + 1} prefix={item} />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        {!!team?.technologies?.length ? (
          <div className="w-full overflow-x-hidden lg:mb-10">
            <Title
              lang={lang}
              prefix={{ ar: 'الأدوات والتقنيات', en: 'Tools &  Technologies' }}
              title={{ ar: '', en: '' }}
            />
            <InfiniteSlider logos={team.technologies} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

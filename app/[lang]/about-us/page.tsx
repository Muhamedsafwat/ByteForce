import { PageProps } from '../../_types';
import { Title } from '@/app/_components/typography';
import { getLocale } from '@/app/_utils';
import TitleGradients from '@/app/_components/teamPage/TitleGradients';
import Elmur from './Screenshot 2024-09-15 at 8.35.45 PM 1.png';
import cover from '@/public/images/cover.jpg';
import story from './story 1.png';
//import Image from 'next/image';

import Accordion from '@/app/_components/accordion/Accordion';
import Image from 'next/image';
import Hero from '@/app/_components/teamPage/Hero';
import ParagraphContainer from '@/app/_components/teamPage/ParagraphContainer';

export default async function HomePage({ params: { lang } }: PageProps) {
  const { aboutUsPage } = await getLocale(lang);

  return (
    <div dir={lang == 'ar' ? 'rtl' : 'ltr'} className="">
      <Hero imgSrc={cover} />
      <main className="container flex flex-col py-10">
        <div className="relative flex w-full items-center justify-between gap-10">
          <ParagraphContainer
            lang={lang}
            prefix={{ ar: 'رؤيتنا', en: 'Our vision' }}
            title={{ ar: '', en: '' }}
            description={sections.section_1.firstDescription[lang]}
            secondDescription={sections.section_1.secondDescription[lang]}
          />
          <div className="relative hidden h-80 w-2/6 md:block">
            <Image
              src={Elmur}
              height={320}
              width={320}
              alt="image"
              className="absolute z-10"
            />
            <div
              className="absolute z-0 m-7 box-border"
              style={{
                backgroundColor: ' #2192FF33',
                width: '320px',
                height: '320px',
              }}
            ></div>
          </div>
        </div>

        <div className="flex w-full flex-row-reverse items-center justify-between lg:mt-9">
          <ParagraphContainer
            lang={lang}
            prefix={{ ar: 'قصتنا', en: ' Our story' }}
            title={{ ar: '', en: '' }}
            description={sections.section_2.firstDescription[lang]}
            secondDescription={''}
          />
          <div className="hidden w-2/5 md:block">
            <Image src={story} height={400} width={400} alt="image" />
          </div>
        </div>
        <section className="py-10 lg:py-24">
          <Title className="text-center text-2xl lg:text-4xl">
            {aboutUsPage.whyChoose}{' '}
            <span className="text-gradient">ByteForce</span>
          </Title>
          <Accordion lang={lang} />
        </section>
        <div className="flex flex-col items-center justify-center space-y-4 py-10">
          <div className="flex items-center justify-center">
            <TitleGradients
              lang={lang}
              prefix={{ ar: 'دعونا نبدأ', en: 'Let’s get the ball rolling...' }}
              title={{ ar: '', en: '' }}
            />
          </div>
          <p className="font-manrope flex justify-center pb-4 text-center text-lg leading-tight tracking-tight text-gray-200 lg:w-3/4 lg:text-2xl lg:font-bold">
            {sections.section_3.firstDescription[lang]}
          </p>
          <button className="btn-solid flex w-5/6 justify-center md:w-fit">
            {aboutUsPage.contactUs}
          </button>
        </div>
      </main>
    </div>
  );
}

const sections = {
  section_1: {
    firstDescription: {
      en: '" At ByteForce, we believe in empowering businesses Comments with innovative solutions that drive growth, efficiency, and lasting success."',
      ar: '" في ByteForce، نؤمن بقدرتنا على تمكين الشركات من خلال تقديم حلول مبتكرة تعزز من قدراتها وتحقق نجاحًا مستدامًا."',
    },
    secondDescription: {
      en: ' Ibrahim Elmur, Founder and CEO',
      ar: 'إبراهيم المر، المؤسس والرئيس التنفيذي',
    },
  },

  section_2: {
    firstDescription: {
      en: 'At ByteForce, we started with a vision to deliver innovative solutions that exceed business expectations. Growing from a small team into industry leaders, we’ve built strong partnerships embraced new technologies, and helped our clients succeed through dedication and excellence.',
      ar: 'في ByteForce، بدأنا برؤية لتقديم حلول مبتكرة تتجاوز توقعات الأعمال. نمونا من فريق صغير يقدم خدمات إلى رواد في الصناعة، حيث قمنا ببناء شراكات قوية، واحتضان تقنيات جديدة، ومساعدة عملائنا على النجاح من خلال التفاني والتميز.',
    },
  },
  section_3: {
    firstDescription: {
      en: 'We’re ready to work with you. Drop us an email or schedule a call with our represntative, and we’ll get right back to you.',
      ar: 'نحن مستعدون للعمل معك. أرسل لنا بريدًا إلكترونيًا أو قم بجدولة مكالمة مع ممثل خدمتنا, وسنعود إليك على الفور.',
    },
  },
};

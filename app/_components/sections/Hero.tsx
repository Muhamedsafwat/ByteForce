import Image from 'next/image';
import { P, Title } from '../typography';
import { getLocale } from '@/app/_utils';
import Link from 'next/link';
import FadeEffect from '../FadeEffect.jsx';

import underLine from '@/public/vectors/underline.svg';

const Hero = async ({ lang }: { lang: 'ar' | 'en' }) => {
  const locale = await getLocale(lang);
  const { heroSection } = locale.homePage;

  return (
    <section
      dir={lang == 'ar' ? 'rtl' : 'ltr'}
      className="container flex min-h-screen flex-row items-center justify-start py-16 pt-32 md:justify-around"
    >
      <div>
        <FadeEffect fromY={-80} springEffect>
          <div className="flex w-full flex-col items-end lg:w-fit">
            <Title className="mb-2 w-full text-center text-gray-100 lg:text-start">
              {heroSection.title}
              <span className="text-gradient">Byte Force</span>
            </Title>
            <Image
              alt="underline"
              className="hidden lg:block"
              src={underLine}
              width={180}
              height={50}
            />
          </div>
        </FadeEffect>
        <FadeEffect fromY={0} springEffect>
          <P className="mt-6 max-w-[500px] text-center text-lg text-gray-400 lg:text-start">
            {heroSection.description}
          </P>
        </FadeEffect>
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:gap-4">
          <FadeEffect fromY={80} springEffect>
            <Link href={`/${lang}/contact`}>
              <button className="btn-solid w-full md:w-fit">
                {locale.contactUs}
              </button>
            </Link>
          </FadeEffect>
        </div>
      </div>
      <FadeEffect fromY={0} fromX={80} springEffect>
        <div className="hidden w-full justify-end md:flex">
          <Image src={'/images/hero.svg'} alt="hero" width={550} height={550} />
        </div>
      </FadeEffect>
    </section>
  );
};

export default Hero;

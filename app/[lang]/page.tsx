import { PageProps } from '../_types';
import {
  Hero,
  StatsSection,
  Teams,
  Partners,
  Feedback,
  WhyChooseUs,
} from '../_components';

export default async function HomePage({ params: { lang } }: PageProps) {
  return (
    <main>
      <Hero lang={lang} />
      <StatsSection lang={lang} />
      <Teams lang={lang} />
      <Partners lang={lang} />
      <WhyChooseUs lang={lang} />
      <Feedback lang={lang} />
    </main>
  );
}

import { StaticImageData } from 'next/image';

interface CardProps {
  imgSrc: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  lang: 'ar' | 'en';
}

export default CardProps;

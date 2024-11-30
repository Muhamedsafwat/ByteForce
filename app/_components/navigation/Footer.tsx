'use client';
import Image from 'next/image';
import Link from 'next/link';
import FooterCol from '../teamPage/FooterCol';
import logo from '@/public/images/logo.png';
import { FooterLink } from '../teamPage/FooterCol';
import { Instagram, Facebook, Linkedin, Phone } from 'lucide-react';
import Socialmedia from '../teamPage/Socialmedia';

const Footer = ({ lang }: { lang: 'ar' | 'en' }) => {
  const FIRST_Col_LINKS: FooterLink[] = [
    {
      label: { ar: 'شركاؤنا', en: 'Our Partners' },
      link: '/#partners',
    },
    {
      label: { ar: 'الخدمات', en: 'Services' },
      link: '#services',
    },
    {
      label: { ar: 'المراجعات', en: 'Reviews' },
      link: '#feedback',
    },
  ];
  const SECOND_Col_LINKS: FooterLink[] = [
    {
      label: { ar: 'اتصل بنا', en: 'Contact Us' },
      link: '/contact',
    },
    {
      label: { ar: 'معلومات عنا', en: 'About us' },
      link: '/about-us',
    },
  ];

  const socialmediaIcons = [
    {
      name: 'Facebook',
      icon: <Facebook className="text-black" />,
      link: '#',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="text-black" />,
      link: '#',
    },
    {
      name: 'Linkedin',
      icon: <Linkedin className="text-black" />,
      link: '#',
    },
    {
      name: 'Whatspp',
      icon: <Phone className="text-black" />,
      link: '#',
    },
  ];

  return (
    <>
      <div className="flex flex-col pb-10 pt-10">
        <div className="container flex h-2/6 flex-col md:flex-row md:justify-between">
          <div className="flex w-full flex-col items-start justify-center space-y-4 pb-3 md:w-fit">
            <div className="w-1/3 sm:w-1/2 md:w-2/3">
              <Image src={logo} width={210} height={40} alt="image" />
            </div>
            <div className="text-xl text-white">
              <p className="w-full">
                “We solve your business problems and drive growth.”
              </p>
              <p>
                {' '}
                Your partners in success,{' '}
                <span className="text-gradient">
                  we provide you with the best services
                </span>
              </p>
            </div>
            {/* Contact now button link */}
            <Link
              href="#"
              className="w-full cursor-pointer hover:opacity-80 md:w-fit"
              aria-current="page"
            >
              <button className="gradient w-full rounded-md bg-gradient-to-b p-2 text-sm duration-200 md:w-fit">
                {lang == 'ar' ? 'تواصل معنا' : 'Contact us'}
              </button>
            </Link>
          </div>

          <div className="md:bg-red text-customGray flex w-full list-none flex-col gap-2 text-xs text-white md:w-1/5 md:flex-row md:items-start md:whitespace-nowrap">
            <FooterCol
              lang={lang}
              colLinks={FIRST_Col_LINKS}
              header={lang == 'ar' ? 'مهمة' : 'Important'}
            />
            <FooterCol
              lang={lang}
              colLinks={SECOND_Col_LINKS}
              header={lang == 'ar' ? 'الصفحات' : 'Pages'}
            />
          </div>
        </div>

        <div className="text-customGray container flex w-full flex-col gap-4 px-12 pt-10 text-xs text-white md:flex-row md:justify-evenly md:whitespace-nowrap">
          <div>Copyright © 2024 - All rights reserved</div>
          <div className="flex gap-4 md:container md:items-center md:justify-center">
            {socialmediaIcons.map((socialIcon) => (
              <Socialmedia key={socialIcon.name} img={socialIcon.icon} />
            ))}
          </div>
          <div>Legal information</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = ({ lang }: { lang: 'ar' | 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NAV_LINKS = [
    {
      label: { ar: 'الرئيسية', en: 'Home' },
      href: `/${lang}/`,
    },
    {
      label: { ar: 'الفرق', en: 'Teams' },
      href: `/${lang}/#teams`,
    },
    {
      label: { ar: 'الخدمات', en: 'Services' },
      href: `/${lang}/#services`,
    },
    {
      label: { ar: 'عن الشركة', en: 'About' },
      href: `/${lang}/about-us`,
    },
  ];

  return (
    <nav className="fixed start-0 top-0 z-20 w-full bg-transparent py-6 backdrop-blur-sm">
      <div className="container flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo.png"
            width={192}
            height={40}
            className="h-8 w-36 md:h-10 md:w-48"
            alt="Byte force logo"
          />
        </Link>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link href={lang == 'ar' ? `/en` : `/ar`} className="mx-5 text-white">
            {lang == 'ar' ? 'English' : 'العربية'}
          </Link>
          <Link href="/contact">
            <button type="button" className="btn-solid hidden md:block">
              {lang == 'ar' ? 'تواصل معنا' : 'Contact us'}
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            {NAV_LINKS.map((link) => (
              <li key={link.label[lang]}>
                <Link
                  href={link.href}
                  className="hover:text-gradient block rounded px-3 py-2 text-gray-100 duration-200 md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {link.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

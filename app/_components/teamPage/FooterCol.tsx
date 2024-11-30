import Link from 'next/link';
import React from 'react';

export interface FooterLink {
  label: { ar: string; en: string };
  link: string;
}

interface FooterColProps {
  colLinks: FooterLink[];
  header: string;
  lang: 'ar' | 'en';
}

const FooterCol: React.FC<FooterColProps> = ({ colLinks, header, lang }) => {
  if (!colLinks) {
    return <div>No links available</div>;
  }

  return (
    <>
      <div className="relative flex w-full flex-col justify-between space-y-4 pb-2">
        <div>
          <h1 className="text-xl text-white">{header}</h1>
        </div>
        <button className="block text-2xl text-white md:hidden">
          {/* {isMenuOpen ? <EllipsisVertical /> : <Ellipsis />} */}
        </button>

        {colLinks.map((item) => (
          <li key={item.label.en}>
            <Link
              href={item.link}
              className="cursor-pointer hover:opacity-50"
              aria-current="page"
            >
              {item.label[lang]}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default FooterCol;

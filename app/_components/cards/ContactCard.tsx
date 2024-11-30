import React, { ReactNode } from 'react';
import { P } from '../typography';

export interface ContactCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  link: string;
  url: string;
  lang?: 'ar' | 'en';
}

const ContactCard = ({
  icon,
  title,
  text,
  link,
  url,
  lang,
}: ContactCardProps) => {
  return (
    <a className="flex-1 text-white" href={url}>
      <div
        dir={lang == 'ar' ? 'rtl' : 'ltr'}
        className="space-y-2 rounded-md bg-blue-950 p-5 text-white shadow-xl shadow-[rgba(150,150,255,0.08)] duration-200 hover:scale-[1.02] hover:shadow-[rgba(100,100,255,0.12)]"
      >
        <div className="flex items-center gap-2 text-blue-400">
          {icon} <P className="font-bold text-white">{title}</P>
        </div>
        <P>{text}</P>
        {link}
      </div>
    </a>
  );
};

export default ContactCard;

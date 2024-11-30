'use client';
import React, { useState } from 'react';
import { H2, P } from '../typography';

import {
  BadgeCheck,
  BriefcaseBusiness,
  ChevronDown,
  Crosshair,
  Focus,
  Zap,
} from 'lucide-react';

const Accordion = ({ lang }: { lang: 'ar' | 'en' }) => {
  const [activeTab, setactiveTab] = useState(0);

  const clickHandler = (index: number) => {
    if (activeTab == index + 1) {
      setactiveTab(0);
    } else {
      setactiveTab(index + 1);
    }
  };

  return (
    <div dir={lang == 'ar' ? 'rtl' : 'ltr'} className="mx-auto mt-10 max-w-5xl">
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div
            className="flex cursor-pointer items-center border-b-[1px] border-b-gray-500 py-3"
            onClick={() => clickHandler(index)}
          >
            <H2 className="flex items-center gap-2 text-lg lg:text-xl">
              {item.icon} {item.label[lang]}
            </H2>
            <ChevronDown
              className={`ms-auto text-white duration-300 ${activeTab == index + 1 ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
          <P
            className={`overflow-hidden text-sm duration-300 lg:text-lg ${activeTab == index + 1 ? 'my-2 h-16' : 'h-0'}`}
          >
            {item.text[lang]}
          </P>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

const accordionItems = [
  {
    icon: <Crosshair className="text-blue-500" />,
    label: { en: 'Tailored Solutions', ar: 'حلول مخصصة' },
    text: {
      en: 'We understand that every business is unique. Our team crafts customized strategies designed to address your specific challenges and goals, ensuring results that drive growth and efficiency.',
      ar: 'نحن ندرك أن كل عمل تجاري فريد من نوعه. يقوم فريقنا بتطوير استراتيجيات مخصصة مصممة خصيصًا لمعالجة التحديات والأهداف الخاصة بك، مما يضمن تحقيق نتائج تدفع بالنمو والكفاءة.',
    },
  },
  {
    icon: <BadgeCheck className="text-blue-500" />,
    label: { en: 'Proven Expertise', ar: 'خبرة مثبتة' },
    text: {
      en: 'With years of experience across multiple industries, we bring deep expertise and innovative thinking to deliver modern, scalable solutions that keep your business ahead of the curve.',
      ar: 'مع سنوات من الخبرة في مختلف الصناعات، نقدم خبرة عميقة وتفكيرًا مبتكرًا لتقديم حلول حديثة وقابلة للتوسع تحافظ على تقدم عملك في السوق.',
    },
  },
  {
    icon: <BriefcaseBusiness className="text-blue-500" />,
    label: { en: 'Comprehensive Services', ar: 'خدمات شاملة' },
    text: {
      en: 'From full-stack development to marketing, branding, and operational support, we offer a wide range of services, making us your one-stop solution for all business needs.',
      ar: ' من التطوير الكامل إلى التسويق، العلامات التجارية، والدعم التشغيلي، نقدم مجموعة واسعة من الخدمات، مما يجعلنا الحل المتكامل لكافة احتياجات أعمالك.',
    },
  },
  {
    icon: <Focus className="text-blue-500" />,
    label: { en: 'Customer-Centric Approach', ar: 'نهج موجه للعملاء' },
    text: {
      en: 'Your success is our priority. We focus on building strong partnerships, providing personalized support, and ensuring your satisfaction every step of the way.',
      ar: 'نجاحك هو أولويتنا. نركز على بناء شراكات قوية، وتقديم دعم مخصص، وضمان رضاك في كل خطوة من العملية.',
    },
  },
  {
    icon: <Zap className="text-blue-500" />,
    label: { en: 'Commitment to Excellence', ar: 'التزام بالتميز' },
    text: {
      en: 'We are dedicated to delivering high-quality work with attention to detail, innovative problem-solving, and a passion for achieving results that exceed expectations.',
      ar: 'نحن ملتزمون بتقديم عمل عالي الجودة مع الاهتمام بالتفاصيل، وحل المشكلات بطريقة مبتكرة، وشغف لتحقيق نتائج تتجاوز التوقعات.',
    },
  },
];

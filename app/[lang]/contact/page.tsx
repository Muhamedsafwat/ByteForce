import { PageProps } from '../../_types';
import { Title } from '@/app/_components/typography';
import { getLocale } from '@/app/_utils';
import Image from 'next/image';

import ContactCard from '@/app/_components/cards/ContactCard';
import { ContactCardProps } from '@/app/_components/cards/ContactCard';
import { Linkedin, Mail, Phone } from 'lucide-react';
import contactImg from '@/public/images/contact.svg';

import ContactForm from '@/app/_components/forms/ContactForm';

export default async function HomePage({ params: { lang } }: PageProps) {
  const { contactPage } = await getLocale(lang);

  return (
    <main className="container py-32">
      <Title className="text-gradient">{contactPage.reachOut}</Title>
      <div className="mt-10 flex justify-between gap-16">
        {contactCardsData.map((item, index) => (
          <ContactCard key={index} {...item} lang={lang} />
        ))}
      </div>
      <div className="flex justify-between gap-32">
        <ContactForm
          title={contactPage.message}
          buttonText={contactPage.submit}
        />
        <Image
          src={contactImg}
          alt="contact"
          width={200}
          height={200}
          className="flex-[2]"
        />
      </div>
    </main>
  );
}

const contactCardsData: ContactCardProps[] = [
  {
    title: 'LinkedIn',
    text: 'Follow us on linkedin',
    url: 'https://www.linkedin.com/company/byteforce0/posts/?feedView=all',
    link: '@ByteForce',
    icon: <Linkedin />,
  },
  {
    title: 'Email',
    text: 'Send us an Email',
    url: 'mailto:someone@example.com',
    link: 'ByteForce@gmail.com',
    icon: <Mail />,
  },
  {
    title: 'Whatsapp',
    text: 'Chat with our representative',
    url: 'https://api.whatsapp.com/send?phone=201028930205&text=Hi%2C%20I%20have%20some%20questions.%20Is%20anyone%20available%20to%20chat%20%3F',
    link: '+201028930205',
    icon: <Phone />,
  },
];

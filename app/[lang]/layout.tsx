import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { Header } from '../_components';
import Footer from '../_components/navigation/Footer';
import ScrollToTop from '../_components/navigation/ScrollToTop';

const Manrope = localFont({
  src: [
    {
      path: '../_fonts/Manrope-Regular.ttf',
      style: 'regular',
      weight: '400',
    },
    {
      path: '../_fonts/Manrope-Medium.ttf',
      style: 'medium',
      weight: '500',
    },
    {
      path: '../_fonts/Manrope-SemiBold.ttf',
      style: 'semibold',
      weight: '600',
    },
    {
      path: '../_fonts/Manrope-Bold.ttf',
      style: 'bold',
      weight: '700',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Byte Force',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: 'ar' | 'en' };
}>) {
  return (
    <html lang="en">
      <body
        className={`${Manrope.className} relative scroll-smooth bg-zinc-900 antialiased`}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 -z-10 min-h-screen opacity-15"
          style={{
            backgroundImage: `url('/images/texture.jpg')`,
            backgroundRepeat: 'repeat',
          }}
        />
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
        <ScrollToTop />
      </body>
    </html>
  );
}

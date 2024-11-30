// eslint-disable-next-line import/no-unresolved
import 'server-only';

const locales = {
  ar: () => import('@/app/_locales/ar.json').then((module) => module.default),
  en: () => import('@/app/_locales/en.json').then((module) => module.default),
};

export const getLocale = async (locale: 'ar' | 'en') => locales[locale]();

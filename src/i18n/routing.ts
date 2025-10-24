import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ['en', 'fa', 'tu'],
  defaultLocale: 'en',

  pathnames: {
    '/home': {
      en: '/home',
      fa: '/home',
      tu: '/home',
    },
    '/drink': {
      en: '/drink',
      fa: '/drink',
      tu: '/drink',
    },
    '/drink/[category]': {
      en: '/drink/[category]',
      fa: '/drink/[category]',
      tu: '/drink/[category]',
    },
    '/food': {
      en: '/food',
      fa: '/food',
      tu: '/food',
    },
    '/hookah': {
      en: '/hookah',
      fa: '/hookah',
      tu: '/hookah',
    },
    '/dessert': {
      en: '/dessert',
      fa: '/dessert',
      tu: '/dessert',
    },
  }
})
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
    '/food/[category]': {
      en: '/food/[category]',
      fa: '/food/[category]',
      tu: '/food/[category]',
    },
    '/hookah': {
      en: '/hookah',
      fa: '/hookah',
      tu: '/hookah',
    },
    '/hookah/[category]': {
      en: '/hookah/[category]',
      fa: '/hookah/[category]',
      tu: '/hookah/[category]',
    },
    '/dessert': {
      en: '/dessert',
      fa: '/dessert',
      tu: '/dessert',
    },
    '/dessert/[category]': {
      en: '/dessert/[category]',
      fa: '/dessert/[category]',
      tu: '/dessert/[category]',
    },
  }
})
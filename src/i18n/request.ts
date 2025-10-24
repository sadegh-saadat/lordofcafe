import { hasLocale } from "next-intl";
import {getRequestConfig} from 'next-intl/server';
import { routing } from "./routing";
 
export default getRequestConfig(async ({ requestLocale }) => {
  // Static for now, we'll change this later
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

    const messages = {
      ...(await import(`../../messages/${locale}/home.json`)).default,
      ...(await import(`../../messages/${locale}/drink.json`)).default,
      ...(await import(`../../messages/${locale}/food.json`)).default,
      ...(await import(`../../messages/${locale}/hookah.json`)).default,
      ...(await import(`../../messages/${locale}/dessert.json`)).default,
      ...(await import(`../../messages/${locale}/common.json`)).default
    };

  return {
    locale,
    messages
  };
});
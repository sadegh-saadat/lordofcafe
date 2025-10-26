import { DESSERT_GROUPS, DRINK_GROUPS, DrinkCategory, FOOD_GROUPS, HOOKAH_GROUPS } from "@/lib/groups";
import { getTranslations, setRequestLocale } from "next-intl/server";


type Params = { locale: string; category: string};

const ALL_GROUPS : Record<string, readonly string[]> = {
  ...DRINK_GROUPS,
  ...FOOD_GROUPS,
  ...HOOKAH_GROUPS,
  ...DESSERT_GROUPS
};

export async function useCategory({ locale, category }: Params) {
  setRequestLocale(locale);

  const groupKeys = ALL_GROUPS[category];
  if (!groupKeys) return null;

  const t = await getTranslations();

  return groupKeys.map((key) => {
    const items = t.raw(key) as { title: string; icon: string, price: number } [] | undefined;
    return { key, item: items ?? []};
  });
};
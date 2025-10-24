import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { DRINK_GROUPS, DrinkCategory } from "@/lib/drink-groups";
import Image from "next/image";

type Props = { params: Promise<{ locale: string; category: string }> };

export default async function DrinkCategoryPage({ params }: Props) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  if (!(category in DRINK_GROUPS)) {
    notFound();
  }

  const t = await getTranslations();
  const groups = DRINK_GROUPS[category as DrinkCategory];

  return (
    <main className="pb-24 pt-4">
      {groups.map((key) => {
        const items = t.raw(key) as { title: string; icon: string }[] | undefined;
        if (!items?.length) return null;

        return (
          <section key={key} className="mb-8 px-2">
            <h2 className="mb-3 text-lg font-semibold capitalize">{key}</h2>
            <ul className="grid grid-cols-2 gap-3">
              {items.map((it, i) => (
                <li key={i} className="rounded-lg bg-gray-800 px-3 py-2 flex flex-col items-center gap-2">
                  <Image 
                    src={it.icon}
                    alt={it.title}
                    width={100}
                    height={100}
                    className="rounded-xl"
                    />
                    <p className="px-2 py-1 bg-gray-700 rounded-full">
                      {it.title}
                    </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}




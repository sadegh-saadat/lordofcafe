"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Route = "/home" | "/drink" | "/food" | "/hookah" | "/dessert";

type ButtonUpItem = {
  title: string;
  icon: string;
  href: Route;
}

export default function Home() {

  const t = useTranslations('buttonNav');
  const buttonUp: ButtonUpItem[] = t.raw('buttonUp') as ButtonUpItem[];

  return (
    <section className="min-h-screen bg-gray-900 grid place-items-center">
      <div className="w-full h-full flex items-center flex-col gap-10 justify-center ">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-5xl font-bold">LOGO</h2>
          <p className="text-2xl font-medium text-amber-700">{t('wellcome')}</p>
        </div>
        <ul className="flex flex-col items-start gap-2">
          {buttonUp.map((item, index: number) => (
            <li 
            className="flex items-center w-full px-4 py-2 gap-2 bg-amber-800 rounded-full"
            key={index}>
              <Image 
                src={item.icon} 
                alt='icon' 
                width={32} 
                height={32} 
              />
              <Link 
                href={item.href} 
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </div>
    </section>
  );
}
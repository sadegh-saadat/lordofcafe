"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
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
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full h-full flex items-center flex-col gap-10 justify-center "
      >
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-5xl font-bold">LOGO</h2>
          <p className="text-3xl font-medium text-amber-700">{t('wellcome')}</p>
        </div>
        <ul className="flex flex-col items-start gap-2">
          {buttonUp.map((item, index: number) => (
            <li 
            className="w-full"
            key={index}>
              <Link 
                className="bg-amber-800 rounded-full flex items-center text-left gap-2 px-4 py-2"
                href={item.href} 
              >
                <Image 
                  src={item.icon} 
                  alt='icon' 
                  width={32} 
                  height={32} 
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </motion.div>
    </section>
  );
}
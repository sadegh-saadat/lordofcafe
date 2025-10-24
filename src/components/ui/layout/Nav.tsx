"use client"

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl"
import React from 'react'

type NavItem = {
  key: string;
  title: string;
}

export default function Nav() {
  const t = useTranslations();
  const pathname = usePathname();

  const parts = pathname.split('/').filter(Boolean);
  // parts[0]=section, parts[1]=category (در صورت وجود)
  const section = parts[0] as 'food' | 'drink' | "hookah" | undefined;
  const activeCategory = section === 'drink' ? parts[1] : undefined;

  if (!section || !['food', 'drink', 'hookah'].includes(section)) {
    return null;
  }

  const buttonNav = t.raw(`buttonNav.${section}`) as NavItem[] | undefined;

  if (!buttonNav || !Array.isArray(buttonNav) || buttonNav.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-2 w-full h-20 px-2 pb-2">
      <div className="w-full h-full bg-amber-800 rounded-full flex items-center overflow-hidden">
        <nav className="w-full h-full">
          <div className="w-full h-full flex items-center gap-2 px-5 overflow-x-auto mask-l-from-90% mask-r-from-90%">
            {buttonNav.map((item) => {
              const isActive = activeCategory === item.key;
              
              // فقط برای drink از category استفاده می‌کنیم
              const href = section === 'drink' 
                ? { pathname: "/drink/[category]" as const, params: { category: item.key } }
                : (`/${section}` as '/food' | '/hookah'); // برای food و hookah فعلاً همون صفحه اصلی
              
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-4 py-2 shadow-lg rounded-full whitespace-nowrap transition-colors ${
                    isActive ? "bg-amber-500 text-white" : "bg-amber-600 text-white/90"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}

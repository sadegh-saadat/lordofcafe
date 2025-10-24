"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/utils/twMerge";
import { Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import React, { startTransition, useState } from 'react'

type Option = {
  value: Locale;
  label: string;
};

type Props = {
  options: Option[];
  defaultValue: Locale;
  label: string;
}

export default function LocaleSwitcherSelect({
  options,
  label
}: Props) {

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(nextLocale: Locale) {
    setIsOpen(false);
    
    startTransition(() => {
      router.replace(
        // @ts-expect-error Next.js types are not correctly inferring pathname and params
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="relative w-fit">
      <label className="text-amber-800 mr-2">{label}</label>
      <button 
      aria-expanded={isOpen}
      aria-haspopup='true'
      onClick={() => setIsOpen(!isOpen)}
      className="bg-amber-800 rounded-full px-4 py-2 "
      >
        <span>
          {options.find((opt) => opt.value === locale)?.label}
        </span>
      </button>
      <ul className={cn(
        "absolute top-10 right-0 z-10 mt-1 rounded-[8px] bg-amber-800 text-absolute-100 flex flex-col items-center justify-between overflow-hidden px-4 transition-all origin-top duration-300 ease-in-out",
        isOpen ? " h-24" : " h-0"
      )}>
        {options.map((option) => (
          <li key={option.value} className="w-full">
            <button
            onClick={() => handleSelect(option.value)}
            className="w-full py-1"
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

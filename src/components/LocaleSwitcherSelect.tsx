"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/utils/twMerge";
import { Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import React, { startTransition } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

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


  function handleSelect(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error Next.js types are not correctly inferring pathname and params
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Menu as="div" className="relative w-fit h-30">
      <MenuButton className="p-2 rounded-full bg-gray-800 flex items-center cursor-pointer select-none outline-none font-medium">
        <label className="text-amber-800 mx-2">{label}</label>
        <span className="px-6 py-2 bg-amber-800 rounded-full text-absolute-100">
          {options.find((opt) => opt.value === locale)?.label || label}
        </span>
      </MenuButton>

      <MenuItems
        transition
        className={cn(
          "mt-2 w-full bg-gray-800 text-absolute-100 rounded-2xl overflow-hidden outline-none",
          "flex flex-col items-center gap-1 py-1",
          "transition duration-300 ease-out",
          "data-closed:opacity-0 data-closed:-translate-y-1 data-closed:scale-95"
        )}
      >
        {options
          .filter((option) => option.value !== locale)
          .map((option) => (
            <MenuItem key={option.value}>
                <button
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "px-6 py-2 cursor-pointer text-amber-800",
                  )}
                >
                  {option.label}
                </button>
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  )
}

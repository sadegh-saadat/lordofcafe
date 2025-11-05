"use client"

import { cn } from "@/utils/twMerge";
import { motion,AnimatePresence } from "motion/react";
import Image from "next/image";
import React from 'react'
import { useTranslations } from "next-intl";



type Item = {
  title: string;
  icon: string;
  price: number;
};

type Groups = {
  key: string;
  item?: Item[]
};

export default function DessertCategory({groups}: { groups: Groups[] }) {
  const tGroup = useTranslations('groupTitles');

  return (
    <main className="pb-24 pt-4 text-white">
      <AnimatePresence mode="wait">
        {groups.map((key) => {
          const items = key.item;
          if (!items?.length) return null;

          return (
            <motion.section
              key={key.key}
              className="mb-8 px-2"
              initial={{ opacity: 0, y: 200}}
              animate={{ opacity: 1, y: 0}}
              exit={{ opacity: 0, y: -50}}
              layout="position"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="w-full">
                  <h2 className="mb-3 text-center text-2xl font-extrabold capitalize">
                    {tGroup(key.key as string)}
                  </h2>
                </div>
              <ul className="grid grid-cols-3 gap-2">
                {items.map((it, i) => (
                  <li key={i} className="rounded-lg bg-gray-900 px-2 py-2 flex flex-col items-center gap-1">
                    <Image 
                      src={it.icon}
                      alt={it.title}
                      width={200}
                      height={100}
                      priority={i < 10}
                      quality={10}
                      className="rounded-lg border-2 w-full border-amber-600/50"
                      />
                      <div className="w-full h-full flex flex-col items-center justify-between gap-4">
                        <p
                        className={cn(
                          "w-full text-balance text-sm font-semibold flex-1"
                        )}>
                          {it.title}
                        </p>
                        <p className="whitespace-nowrap text-lg text-center font-bold text-amber-600">{it.price} ₺</p>
                      </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          );
        })}
      </AnimatePresence>
    </main>
  )
}
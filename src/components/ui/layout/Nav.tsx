"use client"


import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/utils/twMerge"
import { useTranslations } from "next-intl"
import React from 'react'

type NavItem = {
  key: string;
  title: string;
}


export default function Nav() {

  const pathname = usePathname();
  const t = useTranslations();

  // Extract the section from pathname (e.g., 'food', 'drink', 'hookah')
  const section = pathname.split('/')[1] as 'food' | 'drink' | 'hookah';
  const buttonNav: NavItem[] = t.raw(`buttonNav.${section}`) as NavItem[];

  // If section is not valid, don't show nav
  if (!['food', 'drink', 'hookah'].includes(section)) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-2 w-full h-20 px-2 pb-2 z-50 text-black",
        pathname === "/dessert/[category]" ? "hidden" : "block"
      )}
    >
      <div className="w-full h-full bg-amber-800 rounded-full flex items-center overflow-hidden">
        <nav className="w-full h-full flex items-center overflow-hidden gap-2 overflow-x-auto px-4">
          {buttonNav?.map((item) => {
            const href = section === 'food' || section === 'drink' || section === 'hookah'
              ? { pathname: `/${section}/[category]` as const, params: { category: item.key } }
              : `/${section}` as const;
            
            return (
              <Link
                href={href}
                key={item.key}
                className="whitespace-nowrap px-4 py-3 rounded-full bg-amber-700"
              >
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}


























// "use client"

// import { Link, usePathname } from "@/i18n/navigation";
// import { cn } from "@/utils/twMerge";
// import { useTranslations } from "next-intl"

// type NavItem = {
//   key: string;
//   title: string;
// }

// type Section = 'food' | 'drink' | 'hookah';

// const SECTIONS_WITH_NAV: Section[] = ['food', 'drink', 'hookah'];

// export default function Nav() {
//   const t = useTranslations();
//   const pathname = usePathname();

//   const [section, activeCategory] = pathname.split('/').filter(Boolean);

//   if (!section || !SECTIONS_WITH_NAV.includes(section as Section)) {
//     return null;
//   }

//   const buttonNav = t.raw(`buttonNav.${section}`) as NavItem[] | undefined;

//   if (!buttonNav?.length) {
//     return null;
//   }

//   return (
//     <div className="fixed bottom-2 w-full h-20 px-2 pb-2 z-50">
//       <div className="w-full h-full bg-amber-800 rounded-full flex items-center overflow-hidden">
//         <nav className="w-full h-full">
//           <div className="w-full h-full flex items-center gap-2 px-5 overflow-x-auto mask-l-from-90% mask-r-from-90%">
//             {buttonNav.map((item) => {
//               const isActive = activeCategory === item.key;
              
//               const href = section === 'drink' || section === 'food'
//                 ? { pathname: `/${section}/[category]` as const, params: { category: item.key } }
//                 : (`/${section}` as '/hookah');
              
//               return (
//                 <Link
//                   key={item.key}
//                   href={href}
//                   className={cn(
//                     "px-4 py-2 shadow-lg rounded-full whitespace-nowrap transition-colors duration-300 bg-amber-700/50",
//                   )}
//                 >
//                   {item.title}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>
//       </div>
//     </div>
//   )
// }

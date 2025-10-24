"use client"

import { Link,usePathname } from "@/i18n/navigation";
import { cn } from "@/utils/twMerge";
import { useTranslations } from "next-intl";
import Image from "next/image"
import { useEffect, useState } from "react"

type Route = "/home" | "/drink" | "/food" | "/hookah" | "/dessert";

type buttonUp = {
  title: string;
  icon: string;
  href: Route;
}

export default function ButtonNav() {

  const [active, setActive] = useState(false);
  const t = useTranslations('buttonNav');
  const pathname = usePathname();

  const buttonUp: buttonUp[] = t.raw("buttonUp") as buttonUp[];
  const currentItem = buttonUp.find(item => pathname.startsWith(item.href));

  useEffect(() => {
    setActive(false)
  }, [pathname]);

  return (
    <>
      <div 
        onClick={() => setActive(false)}
        className={cn(
          "fixed inset-0 w-full h-full backdrop-blur-sm transition-all duration-300 ease-in-out",
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      <div 
      className={cn(
        "fixed right-3",
        pathname === "/dessert" ? "bottom-2" : "bottom-24"
      )}
      >
        <button 
          onClick={() => setActive(!active)}
          className={cn(
          "w-15 h-15 bg-amber-700 z-50 transition-all duration-300 ease-in-out grid place-items-center",
          active ? "rounded-[30px_0px_30px_0px]" : "rounded-[30px]",
        )}>
          <Image 
            alt="icon"
            src={currentItem ? currentItem.icon : '/home.svg'}
            width={32}
            height={32}
          />
        </button>
        <div className="relative">
          <div className={cn(
            "absolute bottom-0 bg-amber-800 rounded-[8px_8px_34px_8px] px-2 py-4 w-[60vw] h-[25vh] right-0 origin-bottom-right flex flex-col items-start justify-between -z-10 transition-all duration-300 ease-in-out",
            active ? "opacity-100 transform translate-x-0" : "opacity-0 translate-x-4"
          )}>
            <div className="flex flex-col items-start justify-between h-full">
              {buttonUp.map((item, index: number) => {
                const isActive = pathname === item.href
                return (
                  <ul key={index}>
                    <li className={cn("flex gap-2 items-center text-3xl px-4 py-1 ",
                      isActive ? "bg-amber-500/50 rounded-full" : ""
                    )}>
                      <Image 
                        alt="icon"
                        src={item.icon}
                        width={32}
                        height={32}
                      />
                      <Link 
                      href={item.href}
                      onClick={() => setActive(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
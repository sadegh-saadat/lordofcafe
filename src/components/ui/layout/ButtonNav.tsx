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
    <div className="z-50">
      <div 
        onClick={() => setActive(false)}
        className={cn(
          "fixed inset-0 w-full h-full backdrop-blur-sm transition-all duration-300 ease-in-out",
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      <div 
      className={cn(
        "fixed right-3 z-50",
        pathname === "/dessert/[category]" ? "bottom-2" : "bottom-24"
      )}
      >
        <button 
          onClick={() => setActive(!active)}
          className={cn(
          "w-15 h-15 bg-amber-700 transition-all duration-300 ease-in-out grid place-items-center",
          active ? "rounded-[30px_0px_30px_0px]" : "rounded-[30px]",
        )}>
          <Image 
            alt="icon"
            src={currentItem ? currentItem.icon : '/home.svg'}
            width={32}
            height={32}
          />
        </button>
        <div className="relative -z-10">
          <div className={cn(
            "absolute bottom-0 bg-amber-800 rounded-[8px_8px_34px_8px] px-2 py-4 w-[80vw] h-[25vh] right-0 origin-bottom-right flex flex-col items-start justify-between transform transition-all duration-300 ease-in-out",
            active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          )}>
            <div className="flex flex-col items-start justify-between h-full">
              {buttonUp.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <ul key={item.href}>
                    <li className={cn(
                      isActive ? "bg-amber-500/50 rounded-full" : ""
                    )}>
                      <Link 
                      href={item.href}
                      onClick={() => setActive(false)}
                      className="flex items-center gap-3 px-4 py-1 text-2xl"
                      >
                        <Image 
                          alt="icon"
                          src={item.icon}
                          width={32}
                          height={32}
                        />
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
    </div>
  )
}
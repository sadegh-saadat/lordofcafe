

import { DRINK_GROUPS } from "@/lib/groups";
import { redirect } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function DrinkPage({ params }: Props) {
  const { locale } = await params;
  const first = Object.keys(DRINK_GROUPS)[0];
  redirect(`/${locale}/drink/${first}`);
}

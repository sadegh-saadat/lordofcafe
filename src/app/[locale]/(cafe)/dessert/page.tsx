
import { redirect } from "next/navigation";
import { DESSERT_GROUPS } from "@/lib/groups";

type Props = { params: Promise<{ locale: string }> };
export default async function DessertPage({ params }: Props) {
  const { locale } = await params;
  const first = Object.keys(DESSERT_GROUPS)[0];
  redirect(`/${locale}/dessert/${first}`);
}

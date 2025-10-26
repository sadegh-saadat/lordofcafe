import { FOOD_GROUPS } from "@/lib/groups";
import { redirect } from "next/navigation";


type Props = { params: Promise<{ locale: string }> };
export default async function FoodPage({ params }: Props) {

  const { locale } = await params;
  const first = Object.keys(FOOD_GROUPS)[0];
  redirect(`/${locale}/food/${first}`);
}

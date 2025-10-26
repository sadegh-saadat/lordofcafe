import CategoryUi from "@/components/ui/layout/CategoryUi";
import { getCategoryGroups } from "@/hooks/useCategory";
import { notFound } from "next/navigation";


type Props = { params: { locale: string; category: string } };

export default async function FoodCategoryPage({ params }: Props) {
  const { locale, category } = params;

  const groups = await getCategoryGroups({ locale, category });

  if (!groups) { notFound();}

  return (
    <CategoryUi groups={groups} />
  );
}
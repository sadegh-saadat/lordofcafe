import { notFound } from "next/navigation";
import { getCategoryGroups } from "@/hooks/useCategory";
import CategoryUi from "@/components/ui/layout/CategoryUi";

type Props = { params: { locale: string; category: string } };

export default async function DrinkCategoryPage({ params }: Props) {
  const { locale, category } = params;
  
  const groups = await getCategoryGroups({ locale, category });

  if (!groups) {
    notFound();
  }

  return (
    <CategoryUi groups={groups} />
  );
}




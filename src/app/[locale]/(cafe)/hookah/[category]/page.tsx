import CategoryUi from "@/components/ui/layout/CategoryUi";
import { getCategoryGroups } from "@/hooks/useCategory";
import { notFound } from "next/navigation";


export default async function FoodCategoryPage(props: PageProps<'/[locale]/hookah/[category]'>) {
  const { locale, category } = await props.params;

  const groups = await getCategoryGroups({ locale, category });

  if (!groups) { notFound() }

  return (
    <CategoryUi groups={groups} />
  );
}

import { getCategoryGroups } from "@/hooks/useCategory";
import { notFound } from "next/navigation";
import CategoryUi from "@/components/ui/layout/CategoryUi";

export default async function DessertCategoryPage(props: PageProps<'/[locale]/dessert/[category]'>) {
  const { locale, category } = await props.params;

  const groups = await getCategoryGroups({ locale, category });

  if (!groups) {
    notFound();
  };

  return (
    <CategoryUi groups={groups} />
  );
}
import { notFound } from "next/navigation";
import { getCategoryGroups } from "@/hooks/useCategory";
import CategoryUi from "@/components/ui/layout/CategoryUi";

export default async function DrinkCategoryPage(props: PageProps<'/[locale]/drink/[category]'>) {
  const { locale, category } = await props.params;
  
  const groups = await getCategoryGroups({ locale, category });

  if (!groups) {
    notFound();
  }

  return (
    <CategoryUi groups={groups} />
  );
}




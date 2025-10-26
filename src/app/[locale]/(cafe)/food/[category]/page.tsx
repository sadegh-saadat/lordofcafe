import CategoryUi from "@/components/ui/layout/CategoryUi";
import { useCategory } from "@/hooks/useCategory";
import { notFound } from "next/navigation";


type Props = { params: Promise<{ locale: string; category: string }> };

export default async function FoodCategoryPage({ params }: Props) {
  const { locale, category } = await params;

  const groups = await useCategory({ locale, category });

  if (!groups) { notFound();}

  return (
    <CategoryUi groups={groups} />
  );
}
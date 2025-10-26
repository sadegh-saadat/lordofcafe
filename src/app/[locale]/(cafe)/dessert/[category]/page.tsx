
import { useCategory } from "@/hooks/useCategory";
import { notFound } from "next/navigation";
import CategoryUi from "@/components/ui/layout/CategoryUi";


type Props = {
  params: Promise<{ locale: string; category: string }>
};

export default async function DessertCategoryPage({ params }: Props) {
  const { locale, category } = await params;

  const groups = await useCategory({ locale, category });

  if (!groups) {
    notFound();
  };

  return (
    <CategoryUi groups={groups} />
  );
}
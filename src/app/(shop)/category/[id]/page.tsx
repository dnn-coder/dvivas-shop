import ProductGrid from '@/components/products/product-grid/ProductGrid';
import Title from '@/components/ui/title/Title';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';
const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}
export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const productos = seedProducts.filter(product => product.gender === id);

  // if (id === 'kids') {
  //   notFound();
  // }

  const labels: Record<Category, string> = {
    men: 'hombres',
    women: 'mujeres',
    kid: 'niños',
    unisex: 'todos',
  };
  return (
    <>
      <Title
        title={`Articulos para ${(labels as any)[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={productos} />
    </>
  );
}

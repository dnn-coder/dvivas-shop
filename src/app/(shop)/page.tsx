import { getPaginatedProductsWithImages } from '@/actions';
import ProductGrid from '@/components/products/product-grid/ProductGrid';
import Pagination from '@/components/ui/pagination/Pagination';
import Title from '@/components/ui/title/Title';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  console.log({ currentPage, totalPages });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}

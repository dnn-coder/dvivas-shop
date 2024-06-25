export const revalidate = 604800;

import { Metadata, ResolvingMetadata } from 'next';
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector';
import SizeSelector from '@/components/product/size-selector/SizeSelector';
import ProductMobileSlideshow from '@/components/product/slideshow/ProductMobileSlideshow';
import ProductSlideshow from '@/components/product/slideshow/ProductSlideshow';
import { title_font } from '@/config/fonts';
import { getProductBySlug } from '@/actions/product/get-product-by-slug';

import { notFound } from 'next/navigation';
import StockLabel from '@/components/product/stock-label/StockLabel';
import AddToCard from './ui/AddToCard';
import { currencyFormat } from '@/utils';

interface Props {
  params: {
    slug: string;
  };
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function CartPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  console.log(product);

  //initialData.products.find(product => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Mobile slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          clasName="block md:hidden"
        />
      </div>
      {/* Desktop slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        <ProductSlideshow
          title={product.title}
          images={product.images}
          clasName="hidden md:block"
        />
      </div>

      {/* detalles */}
      <div className="col-span-1 px-5 ">
        {/* Stock  */}

        <StockLabel slug={product.slug} />
        {/* titulo  */}
        <h1 className={`${title_font.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        {/* precio  */}
        <p className="text-lg mb-5"> {currencyFormat(product.price)} </p>

        <AddToCard product={product} />

        {/* decsripcion  */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>

        {/* button */}
      </div>
    </div>
  );
}

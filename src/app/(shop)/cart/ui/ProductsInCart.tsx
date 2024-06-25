'use client';

import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector';
import { useCartStore } from '@/store';
import Image from 'next/image';

export default function ProductsInCart() {
  const productsInCart = useCartStore(state => state.cart);

  return (
    <>
      {productsInCart.map(product => (
        <div key={product.slug} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.title}
            className="mr-5 rounded "
          />

          <div>
            <p> {product.title} </p>
            <p>$ {product.price} </p>
            <QuantitySelector
              quantity={3}
              onQuantityChanged={value => console.log(value)}
            />
            <button className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
}

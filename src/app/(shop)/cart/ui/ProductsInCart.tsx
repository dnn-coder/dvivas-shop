'use client';

import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector';
import { useCartStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { currencyFormat } from '@/utils';

export const ProductsInCart = () => {
  const updateProductQuantity = useCartStore(
    state => state.updateProductQuantity
  );
  const removeProduct = useCartStore(state => state.removeProduct);
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore(state => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productsInCart.map(product => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.title}
            className="mr-5 rounded "
          />

          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}>
              <p> {product.title} </p>
            </Link>
            <p> {product.size} </p>
            <p>{currencyFormat(product.price)} </p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={quantity =>
                updateProductQuantity(product, quantity)
              }
            />
            <button
              onClick={() => removeProduct(product)}
              className="underline mt-3">
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

'use client';

import SizeSelector from '@/components/product/size-selector/SizeSelector';
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector';
import { useState } from 'react';
import type { Product, CartProduct, Size } from '@/interfaces';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';

interface Props {
  product: Product;
}

export default function AddToCard({ product }: Props) {
  const addProductToCart = useCartStore(state => state.addProductTocart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);
  
  const addToCart = () => {
    setPosted(true);
    if (!size) return;

    //TODO: add to cart

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };
    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };
  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500">Debe seleccionar una talla*</span>
      )}
      <SizeSelector
        onSizeChange={setSize}
        selectedSize={size}
        availableSizes={product.sizes}
      />
      {/* selector cantidad */}
      <QuantitySelector onQuantityChanged={setQuantity} quantity={quantity} />

      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
}

'use client';

import SizeSelector from '@/components/product/size-selector/SizeSelector';
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector';
import { Product } from '@prisma/client';
import { useState } from 'react';
import { Size } from '@/interfaces';

interface Props {
  product: Product;
}

export default function AddToCard({ product }: Props) {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);
  const addToCart = () => {
    setPosted(true);
    if (!size) return;
    console.log({ size, quantity });
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
      <QuantitySelector onQuantityChangued={setQuantity} quantity={quantity} />

      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
}

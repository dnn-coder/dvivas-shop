'use client';

import { Product } from '@/interfaces/product.interface';
import { currencyFormat } from '@/utils/currencyFormat';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  product: Product;
}

export default function ProductGridItem({ product }: Props) {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Image
        src={`/products/${displayImage}`}
        alt={product.title}
        className="w-full object-cover rounded"
        width={500}
        height={500}
        onMouseEnter={() => setDisplayImage(product.images[1])}
        onMouseLeave={() => setDisplayImage(product.images[0])}
      />

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-500 "
          href={`/product/${product.slug} `}>
          {product.title}
        </Link>
        <span className="font-bold">{currencyFormat(product.price)} </span>
      </div>
    </div>
  );
}

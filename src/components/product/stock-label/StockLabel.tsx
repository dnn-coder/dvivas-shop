'use client';

import { getStockBySlug } from '@/actions';
import { title_font } from '@/config/fonts';
import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

export default function StockLabel({ slug }: Props) {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  });

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <h1
          className={`${title_font.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}>
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${title_font.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
}

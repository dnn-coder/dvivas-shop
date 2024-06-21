import Title from '@/components/ui/title/Title';
import { initialData } from '@/seed/seed';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import { IoCardOutline } from 'react-icons/io5';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  // initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Compra # ${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 ',
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )}>
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pago Pendiente</span> */}
              <span className="mx-2 font-bold">Pago Realizado</span>
            </div>

            {/* items carrito  */}
            {productsInCart.map(product => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded "
                />

                <div>
                  <p> {product.title} </p>
                  <p>$ {product.price} x 3 </p>
                  <p className="font-bold">
                    Subtotal: $ {product.price * 3} x 3{' '}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl font-bold">Danny Vivas</p>
              <p>Calle falsa 123</p>
              <p>Col. Centro</p>
              <p>Alcaldía de Popayán</p>
              <p>Cauca - Colombia</p>
              <p>19001 + 57</p>
              <p>3146592536</p>
            </div>

            {/* Divaider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de Orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Producto</span>
              <span className="text-right">3 Artículos</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Impuestos 19% </span>
              <span className="text-right">$ 100</span>
              <span className="mt-5 text-2xl">Total: </span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 ',
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  }
                )}>
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pago Pendiente</span> */}
                <span className="mx-2 font-bold">Pago Realizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

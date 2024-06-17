'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useState } from 'react';

interface Props {
  quantity: number;
}

export default function CuantitySelector({ quantity }: Props) {
  const [count, setCount] = useState(quantity);

  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return 1;
    setCount(count + value);
  };

  return (
    <div className="flex">
      <button onClick={() => onQuantityChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
        {count}
      </span>
      <button onClick={() => onQuantityChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
}

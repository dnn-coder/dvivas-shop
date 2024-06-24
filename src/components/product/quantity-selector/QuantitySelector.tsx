'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useState } from 'react';

interface Props {
  quantity: number;

  onQuantityChangued: (value: number) => void;
}

export default function CuantitySelector({
  quantity,
  onQuantityChangued,
}: Props) {
  //const [count, setCount] = useState(quantity);

  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return 1;
    onQuantityChangued(quantity + value);
  };

  return (
    <div className="flex">
      <button onClick={() => onValueChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
        {quantity}
      </span>
      <button onClick={() => onValueChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
}

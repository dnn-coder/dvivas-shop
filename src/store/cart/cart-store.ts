import type { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;

  addProductTocart: (product: CartProduct) => void;
  // updateProductQuantity
  // removeProduct
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      //methods
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      addProductTocart: (product: CartProduct) => {
        const { cart } = get();
        // 1. revisar si el producto existe  en el carrito con la talla seleccionada
        const productInCart = cart.some(
          item => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Se que existe el producto por talla... tengo que incrementar...

        const updatedCartProducts = cart.map(item => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);

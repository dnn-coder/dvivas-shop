import type { CartProduct } from "@/interfaces";
import { create } from "zustand";

interface State {
    cart: CartProduct[];


    // addProductToCart
    // updateProductQuantity
    // removeProduct
}

export const useCartStore = create<State>()(
    
    (set) => ({

    cart: []
}))
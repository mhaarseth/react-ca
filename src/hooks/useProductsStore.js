import { create } from 'zustand';

export const useProductsStore = create((set) => ({
    cart: [],
    cartTotal: 0,
    cartCount: 0,
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product], cartCount: state.cartCount + 1, cartTotal: state.cartTotal + product.price, })),
    clearCart: () => set({ cart: [], cartcount: 0 }),
}));

// Add sum of cart items
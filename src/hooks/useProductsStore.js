import { create } from 'zustand';

export const useProductsStore = create((set) => ({
    cart: [],
    cartTotal: 0,
    cartCount: 0,
    addToCart: (product) => set((state) => {

        if (state.cart.find(item => item.id === product.id)) {
          return {
            cart: state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item),
            cartTotal: state.cartTotal + product.price,
            cartCount: state.cartCount + 1,
          };
        } else {
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
            cartTotal: state.cartTotal + product.price,
            cartCount: state.cartCount + 1,
          };
        }
     }),
     clearCart: () => set({ cart: [], cartTotal: 0, cartCount: 0 }),
    }));
import { shallow } from 'zustand/shallow';
import { useProductsStore } from '../../hooks/useProductsStore';

export default function Cart() {
  const { cart, cartTotal, clearCart } = useProductsStore(
    (state) => ({
      cart: state.cart,
      cartTotal: state.cartTotal,
      addToCart: state.addToCart,
      clearCart: state.clearCart,
    }),
    shallow,
  )

    return (
      <div>
      <ul>
        <li>Cart: {cart.map(item => `${item.title} - ${item.price}`).join(', ')}</li>
      </ul>
      <div>Total in cart: {cartTotal.toFixed(2)}</div>
      <button onClick={clearCart}>Clear cart</button>
    </div>
    )
  }
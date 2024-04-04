import React from 'react';
import { shallow } from 'zustand/shallow';
import { useProductsStore } from '../../hooks/useProductsStore';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

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
      <div className={styles.cart}>
      <ul className={styles.cartItems}>
      {cart.map((item) => (
          <li className={styles.cartItem} key={item.id}><span className={styles.cartItemName}>{item.title}</span><span className={styles.cartItemPrice}>{item.quantity > 1 ? `${item.quantity} x ` : ''}{item.price.toFixed(2)}kr</span></li>
        ))}
      </ul>
      <div className={styles.totalInCart}><span className={styles.totalInCartText}>Total in cart:</span> <span className={styles.totalInCartSum}>{cartTotal.toFixed(2)}kr</span></div>
      <div>
        <button className={styles.clearCartButton} onClick={clearCart}>Clear cart</button><div className={styles.checkoutLink}><Link to='/checkout'>Checkout</Link></div>
      </div>
    </div>
    )
  
  };
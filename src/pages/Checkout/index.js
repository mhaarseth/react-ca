import React from 'react';
import { shallow } from 'zustand/shallow';
import { useProductsStore } from '../../hooks/useProductsStore';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.css'


export default function Checkout() {
  const { cart, cartTotal, clearCart } = useProductsStore(
    (state) => ({
      cart: state.cart,
      cartTotal: state.cartTotal,
      addToCart: state.addToCart,
      clearCart: state.clearCart,
    }),
    shallow,
  )

  const isCartEmpty = cart.length === 0;

  return (
        <div className={styles.checkout}>
          <h1 className={styles.checkoutTitle}>Review your order</h1>
        <div className={styles.checkoutItemsContainer}>
        <ul className={styles.checkoutItems}>
        {cart.map((item) => (
            <li className={styles.checkoutItem} key={item.id}><span className={styles.checkoutItemName}>{item.title}</span><span className={styles.checkoutItemPrice}>{item.quantity > 1 ? `${item.quantity} x ` : ''}{item.price.toFixed(2)}kr</span></li>
          ))}
        </ul>
        <div className={styles.totalInCheckout}>
          <span className={styles.totalInCheckoutText}>Total:</span>
          <span className={styles.totalInCheckoutSum}>{cartTotal.toFixed(2)}kr</span>
        </div>
        <div className={styles.checkoutButtonsContainer}>
        {!isCartEmpty && (
          <>
          <button className={styles.clearCheckoutButton} onClick={clearCart}>Clear cart</button>
          <button className={styles.checkoutDoneButton} onClick={clearCart}><Link to='/checkoutsuccess'>Checkout</Link></button>
          </>
          )}
        </div>
        </div>
      </div>
  )
  }

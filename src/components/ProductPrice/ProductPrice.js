import React from 'react';
import styles from '../../pages/Product/Product.module.css'

export default function ProductPrice ({ product }) {
    const regularPrice = product.price;
    const discountAmount = product.discountedPrice < product.price ? product.price - product.discountedPrice : 0;
    const price = Math.min(product.price, product.discountedPrice);

    return (
        <div className={styles.priceContainer}>
          <p className={styles.price}>{price.toFixed(2)}kr</p>
          <br />
          {discountAmount > 0 && (
            <div>
            <p className={styles.regularPrice}>Regular price: {regularPrice}kr</p>
            <p className={styles.discountAmount}>You save: {discountAmount.toFixed(2)}kr</p>
            </div>
          )}
        </div>
     );
}
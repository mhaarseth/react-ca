import React from 'react';

export default function ProductPrice ({ product }) {
    const regularPrice = product.price;
    const discountAmount = product.discountedPrice < product.price ? product.price - product.discountedPrice : 0;
    const price = Math.min(product.price, product.discountedPrice);

    return (
        <div>
          <p>Price: NOK{price.toFixed(2)}</p>
          {discountAmount > 0 && (
            <div>
            <p>Regular price: NOK{regularPrice}</p>
            <p>You save: NOK{discountAmount.toFixed(2)}</p>
            </div>
          )}
        </div>
     );
}
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { apiUrl } from '../../constants/constants';
import { shallow } from 'zustand/shallow';
import ProductPrice from '../../components/ProductPrice/ProductPrice';
import { useProductsStore } from '../../hooks/useProductsStore';
import styles from './Product.module.css'

function Product() {
    let params = useParams();
    const productId = params.id;
    const productUrl = apiUrl + productId;
    const fetchProduct = useApi(productUrl);
    const product = fetchProduct.data;

    const { addToCart } = useProductsStore(
        (state) => ({
          cart: state.cart,
          cartCount: state.cartCount,
          cartTotal: state.cartTotal,
          addToCart: state.addToCart,
          clearCart: state.clearCart,
        }),
        shallow,
      )
    
    return (
        <div className={styles.productContainer}>
          <div className={styles.productTitleContainer}>
            <h1 className={styles.productTitle}>{product.title}</h1>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionContainerLeftSide }>
            {product.image && <img src={product.image.url} alt={product.image.alt} />}
          </div>
        <div className={styles.descriptionContainerRightSide}>
        <div className={styles.productDescription}>{product.description}</div>
        <ProductPrice product={product}/>
        <button className={styles.button} onClick={() => addToCart(product)}>Add to cart</button>
        <div className={styles.productReviews}>
      {product.reviews && product.reviews.map((review) => (
        <div>
          <h3>Other customers say:</h3>
          <div key={review.id} className={styles.productReview}>
            <div className={styles.userName}>{review.username}</div>
            <div className={styles.rating}>{review.rating}/6 stars</div>
            <div className={styles.reviewText}>{review.description}</div>
          </div>
        </div>
      ))}
      </div>
        </div>
        </div>
        <div>
    </div>
        </div>
    )
}

export default Product;
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { apiUrl } from '../constants/constants';
import { shallow } from 'zustand/shallow';
import ProductPrice from '../components/ProductPrice/ProductPrice';
import { useProductsStore } from '../hooks/useProductsStore';

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
        <div>
        <h2>{product.title}</h2>
        <ProductPrice product={product}/>
        <p>{product.description}</p>
        {product.image && <img src={product.image.url} alt={product.image.alt} />}
        <div>
        <h3>Reviews</h3>
      {product.reviews && product.reviews.map((review) => (
        <div key={review.id}>
          <p>Username: {review.username}</p>
          <p>Rating: {review.rating}</p>
          <p>Description: {review.description}</p>
        </div>
      ))}
    </div>
        
            
        <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    )
}

export default Product;
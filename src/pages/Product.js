import { useParams } from 'react-router-dom';

function Product() {
    let params = useParams();
    
    return (
        <div>Individual Product Page</div>
    )
}

export default Product;
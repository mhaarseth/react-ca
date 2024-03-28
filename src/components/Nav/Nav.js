import { Link } from 'react-router-dom';
import { useProductsStore } from '../../hooks/useProductsStore';

function Nav() {
    const { cartCount } = useProductsStore(
      (state) =>
      ({cartCount: state.cartCount,})
    )

    return (
    <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/cart'>Cart - {cartCount}</Link>
            </li>
          </ul>
        </nav>
    )
  }

  export default Nav;
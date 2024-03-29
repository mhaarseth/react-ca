import { Link } from 'react-router-dom';
import { useProductsStore } from '../../hooks/useProductsStore';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css'

function Nav() {
    const { cartCount } = useProductsStore(
      (state) =>
      ({cartCount: state.cartCount,})
    )

    return (
    <nav className={styles.nav}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <SearchBar />
          <Link to='/cart'>Cart {cartCount}</Link>
        </nav>
    )
  }

  export default Nav;
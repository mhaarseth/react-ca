import { Link } from 'react-router-dom';
import { useProductsStore } from '../../hooks/useProductsStore';
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

          <div className={styles.cartLink}>
          <Link to='/cart'>Cart</Link> ({cartCount})
          </div>
        </nav>
    )
  }

  export default Nav;
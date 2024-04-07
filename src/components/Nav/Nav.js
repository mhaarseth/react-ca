import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductsStore } from '../../hooks/useProductsStore';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart/Cart';
import styles from './Nav.module.css'

function Nav() {
    const { cartCount } = useProductsStore(
      (state) =>
      ({cartCount: state.cartCount,})
    )

    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen)
    }

    return (
    <nav className={styles.nav}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.link}>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>

          <div className={styles.cartLink}>
          <button className={styles.cartLinkButton} onClick={toggleCart}><FaShoppingCart /></button> ({cartCount})
          
          <div>
          {isCartOpen && <Cart />}
          </div>
          </div>
        </nav>
    )
  }

  export default Nav;
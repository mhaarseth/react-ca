import styles from './Header.module.css';
import Nav from "../Nav/Nav";

function Header() {
    return <header className={styles.headerContainer}><Nav /></header>
  }

  export default Header;
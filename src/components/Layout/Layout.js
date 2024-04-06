import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from '../SearchBar/SearchBar';

function Layout() {

    return (
      <div className={styles.layoutContainer}>
        <Header />
        <Outlet className={styles.outlet}/>
        <Footer />
      </div>
      )
    }

  export default Layout;
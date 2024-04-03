import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from '../SearchBar/SearchBar';

function Layout() {

    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }

  export default Layout;
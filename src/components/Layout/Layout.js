import { Outlet } from 'react-router-dom';
//import { useState } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from '../SearchBar/SearchBar';

function Layout() {
    //const [results, setResults] = useState([]);

    return (
      <div>
        <Header />
        <SearchBar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  export default Layout;
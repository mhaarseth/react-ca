import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Contact from  './pages/Contact/index.js';
import Cart from './components/Cart/Cart.js';
import Home from './pages/Home/index.js';
import RouteNotFound from './pages/RouteNotFound/index.js';
import Layout from './components/Layout/Layout.js';
import Product from './pages/Product/index.js';
import Checkout from './pages/Checkout/index.js';
import CheckoutSuccess from './pages/CheckoutSuccess/index.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkoutsuccess' element={<CheckoutSuccess />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>  
  )
}

export default App;
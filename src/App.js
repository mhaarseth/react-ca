import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Contact from  './pages/Contact.js';
import Cart from './components/Cart/Cart.js';
import Home from './pages/Home.js';
import RouteNotFound from './pages/RouteNotFound.js';
import Layout from './components/Layout/Layout.js';
import Product from './pages/Product.js';
import Checkout from './pages/Checkout.js';
import CheckoutSuccess from './pages/CheckoutSuccess.js';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
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
import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PublicLayout from './components/PublicLayout';
import AdminLayout from './components/AdminLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import UserOrders from './pages/UserOrders';
import OrderDetails from './pages/OrderDetails';
import Catalog from './pages/Catalog';
import CheckoutSuccess from './pages/CheckoutSuccess';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import StoreLocator from './pages/StoreLocator';



import './index.css';

// Wrapper to scroll to top on route change
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const location = useLocation();

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Pages */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-orders" element={<UserOrders />} />
            <Route path="/user-orders/:id" element={<OrderDetails />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stores" element={<StoreLocator />} />
          </Route>

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Pages */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:id" element={<CategoryDetail />} />
            <Route path="customers" element={<Customers />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

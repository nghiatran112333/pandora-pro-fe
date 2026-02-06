import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PublicLayout from './components/PublicLayout';
import AdminLayout from './components/AdminLayout';
import { AdminRoute, ProtectedRoute, GuestRoute } from './components/ProtectedRoute';

// Pages
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
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
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SearchResults from './pages/SearchResults';

import Policies from './pages/Policies';
import AdminPlaceholder from './components/AdminPlaceholder';



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
          {/* Public Pages - No auth required */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stores" element={<StoreLocator />} />
            <Route path="/search" element={<SearchResults />} />

            <Route path="/policies" element={<Policies />} />

            {/* Protected User Pages - Auth required */}
            <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/checkout-success" element={<ProtectedRoute><CheckoutSuccess /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/user-orders" element={<ProtectedRoute><UserOrders /></ProtectedRoute>} />
            <Route path="/user-orders/:id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
          </Route>

          {/* Auth Pages - Only for guests (not logged in) */}
          <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
          <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />
          <Route path="/forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
          <Route path="/reset-password" element={<GuestRoute><ResetPassword /></GuestRoute>} />

          {/* Admin Pages - Admin role required */}
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:id" element={<CategoryDetail />} />
            <Route path="customers" element={<Customers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="promos" element={<AdminPlaceholder title="Quản lý Khuyến mãi" />} />
            <Route path="inbox" element={<AdminPlaceholder title="Hộp thư đến" />} />
            <Route path="support" element={<AdminPlaceholder title="Hỗ trợ & Trợ giúp" />} />
            <Route path="settings" element={<AdminPlaceholder title="Cài đặt hệ thống" />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronDown, ChevronRight, LogOut, Package, Star, UserCircle, Menu, X } from 'lucide-react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Navbar = () => {
    const navigate = useNavigate();
    const { cartCount } = useCart();
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/catalog?q=${encodeURIComponent(searchTerm)}`);
            setShowMobileMenu(false);
            setShowSearchDropdown(false);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.trim()) {
            const results = products.filter(p =>
                p.name.toLowerCase().includes(value.toLowerCase()) ||
                p.category.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 5);
            setSearchResults(results);
            setShowSearchDropdown(true);
        } else {
            setSearchResults([]);
            setShowSearchDropdown(false);
        }
    };

    const productCategories = [
        { name: 'Iphone', hasSubmenu: true },
        { name: 'Lap Top', hasSubmenu: true },
        { name: 'Tivi', hasSubmenu: false },
        { name: 'Mini Speakers', hasSubmenu: false },
        { name: 'Headphones', hasSubmenu: false },
        { name: 'Ipad', hasSubmenu: false },
    ];

    const userMenuItems = [
        { icon: UserCircle, label: 'Thông tin tài khoản', path: '/profile' },
        { icon: Package, label: 'Đơn hàng của tôi', path: '/user-orders' },
        { icon: Star, label: 'Đánh giá', path: '/profile' },
        { icon: LogOut, label: 'Đăng xuất', path: '/login', isLogout: true },
    ];

    return (
        <>
            {/* Blue Banner */}
            <div className="top-banner-bar">
                Pandora Pro - Nơi công nghệ đỉnh cao hội tụ, kiến tạo phong cách sống thời thượng.
            </div>

            <header className="public-header">
                <div className="header-container">
                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link to="/" className="logo">
                        <span className="logo-icon">🛒</span> PandoraPro
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={`main-nav ${showMobileMenu ? 'active' : ''}`}>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMobileMenu(false)} >Trang Chủ</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMobileMenu(false)}>Giới Thiệu</NavLink>

                        {/* Products Dropdown */}
                        <div
                            className="nav-dropdown-wrapper"
                            onMouseEnter={() => setShowProductsDropdown(true)}
                            onMouseLeave={() => setShowProductsDropdown(false)}
                        >
                            <NavLink to="/catalog" className={({ isActive }) => `nav-dropdown-trigger ${isActive ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}>
                                Sản Phẩm <ChevronDown size={14} />
                            </NavLink>
                            {showProductsDropdown && (
                                <div className="dropdown-menu products-dropdown">
                                    {productCategories.map((cat, idx) => (
                                        <div key={idx} className="dropdown-item" onClick={() => { navigate('/catalog'); setShowMobileMenu(false); }}>
                                            <span>{cat.name}</span>
                                            {cat.hasSubmenu && <ChevronRight size={14} />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        <NavLink to="/stores" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMobileMenu(false)}>Cửa Hàng</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setShowMobileMenu(false)}>Liên Hệ</NavLink>
                    </nav>
                    <div className="header-tools">
                        <div className="search-box-navbar">
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                value={searchTerm}
                                onChange={handleInputChange}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                onFocus={() => searchTerm.trim() && setShowSearchDropdown(true)}
                                onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
                            />
                            <Search size={18} className="search-icon" onClick={handleSearch} style={{ cursor: 'pointer' }} />

                            {showSearchDropdown && searchResults.length > 0 && (
                                <div className="search-results-dropdown">
                                    {searchResults.map(result => (
                                        <div
                                            key={result.id}
                                            className="search-result-item"
                                            onClick={() => {
                                                navigate(`/catalog?q=${encodeURIComponent(result.name)}`);
                                                setSearchTerm(result.name);
                                                setShowSearchDropdown(false);
                                            }}
                                        >
                                            <img src={result.img} alt={result.name} />
                                            <div className="res-info">
                                                <span className="res-name">{result.name}</span>
                                                <span className="res-price">{result.price.toLocaleString()}đ</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="all-results-link" onClick={handleSearch}>
                                        Xem tất cả cho "{searchTerm}"
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="theme-toggle-btn" onClick={toggleTheme}>
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </div>
                        <NavLink to="/wishlist" className="tool-link">
                            <Heart size={20} />
                        </NavLink>
                        <div className="cart-icon-box" onClick={() => navigate('/cart')}>
                            <ShoppingCart size={20} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </div>

                        {/* User Dropdown */}
                        <div
                            className="user-dropdown-wrapper"
                            onMouseEnter={() => setShowUserDropdown(true)}
                            onMouseLeave={() => setShowUserDropdown(false)}
                        >
                            <div className="user-icon-circle">
                                <User size={18} />
                            </div>
                            {showUserDropdown && (
                                <div className="dropdown-menu user-dropdown">
                                    {userMenuItems.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`dropdown-item ${item.isLogout ? 'logout' : ''}`}
                                            onClick={() => { navigate(item.path); setShowUserDropdown(false); }}
                                        >
                                            <item.icon size={16} />
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;

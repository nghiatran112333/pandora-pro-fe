import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronDown, ChevronRight, LogOut, Package, Star, UserCircle, Menu, X, LogIn } from 'lucide-react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Navbar = () => {
    const navigate = useNavigate();
    const { cartCount } = useCart();
    const { isAuthenticated, user, logout } = useAuth();
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
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

    const handleLogout = () => {
        logout();
        navigate('/login');
        setShowUserDropdown(false);
    };

    const productCategories = [
        {
            name: 'iPhone',
            icon: '📱',
            description: 'Điện thoại thông minh',
            items: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14']
        },
        {
            name: 'MacBook',
            icon: '💻',
            description: 'Laptop cao cấp',
            items: ['MacBook Pro M3', 'MacBook Air M3', 'MacBook Pro 14"', 'MacBook Air 13"']
        },
        {
            name: 'iPad',
            icon: '📲',
            description: 'Máy tính bảng',
            items: ['iPad Pro M2', 'iPad Air', 'iPad mini', 'iPad 10th Gen']
        },
        {
            name: 'Apple Watch',
            icon: '⌚',
            description: 'Đồng hồ thông minh',
            items: ['Watch Ultra 2', 'Watch Series 9', 'Watch SE']
        },
        {
            name: 'AirPods',
            icon: '🎧',
            description: 'Tai nghe không dây',
            items: ['AirPods Pro 2', 'AirPods 3', 'AirPods Max']
        },
        {
            name: 'Phụ kiện',
            icon: '🔌',
            description: 'Phụ kiện chính hãng',
            items: ['Sạc MagSafe', 'Ốp lưng', 'Cáp & Adapter']
        },
    ];

    const featuredProducts = [
        { name: 'iPhone 15 Pro Max', price: '34.990.000đ', img: 'https://images.unsplash.com/photo-1696446702183-a12c8b68b1f8?w=100', tag: 'Mới' },
        { name: 'MacBook Pro M3', price: '49.990.000đ', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100', tag: 'Hot' },
    ];

    const userMenuItems = [
        { icon: UserCircle, label: 'Thông tin tài khoản', path: '/profile' },
        { icon: Package, label: 'Đơn hàng của tôi', path: '/user-orders' },
        { icon: Star, label: 'Đánh giá', path: '/profile' },
    ];

    return (
        <>
            {/* Blue Banner */}
            <div className="top-banner-bar">
                ✨ Pandora Pro - Nơi công nghệ đỉnh cao hội tụ, kiến tạo phong cách sống thời thượng
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

                        {/* Products Mega Menu */}
                        <div
                            className="nav-dropdown-wrapper mega-menu-wrapper"
                            onMouseEnter={() => setShowProductsDropdown(true)}
                            onMouseLeave={() => setShowProductsDropdown(false)}
                        >
                            <NavLink to="/catalog" className={({ isActive }) => `nav-dropdown-trigger ${isActive ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}>
                                Sản Phẩm <ChevronDown size={14} />
                            </NavLink>
                            {showProductsDropdown && (
                                <div className="mega-menu">
                                    <div className="mega-menu-content">
                                        {/* Categories Grid */}
                                        <div className="mega-menu-categories">
                                            <h4 className="mega-menu-title">Danh mục sản phẩm</h4>
                                            <div className="categories-grid">
                                                {productCategories.map((cat, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="category-card"
                                                        onClick={() => { navigate('/catalog'); setShowMobileMenu(false); setShowProductsDropdown(false); }}
                                                    >
                                                        <span className="category-icon">{cat.icon}</span>
                                                        <div className="category-info">
                                                            <span className="category-name">{cat.name}</span>
                                                            <span className="category-desc">{cat.description}</span>
                                                        </div>
                                                        <ChevronRight size={16} className="category-arrow" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Featured Products */}
                                        <div className="mega-menu-featured">
                                            <h4 className="mega-menu-title">Sản phẩm nổi bật</h4>
                                            <div className="featured-products">
                                                {featuredProducts.map((product, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="featured-product-card"
                                                        onClick={() => { navigate('/catalog'); setShowProductsDropdown(false); }}
                                                    >
                                                        <div className="featured-img-wrapper">
                                                            <img src={product.img} alt={product.name} />
                                                            {product.tag && <span className="product-tag">{product.tag}</span>}
                                                        </div>
                                                        <div className="featured-info">
                                                            <span className="featured-name">{product.name}</span>
                                                            <span className="featured-price">{product.price}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button
                                                className="view-all-btn-mega"
                                                onClick={() => { navigate('/catalog'); setShowProductsDropdown(false); }}
                                            >
                                                Xem tất cả sản phẩm <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
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
                                                navigate(`/search?q=${encodeURIComponent(result.name)}`);
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

                        {/* User Options */}
                        {isAuthenticated ? (
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
                                        <div className="user-dropdown-header">
                                            <span className="user-name-display">{user.name}</span>
                                            <span className="user-role-display">{user.role === 'admin' ? 'Quản trị viên' : 'Thành viên'}</span>
                                        </div>
                                        {userMenuItems.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="dropdown-item"
                                                onClick={() => { navigate(item.path); setShowUserDropdown(false); }}
                                            >
                                                <item.icon size={16} />
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                        <div
                                            className="dropdown-item logout"
                                            onClick={handleLogout}
                                        >
                                            <LogOut size={16} />
                                            <span>Đăng xuất</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="login-btn-header">
                                <span className="login-text">Đăng nhập</span>
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;

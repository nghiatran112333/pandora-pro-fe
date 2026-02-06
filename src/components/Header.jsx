import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Bell, ChevronDown, Moon, Sun, Menu, Heart, ShoppingCart,
    User, Settings, LogOut, UserCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = ({ onMenuClick }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const adminMenuItems = [
        { icon: UserCircle, label: 'Hồ sơ cá nhân', path: '/profile' },
        { icon: Settings, label: 'Cài đặt hệ thống', path: '/admin/settings' },
    ];

    return (
        <header className="header">
            <div className="header-search">
                <button className="menu-btn-mobile" onClick={onMenuClick}>
                    <Menu size={24} />
                </button>
                <div className="search-box">
                    <Search size={20} color="#94a3b8" />
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                </div>
            </div>

            <div className="header-actions">
                <Link to="/wishlist" className="icon-btn-ghost" title="Yêu thích">
                    <Heart size={22} />
                </Link>
                <Link to="/cart" className="icon-btn-ghost" title="Giỏ hàng">
                    <div className="notification-wrapper">
                        <ShoppingCart size={22} />
                        <span className="badge">3</span>
                    </div>
                </Link>

                <div className="notification-wrapper">
                    <Bell size={22} />
                    <span className="badge">5</span>
                </div>

                <div className="user-profile-container" ref={dropdownRef}>
                    <div
                        className={`user-profile ${isDropdownOpen ? 'active' : ''}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className="user-avatar">Hi</div>
                        <div className="user-info">
                            <span className="user-name">Admin</span>
                        </div>
                        <ChevronDown
                            size={16}
                            style={{
                                transition: 'transform 0.3s ease',
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'none'
                            }}
                        />
                    </div>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                className="profile-dropdown"
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <div className="dropdown-header">
                                    <span className="dropdown-user-name">{user?.name || 'Admin User'}</span>
                                    <span className="dropdown-user-role">Quản trị viên</span>
                                </div>

                                <div className="dropdown-menu">
                                    {adminMenuItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            className="dropdown-item"
                                            onClick={() => {
                                                navigate(item.path);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <item.icon size={18} />
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item logout" onClick={handleLogout}>
                                        <LogOut size={18} />
                                        <span>Đăng xuất</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;

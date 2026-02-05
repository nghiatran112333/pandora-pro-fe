import React from 'react';
import { Search, Bell, MessageSquare, ChevronDown, Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = ({ onMenuClick }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <header className="header">
            <div className="header-search">
                <button className="menu-btn-mobile" onClick={onMenuClick}>
                    <Menu size={24} />
                </button>
                <div className="search-box">
                    <Search size={20} color="#4d4d4d" />
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
            </div>

            <div className="header-actions">
                <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className="icon-btn-ghost"><MessageSquare size={20} /></button>
                <div className="notification-wrapper">
                    <Bell size={20} />
                    <span className="badge">5</span>
                </div>
                <div className="user-profile">
                    <div className="user-avatar">Hi</div>
                    <div className="user-info">
                        <span className="user-name">Admin</span>
                        <span className="user-role">Super Admin</span>
                    </div>
                    <ChevronDown size={14} color="#64748b" />
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  List,
  Users,
  BarChart2,
  Tag,
  Mail,
  HelpCircle,
  Settings
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <ShoppingBag size={20} />, label: 'Đơn Hàng', path: '/orders', badge: 16 },
    { icon: <Package size={20} />, label: 'Sản Phẩm', path: '/products' },
    { icon: <List size={20} />, label: 'Danh mục thể loại', path: '/categories' },
    { icon: <Users size={20} />, label: 'Khách hàng', path: '/customers' },
    { icon: <BarChart2 size={20} />, label: 'Báo cáo', path: '/reports' },
    { icon: <Tag size={20} />, label: 'Khuyến mãi', path: '/promos' },
    { icon: <Mail size={20} />, label: 'Inbox', path: '/inbox' },
    { icon: <HelpCircle size={20} />, label: 'Hỗ trợ', path: '/support' },
    { icon: <Settings size={20} />, label: 'Cài đặt cá nhân', path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Package color="#fff" fill="#fff" />
        </div>
        <span>PandoraPro</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-promo">
        <h3>Phát triển kinh doanh</h3>
        <p>Explore our marketing solutions</p>
        <button className="promo-btn">Xem thêm</button>
      </div>
    </aside>
  );
};

export default Sidebar;

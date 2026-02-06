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
  Settings,
  X,
  Monitor,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <ShoppingBag size={20} />, label: 'Đơn Hàng', path: '/admin/orders' },
    { icon: <Package size={20} />, label: 'Sản Phẩm', path: '/admin/products' },
    { icon: <List size={20} />, label: 'Danh mục thể loại', path: '/admin/categories' },
    { icon: <Users size={20} />, label: 'Khách hàng', path: '/admin/customers' },
    { icon: <BarChart2 size={20} />, label: 'Báo cáo', path: '/admin/reports' },
    { icon: <Tag size={20} />, label: 'Khuyến mãi', path: '/admin/promos' },
    { icon: <Mail size={20} />, label: 'Inbox', path: '/admin/inbox' },
    { icon: <HelpCircle size={20} />, label: 'Hỗ trợ', path: '/admin/support' },
    { icon: <Settings size={20} />, label: 'Cài đặt cá nhân', path: '/admin/settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Package color="#fff" fill="#fff" />
        </div>
        <span>PandoraPro</span>
        <button className="close-sidebar-btn" onClick={onClose}>
          <X size={24} />
        </button>
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

      <div className="sidebar-promo" style={isOpen ? { opacity: 1 } : { opacity: 0 }}>
        <div className="promo-icon" style={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          color: 'var(--primary-blue)',
          background: 'rgba(59, 130, 246, 0.1)',
          width: '52px',
          height: '52px',
          borderRadius: '16px',
          alignItems: 'center',
          margin: '0 auto 12px',
          boxShadow: '0 8px 16px rgba(59, 130, 246, 0.1)'
        }}>
          <Monitor size={26} />
        </div>
        <h3 style={{ fontSize: '15px', fontWeight: 800, letterSacing: '-0.3px' }}>Pandora Pro</h3>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700, opacity: 0.7 }}>Giao diện Website</p>
        <button
          className="promo-btn"
          onClick={() => {
            navigate('/');
            if (window.innerWidth <= 1024) onClose();
          }}
        >
          <span>Xem Cửa Hàng</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

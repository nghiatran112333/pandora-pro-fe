import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserOrders.css';

const UserOrders = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState('All');

    const allOrders = [
        { id: '47394', shipping: 'free', quantity: 3, date: '23/01/2025', price: 106.8, status: 'Pending', items: ['Iphone 14', 'AirPad Pro 2', 'Silicone Case'] },
        { id: '65820', shipping: 'free', quantity: 3, date: '21/01/2025', price: 194.4, status: 'Completed', items: ['Macbook Air M4', 'Magic Mouse'] },
        { id: '31264', shipping: 'free', quantity: 1, date: '15/01/2025', price: 81.2, status: 'Completed', items: ['Headphones Pro'] }
    ];

    const filteredOrders = allOrders.filter(order =>
        activeTab === 'All' ? true : order.status === activeTab
    );

    const OrderCard = ({ order }) => (
        <div className="order-premium-card" onClick={() => navigate(`/user-orders/${order.id}`)}>
            <div className="order-card-header">
                <div className="order-id-date">
                    <span className="id-label">Mã đơn:</span>
                    <span className="id-value">#{order.id}</span>
                    <span className="date-separator">|</span>
                    <span className="order-date">{order.date}</span>
                </div>
                <span className={`status-pill ${order.status.toLowerCase()}`}>
                    {order.status === 'Pending' ? 'Đang xử lý' : 'Đã hoàn thành'}
                </span>
            </div>

            <div className="order-card-body">
                <div className="items-preview">
                    {order.items.join(', ')}
                </div>
                <div className="order-main-info">
                    <div className="info-item">
                        <span className="label">Số lượng</span>
                        <span className="value">{order.quantity} sản phẩm</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Tổng tiền</span>
                        <span className="value price">{order.price.toLocaleString()}$</span>
                    </div>
                </div>
            </div>

            <div className="order-card-footer">
                <button className="details-link">Xem chi tiết đơn hàng</button>
                {order.status === 'Completed' && <button className="buy-again-btn" onClick={(e) => e.stopPropagation()}>Mua lại</button>}
            </div>
        </div>
    );

    return (
        <div className="orders-page-premium">
            <div className="orders-container">
                <nav className="breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <span className="current">Đơn hàng của tôi</span>
                </nav>

                <div className="orders-header-section">
                    <h1>Lịch sử <span className="highlight">Đơn hàng</span></h1>
                    <p>Theo dõi và quản lý các đơn hàng bạn đã mua.</p>
                </div>

                <div className="orders-tabs">
                    {['All', 'Pending', 'Completed'].map(tab => (
                        <button
                            key={tab}
                            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'All' ? 'Tất cả' : tab === 'Pending' ? 'Chờ xử lý' : 'Đã hoàn thành'}
                        </button>
                    ))}
                </div>

                <div className="orders-list">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map(order => <OrderCard key={order.id} order={order} />)
                    ) : (
                        <div className="empty-orders">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="Empty" />
                            <p>Bạn chưa có đơn hàng nào trong mục này.</p>
                            <button className="go-shopping-btn" onClick={() => navigate('/catalog')}>Tiếp tục mua sắm</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserOrders;

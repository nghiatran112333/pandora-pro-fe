import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Package, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import './OrderDetails.css';

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data for the specific order
    const order = {
        id: id || '47394',
        date: '23/01/2025',
        status: 'Pending',
        shippingMethod: 'Giao hàng tiêu chuẩn',
        paymentMethod: 'Thẻ tín dụng (**** 4242)',
        address: {
            name: 'Nguyễn Văn A',
            phone: '0901234567',
            detail: '123 Đường ABC, Phường 1, Quận 10',
            city: 'TP. Hồ Chí Minh'
        },
        items: [
            { id: 1, name: 'Iphone 14 Pro Max', price: 29990000, quantity: 1, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=100' },
            { id: 2, name: 'AirPods Pro Gen 2', price: 4990000, quantity: 1, img: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=100' },
            { id: 3, name: 'Apple Silicone Case', price: 1290000, quantity: 1, img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=100' }
        ],
        subtotal: 36270000,
        shippingFee: 0,
        total: 36270000
    };

    return (
        <div className="order-details-page">
            <div className="details-container">
                <nav className="breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <ChevronRight size={14} />
                    <Link to="/user-orders">Đơn hàng của tôi</Link>
                    <ChevronRight size={14} />
                    <span className="current">Chi tiết đơn hàng #{order.id}</span>
                </nav>

                <div className="details-header">
                    <button className="back-btn" onClick={() => navigate('/user-orders')}>
                        <ChevronLeft size={20} /> Quay lại
                    </button>
                    <div className="order-status-banner">
                        <div className="status-info">
                            <span className="label">Trạng thái đơn hàng:</span>
                            <span className={`status-text ${order.status.toLowerCase()}`}>
                                {order.status === 'Pending' ? 'Đang xử lý' : 'Đã hoàn thành'}
                            </span>
                        </div>
                        <p className="order-time">Đặt lúc: {order.date}</p>
                    </div>
                </div>

                <div className="details-grid">
                    <div className="main-details">
                        <div className="details-card items-card">
                            <div className="card-title">
                                <Package size={18} />
                                <h3>Sản phẩm đã chọn</h3>
                            </div>
                            <div className="items-list">
                                {order.items.map(item => (
                                    <div key={item.id} className="order-item">
                                        <div className="item-img">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="item-info">
                                            <h4>{item.name}</h4>
                                            <p className="item-qty">Số lượng: {item.quantity}</p>
                                        </div>
                                        <div className="item-price">
                                            {item.price.toLocaleString()}đ
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-details">
                        <div className="details-card info-card">
                            <div className="card-title">
                                <MapPin size={18} />
                                <h3>Thông tin nhận hàng</h3>
                            </div>
                            <div className="address-content">
                                <p className="name">{order.address.name}</p>
                                <p className="phone">{order.address.phone}</p>
                                <p className="address">{order.address.detail}, {order.address.city}</p>
                            </div>
                        </div>

                        <div className="details-card info-card">
                            <div className="card-title">
                                <CreditCard size={18} />
                                <h3>Thanh toán & Vận chuyển</h3>
                            </div>
                            <div className="payment-content">
                                <div className="pay-row">
                                    <span className="label">Vận chuyển:</span>
                                    <span className="val">{order.shippingMethod}</span>
                                </div>
                                <div className="pay-row">
                                    <span className="label">Thanh toán:</span>
                                    <span className="val">{order.paymentMethod}</span>
                                </div>
                            </div>
                        </div>

                        <div className="details-card summary-card">
                            <div className="summary-row">
                                <span>Tạm tính</span>
                                <span>{order.subtotal.toLocaleString()}đ</span>
                            </div>
                            <div className="summary-row">
                                <span>Phí vận chuyển</span>
                                <span className="free">Miễn phí</span>
                            </div>
                            <div className="total-row">
                                <span>Tổng cộng</span>
                                <span className="total-price">{order.total.toLocaleString()}đ</span>
                            </div>
                            <button className="re-order-btn">Đặt mua lại đơn này</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

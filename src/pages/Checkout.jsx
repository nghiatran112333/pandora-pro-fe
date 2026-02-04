import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
    const { cart: cartItems, showToast } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [saveInfo, setSaveInfo] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        address: '',
        apartment: '',
        city: '',
        phone: '',
        email: '',
    });

    // Demo order items
    const orderItems = cartItems.length > 0 ? cartItems : [
        { id: 1, name: 'iphone 17  Bạc Titan 256 GB', price: 22190000, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=100' },
        { id: 2, name: 'Tivi LCD Monitor', price: 19950000, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100' },
    ];

    const subtotal = orderItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const shipping = 0;
    const discount = 1000000;
    const total = subtotal - discount;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.address || !formData.city || !formData.phone || !formData.email) {
            showToast('Vui lòng điền đầy đủ các thông tin bắt buộc!', 'error');
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showToast('Địa chỉ Email không hợp lệ!', 'error');
            return;
        }

        // Phone Validation (Simple check)
        if (formData.phone.length < 10) {
            showToast('Số điện thoại không hợp lệ!', 'error');
            return;
        }

        navigate('/checkout-success');
    };

    return (
        <div className="checkout-page-figma">
            <div className="checkout-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <span className="crumb-item">Tài khoản</span>
                    <span>/</span>
                    <span className="crumb-item">Tài khoản của tôi</span>
                    <span>/</span>
                    <span className="crumb-item">Product</span>
                    <span>/</span>
                    <span className="crumb-item">View Cart</span>
                    <span>/</span>
                    <span className="crumb-item current">CheckOut</span>
                </nav>

                <div className="checkout-content">
                    {/* Left - Billing Form */}
                    <div className="billing-form">
                        <h2>Thông tin thanh toán</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tên công ty</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ (bắt buộc)*</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Căn hộ, tầng (không bắt buộc)</label>
                                <input
                                    type="text"
                                    name="apartment"
                                    value={formData.apartment}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Thành phố/ Quận, huyện*</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại*</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <label className="checkbox-item">
                                <input
                                    type="checkbox"
                                    checked={saveInfo}
                                    onChange={(e) => setSaveInfo(e.target.checked)}
                                />
                                <span>Lưu thông tin này để thanh toán nhanh hơn vào lần sau</span>
                            </label>
                        </form>
                    </div>

                    {/* Right - Order Summary */}
                    <div className="order-summary-checkout">
                        {/* Order Items */}
                        <div className="order-items">
                            {orderItems.map((item) => (
                                <div key={item.id} className="order-item">
                                    <div className="item-info">
                                        <img src={item.img} alt={item.name} />
                                        <span>{item.name}</span>
                                    </div>
                                    <span className="item-price">{item.price.toLocaleString()}đ</span>
                                </div>
                            ))}
                        </div>

                        {/* Summary Lines */}
                        <div className="summary-lines">
                            <div className="summary-line">
                                <span>Tổng tiền hàng</span>
                                <span>{subtotal.toLocaleString()}đ</span>
                            </div>
                            <div className="summary-line">
                                <span>Phí Vận Chuyển</span>
                                <span>{shipping === 0 ? 'Free' : `${shipping.toLocaleString()}đ`}</span>
                            </div>
                            <div className="summary-line">
                                <span>Khuyến mãi</span>
                                <span>-{discount.toLocaleString()}đ</span>
                            </div>
                            <div className="summary-line total">
                                <span>Total:</span>
                                <span>{total.toLocaleString()}đ</span>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="payment-methods">
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    checked={paymentMethod === 'bank'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Bank</span>
                                <div className="payment-icons">
                                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="MoMo" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="VISA" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                                </div>
                            </label>
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod === 'cod'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Thanh toán khi nhận hàng</span>
                            </label>
                        </div>

                        {/* Action Buttons */}
                        <div className="checkout-actions">
                            <button type="button" className="action-btn-clean back" onClick={() => navigate('/cart')}>Quay lại</button>
                            <button type="submit" className="action-btn-clean submit" onClick={handleSubmit}>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

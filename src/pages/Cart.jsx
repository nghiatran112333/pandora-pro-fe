import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const { cart: cartItems, updateItemQuantity, removeFromCart } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(1000000);
    const [selectedItems, setSelectedItems] = useState(cartItems.map(item => item.id));

    // Demo cart items if empty
    const demoItems = cartItems.length > 0 ? cartItems : [
        { id: 1, name: 'Tivi LCD Monitor', price: 19950000, quantity: 1, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100' },
        { id: 2, name: 'iphone 17  Bạc Titan 256 GB', price: 22199000, quantity: 1, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=100' },
    ];

    const items = cartItems.length > 0 ? cartItems : demoItems;
    const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const shipping = 0; // Free shipping
    const total = subtotal - appliedDiscount;

    const handleSelectItem = (itemId) => {
        setSelectedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const handleApplyCoupon = () => {
        if (couponCode.toLowerCase() === 'save10') {
            setAppliedDiscount(1000000);
        }
    };

    return (
        <div className="cart-page-figma">
            <div className="cart-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <span className="current">Giỏ hàng</span>
                </nav>

                {/* Cart Table */}
                <div className="cart-table">
                    <div className="cart-header">
                        <div className="col-product">Sản phẩm</div>
                        <div className="col-price">Giá</div>
                        <div className="col-quantity">Số lượng</div>
                        <div className="col-subtotal">Thành tiền</div>
                        <div className="col-action"></div>
                    </div>

                    {items.map((item) => (
                        <div key={item.id} className="cart-row">
                            <div className="col-product">
                                <label className="checkbox-wrapper">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSelectItem(item.id)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <img src={item.img} alt={item.name} className="product-thumb" />
                                <span className="product-name">{item.name}</span>
                            </div>
                            <div className="col-price">{item.price.toLocaleString()}đ</div>
                            <div className="col-quantity">
                                <div className="quantity-input">
                                    <input
                                        type="number"
                                        value={item.quantity || 1}
                                        min="1"
                                        onChange={(e) => updateItemQuantity && updateItemQuantity(item.id, parseInt(e.target.value))}
                                    />
                                </div>
                            </div>
                            <div className="col-subtotal">{(item.price * (item.quantity || 1)).toLocaleString()}đ</div>
                            <div className="col-action">
                                <button className="delete-btn" onClick={() => removeFromCart && removeFromCart(item.id)}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coupon Section */}
                <div className="coupon-section">
                    <input
                        type="text"
                        placeholder="Mã Khuyến mãi"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button className="apply-btn" onClick={handleApplyCoupon}>Áp dụng</button>
                </div>

                {/* Order Summary */}
                <div className="order-summary">
                    <h3>Tổng cộng</h3>
                    <div className="summary-row">
                        <span>Tổng tiền hàng</span>
                        <span>{subtotal.toLocaleString()}.đ</span>
                    </div>
                    <div className="summary-row">
                        <span>Phí Vận Chuyển</span>
                        <span>{shipping === 0 ? 'Free' : `${shipping.toLocaleString()}đ`}</span>
                    </div>
                    <div className="summary-row">
                        <span>Khuyến mãi</span>
                        <span>-{appliedDiscount.toLocaleString()}đ</span>
                    </div>
                    <div className="summary-row total">
                        <span>Tổng thanh toán</span>
                        <span>{total.toLocaleString()}.đ</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="cart-actions">
                    <button className="back-btn" onClick={() => navigate('/catalog')}>Quay lại</button>
                    <button className="checkout-btn" onClick={() => navigate('/checkout')}>Tiến hành thanh toán</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

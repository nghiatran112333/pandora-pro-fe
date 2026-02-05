import React, { useState, useEffect } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Truck, ShieldCheck, ShoppingBag, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedStorage, setSelectedStorage] = useState(1);
    const [quantity, setQuantity] = useState(1);



    // Initial Product Data
    const product = {
        id: 101,
        name: 'iPhone 15 Pro Max',
        subtitle: 'Titan Tự Nhiên',
        price: 34990000,
        oldPrice: 38990000,
        rating: 4.9,
        reviews: 1250,
        inStock: true,
        description: 'iPhone 15 Pro Max. Thiết kế vỏ titan bền chắc và nhẹ chuẩn hàng không vũ trụ. Chip A17 Pro mang lại hiệu năng đồ họa đột phá. Hệ thống camera Pro linh hoạt nhất, nay có thêm camera Telephoto 5x.',
        features: [
            'Vỏ titan chuẩn hàng không vũ trụ',
            'Chip A17 Pro - Kỷ nguyên mới của gaming',
            'Camera Telephoto 5x zoom quang học',
            'Nút Action Button hoàn toàn mới',
            'Cổng USB-C tốc độ chuyển dữ liệu 10Gb/s'
        ],
        images: [
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&q=80', // Titan Grey
            'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=1200&q=80', // Front
            'https://images.unsplash.com/photo-1695048132958-693ceb161c6c?w=1200&q=80', // Back Detail
            'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=1200&q=80', // In Hand
        ]
    };

    const colors = [
        { code: '#8c8c8b', name: 'Titan Tự Nhiên', imageIndex: 0 },
        { code: '#2e3036', name: 'Titan Đen', imageIndex: 1 },
        { code: '#f1f2f2', name: 'Titan Trắng', imageIndex: 0 },
        { code: '#1f2e46', name: 'Titan Xanh', imageIndex: 0 }
    ];

    const storages = [
        { size: '256GB', price: 34990000 },
        { size: '512GB', price: 40990000 },
        { size: '1TB', price: 46990000 }
    ];

    // Handle Image Selection
    const handleImageChange = (index) => {
        setSelectedImage(index);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    // Current Price Calculation
    const currentPrice = storages[selectedStorage].price;

    return (
        <div className="product-detail-page-premium">
            <div className="pd-main-wrapper">
                <div className="pd-grid">
                    {/* Left: Gallery */}
                    <div className="pd-gallery-section">
                        <div className="pd-gallery-sticky">
                            <div className="pd-main-image-container">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="pd-main-image"
                                />
                                <button className="gallery-control prev" onClick={prevImage}>
                                    <ChevronLeft size={24} />
                                </button>
                                <button className="gallery-control next" onClick={nextImage}>
                                    <ChevronRight size={24} />
                                </button>
                                <div className="gallery-dots">
                                    {product.images.map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`dot ${selectedImage === idx ? 'active' : ''}`}
                                            onClick={() => handleImageChange(idx)}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                            <div className="pd-thumbnails">
                                {product.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`pd-thumb ${selectedImage === idx ? 'active' : ''}`}
                                        onClick={() => handleImageChange(idx)}
                                    >
                                        <img src={img} alt={`View ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="pd-info-section">
                        <div className="pd-header">
                            <span className="pd-subtitle">Mới</span>
                            <h1>{product.name}</h1>
                            <div className="pd-rating">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#FFB800" : "none"} stroke="#FFB800" />
                                    ))}
                                </div>
                                <span className="rating-text">{product.rating} ({product.reviews} đánh giá)</span>
                            </div>
                        </div>

                        <div className="pd-price-box">
                            <div className="price-row">
                                <span className="current-price">{currentPrice.toLocaleString()}₫</span>
                                <span className="old-price">{product.oldPrice.toLocaleString()}₫</span>
                                <span className="discount-tag">-{Math.round((1 - currentPrice / product.oldPrice) * 100)}%</span>
                            </div>
                        </div>

                        <div className="pd-divider"></div>

                        {/* Model Selection */}
                        <div className="pd-option-group">
                            <label>Dung lượng</label>
                            <div className="storage-options">
                                {storages.map((storage, idx) => (
                                    <div
                                        key={idx}
                                        className={`storage-card ${selectedStorage === idx ? 'active' : ''}`}
                                        onClick={() => setSelectedStorage(idx)}
                                    >
                                        <span className="storage-size">{storage.size}</span>
                                        <span className="price-inc">+{(storage.price - storages[0].price).toLocaleString()}₫</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pd-option-group">
                            <label>Màu sắc: <span className="selected-val">{colors[selectedColor].name}</span></label>
                            <div className="color-options-row">
                                {colors.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className={`color-circle-lg ${selectedColor === idx ? 'active' : ''}`}
                                        style={{ backgroundColor: color.code }}
                                        onClick={() => setSelectedColor(idx)}
                                        title={color.name}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="pd-actions-premium">
                            <div className="pd-quantity">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button
                                className="btn-add-cart-premium"
                                onClick={() => addToCart({ ...product, price: currentPrice, quantity, image: product.images[0] })}
                            >
                                <ShoppingBag size={20} />
                                Thêm vào giỏ
                            </button>
                            <button className="btn-wishlist">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Feature Highlights */}
                        <div className="pd-features-box">
                            <h3>Đặc điểm nổi bật</h3>
                            <ul>
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Trust Badges */}
                        <div className="pd-trust-badges">
                            <div className="trust-item">
                                <Truck size={24} />
                                <div>
                                    <strong>Freeship toàn quốc</strong>
                                    <p>Cho đơn hàng từ 1 triệu</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <ShieldCheck size={24} />
                                <div>
                                    <strong>Bảo hành chính hãng</strong>
                                    <p>12 tháng Apple VN</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <Share2 size={24} />
                                <div>
                                    <strong>Đổi trả dễ dàng</strong>
                                    <p>trong 30 ngày đầu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <section className="pd-detail-content">
                    <div className="content-container">
                        <h2>Chi tiết sản phẩm</h2>
                        <div className="detail-text">
                            <p>{product.description}</p>
                            <p>iPhone 15 Pro Max là chiếc iPhone đầu tiên có thiết kế từ titan chuẩn hàng không vũ trụ, cùng loại hợp kim sử dụng cho tàu vũ trụ thực hiện các sứ mệnh tới Sao Hỏa. Titan là một trong những kim loại có tỷ số độ bền trên trọng lượng cao nhất, đưa những chiếc máy này trở thành các mẫu Pro nhẹ nhất từng có của Apple. Bạn sẽ nhận thấy sự khác biệt ngay khi cầm máy lên.</p>
                            <div className="detail-image-grid">
                                <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800" alt="Detail 1" />
                                <img src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800" alt="Detail 2" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;

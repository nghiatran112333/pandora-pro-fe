import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Truck, RotateCcw, ShoppingCart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedImage, setSelectedImage] = useState(1); // Default to the blue one in the screenshot
    const [selectedColor, setSelectedColor] = useState(0); // Default first color selected
    const [quantity, setQuantity] = useState(2);

    const product = {
        id: 101,
        name: 'Iphone 14 256 GB',
        price: 13590000,
        rating: 4,
        reviews: 150,
        inStock: true,
        description: 'iPhone 14 sở hữu thiết kế sang trọng cùng màn hình 6.1 inch Super Retina XDR hiện thị sắc nét. Máy được trang bị chip A15 Bionic cho hiệu năng mạnh mẽ, hoạt động mượt mà. Camera kép 12MP chụp ảnh rõ nét, hỗ trợ quay video chất lượng cao. Ngoài ra, iPhone 14 có pin ổn định và nhiều tính năng an toàn hiện đại.',
        images: [
            'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600', // Blue front
            'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600', // Blue large
            'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600', // Blue camera detail
            'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600', // Colors
        ]
    };

    const colors = [
        { code: '#A0B4C8', name: 'Blue' }, // Light Blue
        { code: '#db4444', name: 'Red' },
        { code: '#000000', name: 'Black' },
        { code: '#E6C7E6', name: 'Purple' }, // Light Purple
        { code: '#FFD700', name: 'Yellow' }  // Yellow
    ];

    const similarProducts = [
        { id: 102, name: 'Iphone 14', price: 11020000, oldPrice: 15020000, rating: 5, reviews: 65, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=300' },
        { id: 103, name: 'Tai nghe AirPad Pro 2', price: 4990000, oldPrice: 5530000, rating: 4, reviews: 33, img: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=300' },
        { id: 104, name: 'RGB liquid CPU Cooler', price: 2990000, oldPrice: 3449000, rating: 5, reviews: 65, img: 'https://images.unsplash.com/photo-1588506183812-96da202a0b7a?w=300' },
        { id: 105, name: 'Macbook Air 13 M4 2025', price: 23990000, rating: 5, reviews: 85, img: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=300' },
    ];

    return (
        <div className="product-detail-page-figma">
            <div className="pd-container">
                {/* Breadcrumb - Matches Screenshot */}
                <nav className="breadcrumb">
                    <span className="breadcrumb-item">Tài khoản</span>
                    <span className="separator">/</span>
                    <span className="breadcrumb-item">Iphone</span>
                    <span className="separator">/</span>
                    <span className="breadcrumb-item current">Iphone 14 256 GB</span>
                </nav>

                <div className="pd-content">
                    {/* Image Gallery */}
                    <div className="product-gallery">
                        <div className="gallery-thumbnails">
                            {product.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(idx)}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="gallery-main">
                            <button className="gallery-nav prev" onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}>
                                <ChevronLeft size={24} />
                            </button>
                            <img src={product.images[selectedImage]} alt="Main Product" />
                            <button className="gallery-nav next" onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}>
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info-figma">
                        <div className="pd-header">
                            <h1>{product.name}</h1>
                            <button className="heart-btn-outline"><Heart size={20} /></button>
                        </div>

                        <div className="pd-rating-row">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < product.rating ? "#FFAD33" : "#e4e5e9"} color={i < product.rating ? "#FFAD33" : "#e4e5e9"} />
                                ))}
                            </div>
                            <span className="review-count">({product.reviews} đánh giá)</span>
                            <span className="divider">|</span>
                            <span className="stock-status">Còn hàng</span>
                        </div>

                        <div className="pd-price">
                            {product.price.toLocaleString()}đ
                        </div>

                        <p className="pd-description">
                            {product.description}
                        </p>

                        <div className="pd-colors">
                            <span className="color-label">Màu sắc</span>
                            <div className="color-options">
                                {colors.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className={`color-circle ${selectedColor === idx ? 'active' : ''}`}
                                        style={{ backgroundColor: color.code }}
                                        onClick={() => setSelectedColor(idx)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="pd-actions">
                            <div className="quantity-control-figma">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                                <span>{quantity}</span>
                                <button className="plus" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>

                            <button className="action-btn buy-now">Mua ngay</button>
                            <button className="action-btn add-cart" onClick={() => addToCart({ ...product, quantity })}>Thêm vào giỏ</button>
                        </div>

                        <div className="pd-services">
                            <div className="service-box">
                                <Truck size={24} />
                                <div className="service-text">
                                    <h4>Giao hàng miễn phí</h4>
                                    <p>Giao hàng miễn phí cho mọi đơn hàng trên 500.000đ</p>
                                </div>
                            </div>
                            <div className="service-box">
                                <RotateCcw size={24} />
                                <div className="service-text">
                                    <h4>Đảm bảo hoàn tiền</h4>
                                    <p>Hoàn tiền trong vòng 30 ngày</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                <div className="similar-products-section">
                    <div className="section-header-red">
                        <span className="red-block"></span>
                        <h2>Sản phẩm tương tự</h2>
                    </div>

                    <div className="product-grid-figma">
                        {similarProducts.map((item) => (
                            <div key={item.id} className="product-card-figma" onClick={() => navigate('/product-detail')}>
                                <div className="p-img-box-figma">
                                    <button className="heart-btn"><Heart size={18} /></button>
                                    <button className="cart-btn"><ShoppingCart size={18} /></button>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="p-info-figma">
                                    <h3>{item.name}</h3>
                                    <div className="p-price-figma">
                                        <span className="current">{item.price.toLocaleString()}đ</span>
                                        {item.oldPrice && <span className="old">{item.oldPrice.toLocaleString()}đ</span>}
                                    </div>
                                    <div className="p-rating-figma">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} size={14} fill={idx < item.rating ? "#FFAD33" : "none"} color="#FFAD33" />
                                        ))}
                                        <span className="reviews">({item.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

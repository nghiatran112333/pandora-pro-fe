import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const wishItems = [
        { id: 101, name: 'Iphone 14', price: 11020000, oldPrice: 15020000, rating: 5, reviews: 65, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=300' },
        { id: 102, name: 'Tai nghe AirPad Pro 2', price: 4990000, oldPrice: 5530000, rating: 4, reviews: 33, img: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=300' },
        { id: 103, name: 'RGB Liquid CPU Cooler', price: 2990000, oldPrice: 3440000, rating: 5, reviews: 45, img: 'https://images.unsplash.com/photo-1588506183812-96da202a0b7a?w=300' },
        { id: 104, name: 'Macbook Air 13 M4 2025', price: 23990000, oldPrice: 26990000, rating: 5, reviews: 85, img: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=300' },
    ];

    const forYouItems = [
        { id: 105, name: 'Iphone 14', price: 11020000, oldPrice: 15020000, rating: 5, reviews: 65, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=300' },
        { id: 106, name: 'Tai nghe AirPad Pro 2', price: 4990000, oldPrice: 5530000, rating: 4, reviews: 33, img: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=300' },
        { id: 107, name: 'RGB Liquid CPU Cooler', price: 2990000, oldPrice: 3440000, rating: 5, reviews: 45, img: 'https://images.unsplash.com/photo-1588506183812-96da202a0b7a?w=300' },
        { id: 108, name: 'Macbook Air 13 M4 2025', price: 23990000, rating: 5, reviews: 85, img: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=300' },
    ];

    const ProductCard = ({ item, showOldPrice = true }) => (
        <div className="product-card-figma" onClick={() => navigate('/product-detail')}>
            <div className="p-img-box-figma">
                <button className="heart-btn"><Heart size={18} /></button>
                <button className="cart-btn" onClick={(e) => { e.stopPropagation(); addToCart(item); }}><ShoppingCart size={18} /></button>
                <img src={item.img} alt={item.name} />
            </div>
            <div className="p-info-figma">
                <h3>{item.name}</h3>
                <div className="p-price-figma">
                    <span className="current">{item.price.toLocaleString()}đ</span>
                    {showOldPrice && item.oldPrice && <span className="old">{item.oldPrice.toLocaleString()}đ</span>}
                </div>
                <div className="p-rating-figma">
                    {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={14} fill={idx < item.rating ? "#FFAD33" : "none"} color="#FFAD33" />
                    ))}
                    <span className="reviews">({item.reviews})</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="wishlist-page-figma">
            <div className="wishlist-container">
                {/* Yêu thích Section */}
                <section className="wishlist-section">
                    <div className="wishlist-header">
                        <h2>Yêu thích ({wishItems.length})</h2>
                        <button className="view-all-btn-figma" onClick={() => navigate('/catalog')}>Xem tất cả</button>
                    </div>
                    <div className="product-grid-figma">
                        {wishItems.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>

                {/* Dành cho bạn Section */}
                <section className="for-you-section">
                    <div className="wishlist-header">
                        <h2>Dành cho bạn</h2>
                        <button className="view-all-btn-outline" onClick={() => navigate('/catalog')}>Xem tất cả</button>
                    </div>
                    <div className="product-grid-figma">
                        {forYouItems.map((item) => (
                            <ProductCard key={item.id} item={item} showOldPrice={!!item.oldPrice} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Wishlist;

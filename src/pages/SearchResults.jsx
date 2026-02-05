import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        setQuery(q);

        setLoading(true);
        // Simulate search processing
        setTimeout(() => {
            const results = products.filter(p =>
                p.name.toLowerCase().includes(q.toLowerCase()) ||
                p.category.toLowerCase().includes(q.toLowerCase())
            );
            setFilteredProducts(results);
            setLoading(false);
        }, 600);
    }, [location.search]);

    return (
        <div className="search-results-page">
            <div className="search-container-premium">
                {/* Header Section */}
                <div className="search-header-p">
                    <button className="back-btn-p" onClick={() => navigate(-1)}>
                        <ArrowLeft size={20} /> Quay lại
                    </button>
                    <h1>Kết quả tìm kiếm cho "{query}"</h1>
                    <p className="results-count">
                        {loading ? 'Đang tìm kiếm...' : `Tìm thấy ${filteredProducts.length} sản phẩm`}
                    </p>
                </div>

                {loading ? (
                    <div className="search-loading-state">
                        <div className="spinner-p"></div>
                        <p>Đang tải dữ liệu phẩm phù hợp...</p>
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <div className="search-grid-p">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="search-card-p">
                                <div className="card-image-p" onClick={() => navigate(`/product-detail`)}>
                                    <img src={product.img} alt={product.name} />
                                    <div className="card-actions-p">
                                        <button className="action-circle-p"><Heart size={18} /></button>
                                        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="action-circle-p">
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                    {product.tag && <span className="p-tag-p">{product.tag}</span>}
                                </div>
                                <div className="card-info-p">
                                    <span className="p-category-p">{product.category}</span>
                                    <h3 onClick={() => navigate(`/product-detail`)}>{product.name}</h3>
                                    <div className="p-rating-p">
                                        <Star size={14} fill="#FFB800" stroke="#FFB800" />
                                        <span>4.5</span>
                                        <span className="p-reviews-p">(120)</span>
                                    </div>
                                    <div className="p-price-row-p">
                                        <span className="p-price-p">{product.price.toLocaleString()}đ</span>
                                        <button className="btn-buy-p" onClick={() => navigate(`/product-detail`)}>
                                            Chi tiết
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results-state">
                        <div className="no-res-icon">🔍</div>
                        <h3>Hưm... Không có kết quả nào.</h3>
                        <p>Xin lỗi, chúng tôi không tìm thấy sản phẩm nào phù hợp với "{query}".</p>
                        <p>Thử tìm kiếm với từ khóa khác hoặc quay lại trang chủ.</p>
                        <Link to="/catalog" className="btn-primary-premium">Xem tất cả sản phẩm</Link>
                    </div>
                )}

                {/* Suggested Section if empty */}
                {filteredProducts.length === 0 && !loading && (
                    <div className="suggested-search-box">
                        <h4>Gợi ý cho bạn:</h4>
                        <div className="suggest-tags">
                            <Link to="/search?q=iPhone">iPhone 15</Link>
                            <Link to="/search?q=MacBook">MacBook M3</Link>
                            <Link to="/search?q=iPad">iPad Pro</Link>
                            <Link to="/search?q=AirPods">AirPods Pro</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;

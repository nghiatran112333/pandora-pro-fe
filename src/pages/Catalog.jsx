import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Search, SlidersHorizontal, X } from 'lucide-react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import PublicFooter from '../components/PublicFooter';
import { products } from '../data/products';
import './Catalog.css';

const Catalog = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { showToast } = useToast();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        category: 'All',
        maxPrice: 30000000,
        minRating: 0
    });

    const categoriesList = ['All', 'Iphone', 'Laptop', 'Headphones', 'Speakers', 'Cooling'];

    // Mock API Loading Simulation
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800); // 0.8s fake delay
        return () => clearTimeout(timer);
    }, [query]);

    // Filter and Sort Logic
    const processedProducts = products
        .filter(p => {
            const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
            const matchesCategory = filters.category === 'All' || p.category === filters.category;
            const matchesPrice = p.price <= filters.maxPrice;
            const matchesRating = p.rating >= filters.minRating;
            return matchesQuery && matchesCategory && matchesPrice && matchesRating;
        })
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0; // default
        });

    // Count active filters
    const activeFilterCount = [
        filters.category !== 'All',
        filters.maxPrice < 30000000,
        filters.minRating > 0
    ].filter(Boolean).length;


    return (
        <div className="catalog-page-premium">
            <div className="catalog-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                    <Link to="/catalog">Sản phẩm</Link>
                    {query && (
                        <>
                            <span>/</span>
                            <span className="current">Tìm kiếm: "{query}"</span>
                        </>
                    )}
                </nav>

                <div className="catalog-main-layout">
                    {/* Filter Overlay */}
                    {showFilters && <div className="filter-overlay" onClick={() => setShowFilters(false)}></div>}

                    {/* Sidebar Filters - Collapsible */}
                    <aside className={`catalog-sidebar ${showFilters ? 'active' : ''}`}>
                        <div className="sidebar-header">
                            <h3>Bộ lọc</h3>
                            <div className="sidebar-actions">
                                <button
                                    className="clear-all-btn"
                                    onClick={() => {
                                        setFilters({ category: 'All', maxPrice: 30000000, minRating: 0 });
                                        setSortBy('default');
                                        showToast('Đã đặt lại bộ lọc', 'info');
                                    }}
                                >
                                    Xóa tất cả
                                </button>
                                <button className="close-filter-btn" onClick={() => setShowFilters(false)}>
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="filter-group">
                            <h4>Danh mục</h4>
                            <div className="category-list">
                                {categoriesList.map(cat => (
                                    <div
                                        key={cat}
                                        className={`category-item ${filters.category === cat ? 'active' : ''}`}
                                        onClick={() => setFilters({ ...filters, category: cat })}
                                    >
                                        <span className="cat-name">{cat === 'All' ? 'Tất cả sản phẩm' : cat}</span>
                                        {filters.category === cat && <span className="cat-indicator"></span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <h4>Khoảng giá</h4>
                            <div className="price-range-box">
                                <div className="price-labels">
                                    <span>0đ</span>
                                    <span>{filters.maxPrice.toLocaleString()}đ</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="30000000"
                                    step="1000000"
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
                                    className="premium-price-slider"
                                />
                                <div className="price-hint">Giá tối đa: {filters.maxPrice.toLocaleString()}đ</div>
                            </div>
                        </div>

                        <div className="filter-group">
                            <h4>Đánh giá</h4>
                            <div className="rating-vertical-list">
                                {[5, 4, 3, 2, 1].map(stars => (
                                    <div
                                        key={stars}
                                        className={`rating-row ${filters.minRating === stars ? 'active' : ''}`}
                                        onClick={() => setFilters({ ...filters, minRating: filters.minRating === stars ? 0 : stars })}
                                    >
                                        <div className="stars-group">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    fill={i < stars ? "#FFAD33" : "none"}
                                                    color={i < stars ? "#FFAD33" : "#e2e8f0"}
                                                />
                                            ))}
                                        </div>
                                        <span className="rating-text">
                                            {stars === 5 ? "5 sao" : `Từ ${stars} sao`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="apply-filter-btn" onClick={() => setShowFilters(false)}>
                            Áp dụng bộ lọc
                        </button>
                    </aside>

                    <div className="catalog-content">
                        {/* Sorting Header */}
                        <div className="catalog-controls">
                            <div className="controls-left">
                                <button
                                    className={`filter-toggle-btn ${activeFilterCount > 0 ? 'has-filters' : ''}`}
                                    onClick={() => setShowFilters(true)}
                                >
                                    <SlidersHorizontal size={18} />
                                    <span>Bộ lọc</span>
                                    {activeFilterCount > 0 && <span className="filter-count">{activeFilterCount}</span>}
                                </button>
                                <span className="results-count">Hiển thị <strong>{processedProducts.length}</strong> sản phẩm</span>
                            </div>
                            <div className="sort-box">
                                <span>Sắp xếp:</span>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="default">Mặc định</option>
                                    <option value="price-low">Giá: Thấp đến Cao</option>
                                    <option value="price-high">Giá: Cao đến Thấp</option>
                                    <option value="rating">Đánh giá cao nhất</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Grid with Loading Logic */}
                        {loading ? (
                            <div className="product-grid-figma">
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <ProductSkeleton key={n} />
                                ))}
                            </div>
                        ) : processedProducts.length > 0 ? (
                            <div className="product-grid-figma">
                                {processedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results" style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
                                <Search size={48} style={{ marginBottom: '16px', opacity: 0.2 }} />
                                <p>Không tìm thấy sản phẩm nào phù hợp</p>
                                <button
                                    className="reset-btn"
                                    onClick={() => {
                                        setFilters({ category: 'All', maxPrice: 30000000, minRating: 0 });
                                        setSortBy('default');
                                        showToast('Đã đặt lại bộ lọc', 'info');
                                    }}
                                >
                                    Đặt lại bộ lọc
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {!loading && processedProducts.length > 0 && (
                            <div className="pagination">
                                <button className="page-btn nav"><ChevronLeft size={16} /></button>
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn nav"><ChevronRight size={16} /></button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;

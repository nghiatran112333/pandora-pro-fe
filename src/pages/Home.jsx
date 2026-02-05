import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronRight, ChevronLeft, Star, Truck, Headphones as HeadphonesIcon, ShieldCheck, Sparkles, Zap, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import BestSellers from '../components/BestSellers';
import { products } from '../data/products';
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Banner slides data
    const bannerSlides = [
        {
            id: 1,
            subtitle: 'Bộ sưu tập mới nhất',
            title: 'iPhone 15 Pro Max',
            highlight: 'Giảm 20%',
            description: 'Titan. Siêu nhẹ. Siêu bền.',
            image: 'https://pngimg.com/d/iphone_14_PNG23.png',
            bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            accent: '#a855f7'
        },
        {
            id: 2,
            subtitle: 'Siêu phẩm công nghệ',
            title: 'MacBook Pro M3',
            highlight: 'Mới ra mắt',
            description: 'Chip M3 Pro & M3 Max.',
            image: 'https://pngimg.com/d/macbook_PNG6.png',
            bgGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            accent: '#22c55e'
        },
        {
            id: 3,
            subtitle: 'Trải nghiệm âm thanh',
            title: 'AirPods Pro 2',
            highlight: 'Best Seller',
            description: 'Chống ồn thông minh.',
            image: 'https://pngimg.com/d/airpods_PNG24.png',
            bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            accent: '#ec4899'
        }
    ];

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [bannerSlides.length]);

    // Countdown State
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    // Countdown Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const categories = [
        { name: 'Iphone', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=200' },
        { name: 'Mini Speakers', img: 'https://images.unsplash.com/photo-1608156639585-34052e81bd9a?w=200' },
        { name: 'Ipad', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200' },
        { name: 'Headphones', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
        { name: 'Laptop', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200' },
    ];

    const currentBanner = bannerSlides[currentSlide];

    return (
        <div className="home-page-figma">
            {/* Hero Section - Exactly like Figma */}
            <main className="home-container">
                {/* Premium Hero Banner */}
                <section className="hero-banner-premium" style={{ background: currentBanner.bgGradient }}>
                    {/* Animated Background Elements */}
                    <div className="hero-bg-elements">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="floating-orb"
                                style={{
                                    width: 100 + i * 50,
                                    height: 100 + i * 50,
                                    left: `${10 + i * 15}% `,
                                    top: `${20 + (i % 3) * 20}% `,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, 10, 0],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5
                                }}
                            />
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="hero-premium-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                className="hero-text-premium"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className="hero-badge"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Sparkles size={16} />
                                    <span>{currentBanner.subtitle}</span>
                                </motion.div>

                                <motion.h1
                                    className="hero-title-premium"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {currentBanner.title}
                                </motion.h1>

                                <motion.div
                                    className="hero-highlight"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 }}
                                    style={{ background: currentBanner.accent }}
                                >
                                    <Zap size={18} />
                                    {currentBanner.highlight}
                                </motion.div>

                                <motion.p
                                    className="hero-description"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {currentBanner.description}
                                </motion.p>

                                <motion.div
                                    className="hero-actions"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.button
                                        className="hero-btn-primary"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/catalog')}
                                    >
                                        Mua Ngay
                                        <ChevronRight size={20} />
                                    </motion.button>
                                    <motion.button
                                        className="hero-btn-secondary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/catalog')}
                                    >
                                        Xem Chi Tiết
                                    </motion.button>
                                </motion.div>

                                {/* Stats */}
                                <motion.div
                                    className="hero-stats"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <div className="stat-item">
                                        <span className="stat-value">50K+</span>
                                        <span className="stat-label">Khách hàng</span>
                                    </div>
                                    <div className="stat-divider" />
                                    <div className="stat-item">
                                        <span className="stat-value">4.9</span>
                                        <span className="stat-label">Đánh giá</span>
                                    </div>
                                    <div className="stat-divider" />
                                    <div className="stat-item">
                                        <span className="stat-value">100%</span>
                                        <span className="stat-label">Chính hãng</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Product Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide + '-image'}
                                className="hero-image-premium"
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="image-glow" style={{ background: currentBanner.accent }} />
                                <motion.img
                                    src={currentBanner.image}
                                    alt={currentBanner.title}
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Slide Navigation */}
                    <div className="hero-navigation">
                        <div className="slide-dots">
                            {bannerSlides.map((_, index) => (
                                <motion.button
                                    key={index}
                                    className={`slide - dot ${index === currentSlide ? 'active' : ''} `}
                                    onClick={() => setCurrentSlide(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                        <div className="slide-arrows">
                            <motion.button
                                className="slide-arrow"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
                            >
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                className="slide-arrow"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)}
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>
                    </div>
                </section>

                {/* Danh mục phổ biến */}
                <ScrollReveal delay={0.2}>
                    <section className="popular-categories section">
                        <SectionHeader title="Danh mục phổ biến" showArrows />
                        <div className="cat-grid">
                            {categories.map((cat, i) => (
                                <div key={i} className="cat-item" onClick={() => navigate('/catalog')}>
                                    <div className="cat-icon">
                                        <img src={cat.img} alt={`Danh mục ${cat.name} `} loading="lazy" />
                                    </div>
                                    <span>{cat.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                {/* Video Giới Thiệu - Premium Design */}
                <ScrollReveal delay={0.1}>
                    <section className="intro-video-section-premium">
                        <div className="video-content-wrapper">
                            <div className="video-text-side">
                                <div className="video-label">VIDEO GIỚI THIỆU</div>
                                <h2>Khám phá<br />công nghệ đỉnh cao</h2>
                                <p>Trải nghiệm các sản phẩm Apple chính hãng với chất lượng tốt nhất và dịch vụ hậu mãi hoàn hảo.</p>
                                <div className="video-features">
                                    <div className="video-feature">
                                        <span className="feature-dot"></span>
                                        Sản phẩm chính hãng 100%
                                    </div>
                                    <div className="video-feature">
                                        <span className="feature-dot"></span>
                                        Bảo hành 12 tháng
                                    </div>
                                    <div className="video-feature">
                                        <span className="feature-dot"></span>
                                        Đổi trả trong 30 ngày
                                    </div>
                                </div>
                                <button className="video-cta-btn" onClick={() => navigate('/catalog')}>
                                    Xem sản phẩm <ChevronRight size={18} />
                                </button>
                            </div>
                            <div className="video-player-side">
                                <div className="video-thumbnail-container">
                                    <img
                                        src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80"
                                        alt="Apple Products"
                                        className="video-thumbnail-img"
                                    />
                                    <div className="video-thumbnail-overlay">
                                        <a
                                            href="https://www.youtube.com/watch?v=YQHsXMglC9A"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="play-btn"
                                        >
                                            <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="video-corner-badge">Xem Video</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>


                {/* Sản phẩm bán chạy - Blue Background */}
                <ScrollReveal delay={0.2}>
                    <section className="best-sellers-wrapper">
                        <div className="best-sellers-header">
                            <h2>Sản phẩm bán chạy</h2>
                            <button className="view-all-btn" onClick={() => navigate('/catalog')}>Xem tất cả</button>
                        </div>
                        <div className="product-grid-figma">
                            {products.slice(0, 4).map((p, i) => (
                                <ProductCard key={i} product={p} />
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                {/* Khám phá sản phẩm */}
                <ScrollReveal delay={0.2}>
                    <section className="explore-products section">
                        <SectionHeader title="Khám phá sản phẩm của chúng tôi" showArrows />
                        <div className="product-grid-figma">
                            {products.slice(0, 8).map((p, i) => (
                                <ProductCard key={i} product={p} />
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <button className="view-all-products-btn" onClick={() => navigate('/catalog')}>Xem tất cả sản phẩm</button>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ========== FLASH SALES - FIGMA EXACT ========== */}
                <ScrollReveal delay={0.2}>
                    <section className="flash-sales-section">
                        <div className="todays-tag">
                            <span className="red-bar"></span>
                            <span className="todays-text">Today's</span>
                        </div>
                        <SectionHeader title="Flash Sales" showArrows>
                            <div className="countdown-figma">
                                <div className="time-unit">
                                    <span className="time-label">Days</span>
                                    <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
                                </div>
                                <span className="time-colon">:</span>
                                <div className="time-unit">
                                    <span className="time-label">Hours</span>
                                    <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                                </div>
                                <span className="time-colon">:</span>
                                <div className="time-unit">
                                    <span className="time-label">Minutes</span>
                                    <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                </div>
                                <span className="time-colon">:</span>
                                <div className="time-unit">
                                    <span className="time-label">Seconds</span>
                                    <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                </div>
                            </div>
                        </SectionHeader>

                        <div className="flash-sales-products">
                            <div className="product-grid-figma">
                                {products.slice(4, 8).map((p, i) => (
                                    <ProductCard key={i} product={p} />
                                ))}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <button className="view-all-products-btn" onClick={() => navigate('/catalog')}>Xem tất cả sản phẩm</button>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Services */}
                <ScrollReveal delay={0.4}>
                    <section className="services-figma">
                        <div className="service-item-figma">
                            <div className="service-icon-figma"><Truck size={32} /></div>
                            <h3>Giao hàng miễn phí</h3>
                            <p>Giao hàng miễn phí cho mọi đơn hàng trên 500.000đ</p>
                        </div>
                        <div className="service-item-figma">
                            <div className="service-icon-figma"><HeadphonesIcon size={32} /></div>
                            <h3>Hỗ trợ khách hàng 24/7</h3>
                            <p>Hỗ trợ khách hàng thân thiện 24 giờ, 7 ngày</p>
                        </div>
                        <div className="service-item-figma">
                            <div className="service-icon-figma"><ShieldCheck size={32} /></div>
                            <h3>Đảm bảo hoàn tiền</h3>
                            <p>Chúng tôi hoàn tiền trong vòng 30 ngày</p>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};

export default Home;

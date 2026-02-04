import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronRight, ChevronLeft, Star, Truck, Headphones as HeadphonesIcon, ShieldCheck } from 'lucide-react';
import { useNavigate }
    from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Countdown State
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    // Countdown Logic
    React.useEffect(() => {
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

    const products = [
        { id: 101, name: 'Iphone 14', price: 11020000, oldPrice: 15020000, rating: 5, reviews: 65, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=300' },
        { id: 102, name: 'Tai nghe AirPad Pro 2', price: 4990000, oldPrice: 5530000, rating: 4, reviews: 33, img: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=300' },
        { id: 103, name: 'RGB Liquid CPU Cooler', price: 2990000, oldPrice: 3440000, rating: 5, reviews: 45, img: 'https://images.unsplash.com/photo-1588506183812-96da202a0b7a?w=300' },
        { id: 104, name: 'Macbook Air 13 M4 2023', price: 23990000, oldPrice: 26990000, rating: 5, reviews: 85, img: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=300' },
    ];

    return (
        <div className="home-page">
            <main className="home-container">
                {/* Hero Banner */}
                <ScrollReveal>
                    <section className="hero-banner">
                        <div className="hero-content">
                            <div className="hero-text">
                                <div className="hero-sub">
                                    <span className="apple-icon" role="img" aria-label="Apple">🍎</span> Bộ sưu tập Iphone 14
                                </div>
                                <h1 className="hero-title">Ưu đãi đặc biệt<br />lên tới 20%</h1>
                                <a href="#" className="buy-now">Mua Ngay <ChevronRight size={16} /></a>
                                <div className="hero-pagination">
                                    <span className="dot active"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                            <div className="hero-image">
                                <img src="https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=600&auto=format&fit=crop" alt="Iphone 14 Pro - Bộ sưu tập mới nhất" />
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Danh mục phổ biến */}
                <ScrollReveal delay={0.2}>
                    <section className="popular-categories section">
                        <SectionHeader title="Danh mục phổ biến" showArrows />
                        <div className="cat-grid">
                            {categories.map((cat, i) => (
                                <div key={i} className="cat-item" onClick={() => navigate('/catalog')}>
                                    <div className="cat-icon">
                                        <img src={cat.img} alt={`Danh mục ${cat.name}`} loading="lazy" />
                                    </div>
                                    <span>{cat.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                {/* Video Giới Thiệu Sản Phẩm (Safer Implementation) */}
                <section className="intro-video-section section">
                    <SectionHeader title="Giới thiệu sản phẩm" />
                    <div className="video-container">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Product Intro Video"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                {/* Sản phẩm bán chạy - Blue Background */}
                <ScrollReveal delay={0.2}>
                    <section className="best-sellers-wrapper">
                        <div className="best-sellers-header">
                            <h2>Sản phẩm bán chạy</h2>
                            <button className="view-all-btn" onClick={() => navigate('/catalog')}>Xem tất cả</button>
                        </div>
                        <div className="product-grid-figma">
                            {products.map((p, i) => (
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
                            {[...products, ...products].map((p, i) => (
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
                                {products.map((p, i) => (
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

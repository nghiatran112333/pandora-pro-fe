import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Search, ChevronRight, Star, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import PublicFooter from '../components/PublicFooter';
import './StoreLocator.css';

const StoreLocator = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeStore, setActiveStore] = useState(null);

    // Store Data with Apple Store images
    const allStores = [
        {
            id: 1,
            name: 'PandoraPro Hà Nội',
            address: '123 Phố Huế, Hai Bà Trưng, Hà Nội',
            phone: '024.1234.5678',
            hours: '9:00 - 21:00',
            rating: 4.9,
            reviews: 328,
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
            isOpen: true,
            isFlagship: true
        },
        {
            id: 2,
            name: 'PandoraPro Cầu Giấy',
            address: '265 Cầu Giấy, Hà Nội',
            phone: '024.8888.9999',
            hours: '9:00 - 21:00',
            rating: 4.7,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=250&fit=crop',
            isOpen: true,
            isFlagship: false
        },
        {
            id: 3,
            name: 'PandoraPro TP.HCM',
            address: '88 Nguyễn Huệ, Quận 1, TP.HCM',
            phone: '028.1111.2222',
            hours: '9:00 - 22:00',
            rating: 4.8,
            reviews: 412,
            image: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=250&fit=crop',
            isOpen: true,
            isFlagship: true
        },
        {
            id: 4,
            name: 'PandoraPro Quận 7',
            address: '101 Nguyễn Văn Linh, Quận 7, TP.HCM',
            phone: '028.3333.4444',
            hours: '9:00 - 21:00',
            rating: 4.6,
            reviews: 89,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop',
            isOpen: false,
            isFlagship: false
        },
        {
            id: 5,
            name: 'PandoraPro Đà Nẵng',
            address: '500 Bạch Đằng, Hải Châu, Đà Nẵng',
            phone: '0236.5555.6666',
            hours: '9:00 - 21:00',
            rating: 4.8,
            reviews: 203,
            image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400&h=250&fit=crop',
            isOpen: true,
            isFlagship: false
        },
    ];

    const [stores, setStores] = useState(allStores);

    const handleLocateMe = () => {
        setLoading(true);
        setError('');
        if (!navigator.geolocation) {
            setError('Trình duyệt không hỗ trợ định vị.');
            setLoading(false);
            return;
        }
        navigator.geolocation.getCurrentPosition(
            () => setLoading(false),
            () => {
                setError('Không thể lấy vị trí.');
                setLoading(false);
            }
        );
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (!term) {
            setStores(allStores);
            return;
        }
        const filtered = allStores.filter(store =>
            store.name.toLowerCase().includes(term.toLowerCase()) ||
            store.address.toLowerCase().includes(term.toLowerCase())
        );
        setStores(filtered);
    };

    const openGoogleMaps = (store) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`, '_blank');
    };

    return (
        <div className="store-locator-page">
            {/* Hero Section */}
            <section className="store-hero">
                <div className="store-hero-content">
                    <span className="store-label">CỬA HÀNG</span>
                    <h1>Hệ Thống Cửa Hàng<br /><span>PandoraPro</span></h1>
                    <p>Trải nghiệm iPhone, MacBook và AirPods tại cửa hàng gần bạn</p>
                </div>
            </section>

            {/* Search Bar */}
            <div className="store-search-section">
                <div className="store-search-container">
                    <div className="search-input-wrapper">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm cửa hàng..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <button className={`locate-btn ${loading ? 'loading' : ''}`} onClick={handleLocateMe}>
                        <Navigation size={18} />
                        {loading ? 'Đang tìm...' : 'Gần tôi'}
                    </button>
                </div>
                {error && <div className="location-error-msg">{error}</div>}
            </div>

            {/* Store Cards */}
            <section className="store-grid-section">
                <div className="store-grid">
                    {stores.map(store => (
                        <div key={store.id} className={`store-card ${activeStore === store.id ? 'active' : ''}`} onClick={() => setActiveStore(store.id)}>
                            <div className="store-card-image">
                                <img src={store.image} alt={store.name} />
                                {store.isFlagship && <span className="flagship-badge">Flagship</span>}
                                <span className={`status-badge ${store.isOpen ? 'open' : 'closed'}`}>
                                    {store.isOpen ? 'Đang mở' : 'Đã đóng'}
                                </span>
                            </div>
                            <div className="store-card-content">
                                <h3>{store.name}</h3>
                                <div className="store-rating">
                                    <Star size={14} fill="#FFB800" stroke="#FFB800" />
                                    <span>{store.rating}</span>
                                    <span className="review-count">({store.reviews})</span>
                                </div>
                                <div className="store-meta">
                                    <div className="meta-item"><MapPin size={14} /><span>{store.address}</span></div>
                                    <div className="meta-item"><Clock size={14} /><span>{store.hours}</span></div>
                                    <div className="meta-item"><Phone size={14} /><span>{store.phone}</span></div>
                                </div>
                                <div className="store-card-actions">
                                    <button className="btn-directions" onClick={() => openGoogleMaps(store)}>
                                        Chỉ đường <ExternalLink size={14} />
                                    </button>
                                    <a href={`tel:${store.phone}`} className="btn-call"><Phone size={16} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Map */}
            <section className="store-map-section">
                <h2>Bản đồ</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449556!2d105.80194413893554!3d21.02277645279249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1707062400000!5m2!1svi!2s"
                        title="Bản đồ cửa hàng"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default StoreLocator;

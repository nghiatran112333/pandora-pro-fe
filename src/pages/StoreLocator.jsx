import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Search } from 'lucide-react';
import './StoreLocator.css';

const StoreLocator = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Store Data
    const allStores = [
        { id: 1, name: 'PandoraPro Hà Nội', address: '123 Phố Huế, Hai Bà Trưng, Hà Nội', phone: '024.1234.5678', distance: null, lat: 21.0285, lng: 105.8542 },
        { id: 2, name: 'PandoraPro Cầu Giấy', address: '265 Cầu Giấy, Hà Nội', phone: '024.8888.9999', distance: null, lat: 21.0360, lng: 105.7977 },
        { id: 3, name: 'PandoraPro TP.HCM (Quận 1)', address: '88 Nguyễn Huệ, Quận 1, TP.HCM', phone: '028.1111.2222', distance: null, lat: 10.7769, lng: 106.7009 },
        { id: 4, name: 'PandoraPro TP.HCM (Quận 7)', address: '101 Nguyễn Văn Linh, Quận 7, TP.HCM', phone: '028.3333.4444', distance: null, lat: 10.7326, lng: 106.7067 },
        { id: 5, name: 'PandoraPro Đà Nẵng', address: '500 Bạch Đằng, Hải Châu, Đà Nẵng', phone: '0236.5555.6666', distance: null, lat: 16.0544, lng: 108.2022 },
    ];

    const [stores, setStores] = useState(allStores);

    // Haversine formula to calculate distance (in km)
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    const handleLocateMe = () => {
        setLoading(true);
        setError('');
        if (!navigator.geolocation) {
            setError('Trình duyệt của bạn không hỗ trợ định vị.');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });

                // Calculate distances for all stores
                const storesWithDist = allStores.map(store => ({
                    ...store,
                    distance: calculateDistance(latitude, longitude, store.lat, store.lng)
                }));

                // Sort by distance
                storesWithDist.sort((a, b) => a.distance - b.distance);
                setStores(storesWithDist);
                setLoading(false);
            },
            () => {
                setError('Không thể lấy vị trí. Vui lòng kiểm tra quyền truy cập vị trí.');
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

    return (
        <div className="store-locator-page">
            <div className="locator-header">
                <h1>Hệ Thống Cửa Hàng PandoraPro</h1>
                <p>Tìm cửa hàng gần bạn nhất để trải nghiệm sản phẩm trực tiếp</p>
            </div>

            <div className="locator-container">
                {/* Sidebar List */}
                <div className="locator-sidebar">
                    <div className="locator-tools">
                        <button className={`btn-locate ${loading ? 'loading' : ''}`} onClick={handleLocateMe}>
                            <Navigation size={18} />
                            {loading ? 'Đang định vị...' : 'Tìm cửa hàng gần tôi'}
                        </button>
                        <div className="search-store">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Tìm theo thành phố, tên đường..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>

                    {error && <div className="location-error">{error}</div>}

                    <div className="store-list">
                        {stores.map(store => (
                            <div key={store.id} className="store-item">
                                <div className="store-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="store-info">
                                    <h3>{store.name}</h3>
                                    <div className="store-detail">
                                        <MapPin size={14} /> <span>{store.address}</span>
                                    </div>
                                    <div className="store-detail">
                                        <Phone size={14} /> <span>{store.phone}</span>
                                    </div>
                                    <div className="store-detail">
                                        <Clock size={14} /> <span className="open-status">Đang mở cửa • 8:00 - 22:00</span>
                                    </div>
                                    {store.distance !== null && (
                                        <div className="distance-badge">
                                            Cách bạn {store.distance.toFixed(1)} km
                                        </div>
                                    )}
                                </div>
                                <button className="btn-direction">Chỉ đường</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Placeholder */}
                {/* Map Area - Google Maps Embed */}
                <div className="locator-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.309579607612!2d105.84117006842345!3d21.028511475753063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1707062400000!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;

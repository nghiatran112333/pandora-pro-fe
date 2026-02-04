import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Oops! Trang không tìm thấy</h2>
                <p className="error-desc">
                    Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
                    Hãy thử quay lại trang chủ nhé!
                </p>
                <div className="error-actions">
                    <Link to="/" className="btn-home">
                        <Home size={20} />
                        Về Trang Chủ
                    </Link>
                    <button onClick={() => window.history.back()} className="btn-back">
                        <ArrowLeft size={20} />
                        Quay Lại
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

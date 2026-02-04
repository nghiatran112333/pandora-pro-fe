import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CheckoutSuccess.css';

const CheckoutSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="success-page">
            <div className="success-card">
                <div className="icon-circle">
                    <CheckCircle size={60} color="#fff" />
                </div>
                <h1>Đặt hàng thành công!</h1>
                <p>Cảm ơn bạn đã mua sắm tại PandoraPro. Đơn hàng của bạn đang được xử lý.</p>
                <div className="order-number">Mã đơn hàng: #PD-99210</div>

                <div className="success-actions">
                    <button className="primary-btn" onClick={() => navigate('/user-orders')}>Xem đơn hàng</button>
                    <button className="outline-btn" onClick={() => navigate('/')}>Tiếp tục mua sắm <ArrowRight size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;

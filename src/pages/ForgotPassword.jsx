import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronLeft, ArrowRight } from 'lucide-react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="auth-page-premium">
                <div className="auth-card-premium forgot-card">
                    <div className="success-icon-wrapper">
                        <div className="success-check-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>
                    <h2>Kiểm tra email của bạn</h2>
                    <p>Chúng tôi đã gửi hướng dẫn lấy lại mật khẩu tới <strong>{email}</strong></p>
                    <div className="auth-actions-vertical">
                        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary-premium">
                            Mở ứng dụng Mail
                        </a>
                        <Link to="/login" className="btn-ghost-premium">
                            Quay lại đăng nhập
                        </Link>
                    </div>
                    <p className="auth-footer-text">
                        Chưa nhận được email? <button onClick={handleSubmit} className="link-btn">Gửi lại</button>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-page-premium">
            <Link to="/login" className="back-link-top">
                <ChevronLeft size={20} /> Quay lại
            </Link>

            <div className="auth-card-premium forgot-card">
                <div className="auth-header-minimal">
                    <div className="auth-logo">P</div>
                    <h1>Quên mật khẩu?</h1>
                    <p>Nhập email của bạn để bắt đầu quá trình khôi phục mật khẩu</p>
                </div>

                <form className="auth-form-premium" onSubmit={handleSubmit}>
                    <div className="input-group-premium">
                        <label>Địa chỉ Email</label>
                        <div className="input-wrapper-premium">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className={`btn-primary-premium ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Đang xử lý...' : 'Tiếp tục'}
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>

                <div className="auth-footer-minimal">
                    <p>Nhớ mật khẩu? <Link to="/login">Đăng nhập ngay</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

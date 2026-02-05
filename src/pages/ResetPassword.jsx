import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import './ForgotPassword.css';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [passwords, setPasswords] = useState({ password: '', confirm: '' });
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => navigate('/login'), 3000);
        }, 1500);
    };

    if (success) {
        return (
            <div className="auth-page-premium">
                <div className="auth-card-premium forgot-card">
                    <div className="success-icon-wrapper">
                        <CheckCircle2 size={64} color="#2e7d32" />
                    </div>
                    <h2>Mật khẩu đã đổi!</h2>
                    <p>Mật khẩu của bạn đã được cập nhật thành công. Đang chuyển hướng về trang đăng nhập...</p>
                    <Link to="/login" className="btn-primary-premium" style={{ marginTop: '20px' }}>
                        Đăng nhập ngay
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-page-premium">
            <div className="auth-card-premium forgot-card">
                <div className="auth-header-minimal">
                    <div className="auth-logo">P</div>
                    <h1>Đặt lại mật khẩu</h1>
                    <p>Vui lòng nhập mật khẩu mới cho tài khoản của bạn</p>
                </div>

                <form className="auth-form-premium" onSubmit={handleSubmit}>
                    <div className="input-group-premium">
                        <label>Mật khẩu mới</label>
                        <div className="input-wrapper-premium">
                            <Lock size={18} className="input-icon" />
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Tối thiểu 8 ký tự"
                                value={passwords.password}
                                onChange={(e) => setPasswords({ ...passwords, password: e.target.value })}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-pass"
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="input-group-premium">
                        <label>Xác nhận mật khẩu</label>
                        <div className="input-wrapper-premium">
                            <Lock size={18} className="input-icon" />
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Nhập lại mật khẩu mới"
                                value={passwords.confirm}
                                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className={`btn-primary-premium ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Đang cập nhật...' : 'Đổi mật khẩu'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;

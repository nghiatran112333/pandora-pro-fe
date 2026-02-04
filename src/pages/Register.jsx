import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-container">
            <div className="auth-left">
                <div className="welcome-section">
                    <h1>Welcome to<br />PandoraPro!!</h1>
                    <div className="lock-image-wrapper">
                        <img src="https://img.icons8.com/color/256/lock-landscape.png" alt="Lock" />
                    </div>
                </div>
            </div>

            <div className="auth-right">
                <div className="auth-nav">
                    <span className="auth-nav-link" onClick={() => navigate('/login')}>Đăng nhập</span>
                    <span className="auth-nav-link active">Đăng ký</span>
                </div>

                <div className="auth-form-box">
                    <h2>Tạo tài khoản mới</h2>
                    <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
                        <div className="form-group">
                            <label>Nhập địa chỉ Email</label>
                            <input type="email" placeholder="Email" required />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="password-input">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" required />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>

                        <div className="form-utils" style={{ justifyContent: 'flex-end' }}>
                            <span>Bạn đã có tài khoản? <a href="#" onClick={() => navigate('/login')}>Đăng nhập</a></span>
                        </div>

                        <button type="submit" className="auth-submit-btn">Đăng ký</button>

                        <div className="auth-divider">
                            <span>Hoặc đăng ký với</span>
                        </div>

                        <button type="button" className="google-btn">
                            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" width="20" />
                            Sign up with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

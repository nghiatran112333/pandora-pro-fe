import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            // Simulate registration
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        } else {
            // Simulate login
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        }
    };

    return (
        <div className="auth-page-figma">
            {/* Top Banner */}
            <div className="auth-top-banner">
                Pandora Pro - Nơi công nghệ đỉnh cao hội tụ, kiến tạo phong cách sống thời thượng.
            </div>

            {/* Auth Tabs */}
            <div className="auth-tabs">
                <button
                    className={`auth-tab ${!isRegister ? 'active' : ''}`}
                    onClick={() => setIsRegister(false)}
                >
                    Đăng nhập
                </button>
                <button
                    className={`auth-tab ${isRegister ? 'active' : ''}`}
                    onClick={() => setIsRegister(true)}
                >
                    Đăng kí
                </button>
            </div>

            <div className="auth-container-figma">
                {/* Left Side - Welcome */}
                <div className="auth-welcome">
                    <h1><span className="welcome-light">Welcome to</span><br />PandoraPro!!</h1>
                    <div className="welcome-illustration">
                        <img src="https://cdn-icons-png.flaticon.com/512/2716/2716652.png" alt="Security" />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="auth-form-container">
                    <h2>{isRegister ? 'Tạo tài khoản mới' : 'Đăng nhập'}</h2>

                    <form className="auth-form-figma" onSubmit={handleSubmit}>
                        <div className="form-group-figma">
                            <input
                                type="email"
                                placeholder="Nhập địa chỉ Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Eye className="input-eye-icon" size={18} />
                        </div>

                        <div className="form-group-figma">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password-figma"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {isRegister && (
                            <div className="form-group-figma">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        {!isRegister && (
                            <div className="form-options-figma">
                                <a href="#" className="forgot-link-figma">Quên mật khẩu?</a>
                                <span className="register-link-figma">
                                    Bạn chưa có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(true); }}>Đăng kí</a>
                                </span>
                            </div>
                        )}

                        {isRegister && (
                            <div className="form-options-figma" style={{ justifyContent: 'flex-end' }}>
                                <span className="register-link-figma">
                                    Bạn đã có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(false); }}>Đăng nhập</a>
                                </span>
                            </div>
                        )}

                        {!isRegister && (
                            <button type="submit" className="auth-submit-btn">Đăng nhập</button>
                        )}

                        <div className="divider-figma">
                            <span>Hoặc đăng nhập với</span>
                        </div>

                        <button type="button" className="google-btn-figma">
                            <img src="https://www.google.com/favicon.ico" alt="Google" />
                            Sign up with Google
                        </button>

                        {isRegister && (
                            <button type="submit" className="auth-submit-btn">Đăng nhập</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

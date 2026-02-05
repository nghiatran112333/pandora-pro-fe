import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Login.css';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [agreedTerms, setAgreedTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp!');
            return;
        }
        setIsLoading(true);

        setTimeout(() => {
            localStorage.setItem('isAuthenticated', 'true');
            setIsLoading(false);
            navigate('/');
        }, 1500);
    };

    const floatingShapes = [
        { size: 300, x: '10%', y: '20%', delay: 0 },
        { size: 200, x: '80%', y: '60%', delay: 1 },
        { size: 150, x: '70%', y: '10%', delay: 2 },
        { size: 100, x: '20%', y: '80%', delay: 0.5 },
    ];

    const passwordStrength = (pwd) => {
        let strength = 0;
        if (pwd.length >= 8) strength++;
        if (/[A-Z]/.test(pwd)) strength++;
        if (/[0-9]/.test(pwd)) strength++;
        if (/[^A-Za-z0-9]/.test(pwd)) strength++;
        return strength;
    };

    const getStrengthColor = (strength) => {
        const colors = ['#ef4444', '#f59e0b', '#eab308', '#22c55e'];
        return colors[strength - 1] || '#e2e8f0';
    };

    const getStrengthText = (strength) => {
        const texts = ['Yếu', 'Trung bình', 'Khá', 'Mạnh'];
        return texts[strength - 1] || '';
    };

    return (
        <div className="auth-page-premium">
            {/* Animated Background */}
            <div className="auth-bg-shapes">
                {floatingShapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        className="floating-shape"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: shape.x,
                            top: shape.y,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 6,
                            delay: shape.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Main Container */}
            <motion.div
                className="auth-glass-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                {/* Left Side - Branding */}
                <motion.div
                    className="auth-brand-side"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="brand-content">
                        <motion.div
                            className="brand-logo"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Sparkles size={32} />
                        </motion.div>
                        <h1>
                            <span className="brand-light">Tham gia</span>
                            <br />
                            <span className="brand-bold">PandoraPro</span>
                        </h1>
                        <p className="brand-tagline">
                            Đăng ký ngay để nhận những ưu đãi độc quyền<br />
                            và trải nghiệm mua sắm tuyệt vời.
                        </p>
                    </div>

                    <motion.div
                        className="brand-illustration"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="illustration-glow" />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
                            alt="Register"
                        />
                    </motion.div>

                    <div className="brand-features">
                        {[
                            { icon: CheckCircle, text: 'Ưu đãi thành viên 10%' },
                            { icon: CheckCircle, text: 'Freeship mọi đơn hàng' },
                            { icon: CheckCircle, text: 'Đổi trả trong 30 ngày' },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="feature-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                whileHover={{ x: 5 }}
                            >
                                <span className="feature-dot" />
                                {feature.text}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <div className="auth-form-side">
                    {/* Tab Switcher */}
                    <motion.div
                        className="auth-tab-switcher"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            className="tab-btn"
                            onClick={() => navigate('/login')}
                        >
                            Đăng nhập
                        </button>
                        <button className="tab-btn active">
                            Đăng ký
                        </button>
                        <motion.div
                            className="tab-indicator"
                            initial={{ x: '100%' }}
                            animate={{ x: '100%' }}
                        />
                    </motion.div>

                    {/* Form Content */}
                    <motion.div
                        className="form-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <motion.h2
                            className="form-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Tạo tài khoản mới
                        </motion.h2>
                        <motion.p
                            className="form-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                        >
                            Đăng ký để trải nghiệm những tính năng tuyệt vời
                        </motion.p>

                        <form onSubmit={handleSubmit} className="auth-form-fields">
                            <motion.div
                                className={`input-group ${focusedField === 'name' ? 'focused' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <User className="input-icon" size={20} />
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                <motion.div
                                    className="input-focus-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                                />
                            </motion.div>

                            <motion.div
                                className={`input-group ${focusedField === 'email' ? 'focused' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                            >
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                <motion.div
                                    className="input-focus-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                                />
                            </motion.div>

                            <motion.div
                                className={`input-group ${focusedField === 'password' ? 'focused' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Lock className="input-icon" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                                <motion.div
                                    className="input-focus-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === 'password' ? 1 : 0 }}
                                />
                            </motion.div>

                            {/* Password Strength */}
                            {password && (
                                <motion.div
                                    className="password-strength"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    style={{ marginTop: '-12px' }}
                                >
                                    <div className="strength-bars">
                                        {[1, 2, 3, 4].map((level) => (
                                            <motion.div
                                                key={level}
                                                className="strength-bar"
                                                initial={{ scaleX: 0 }}
                                                animate={{
                                                    scaleX: passwordStrength(password) >= level ? 1 : 0,
                                                    backgroundColor: getStrengthColor(passwordStrength(password))
                                                }}
                                                style={{
                                                    height: '4px',
                                                    flex: 1,
                                                    borderRadius: '2px',
                                                    transformOrigin: 'left',
                                                    background: passwordStrength(password) >= level
                                                        ? getStrengthColor(passwordStrength(password))
                                                        : '#e2e8f0'
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span style={{
                                        fontSize: '12px',
                                        color: getStrengthColor(passwordStrength(password)),
                                        fontWeight: 500
                                    }}>
                                        {getStrengthText(passwordStrength(password))}
                                    </span>
                                </motion.div>
                            )}

                            <motion.div
                                className={`input-group ${focusedField === 'confirm' ? 'focused' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55 }}
                            >
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    placeholder="Xác nhận mật khẩu"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onFocus={() => setFocusedField('confirm')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                {confirmPassword && password === confirmPassword && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        style={{ position: 'absolute', right: '16px', color: '#22c55e' }}
                                    >
                                        <CheckCircle size={20} />
                                    </motion.div>
                                )}
                                <motion.div
                                    className="input-focus-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === 'confirm' ? 1 : 0 }}
                                />
                            </motion.div>

                            <motion.label
                                className="remember-me"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                style={{ marginTop: '8px' }}
                            >
                                <input
                                    type="checkbox"
                                    checked={agreedTerms}
                                    onChange={(e) => setAgreedTerms(e.target.checked)}
                                    required
                                />
                                <span className="checkmark" />
                                Tôi đồng ý với <a href="#" style={{ color: '#6366f1', fontWeight: 500 }}>Điều khoản sử dụng</a>
                            </motion.label>

                            <motion.button
                                type="submit"
                                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                            >
                                {isLoading ? (
                                    <motion.div
                                        className="loading-spinner"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                ) : (
                                    <>
                                        Đăng ký ngay
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </motion.button>

                            <motion.div
                                className="divider"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <span>hoặc đăng ký với</span>
                            </motion.div>

                            <motion.div
                                className="social-buttons"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.75 }}
                            >
                                <motion.button
                                    type="button"
                                    className="social-btn google"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <img src="https://www.google.com/favicon.ico" alt="Google" />
                                    Google
                                </motion.button>
                                <motion.button
                                    type="button"
                                    className="social-btn facebook"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                                    Facebook
                                </motion.button>
                            </motion.div>

                            <motion.p
                                className="form-subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                style={{ textAlign: 'center', marginTop: '16px' }}
                            >
                                Đã có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }} style={{ color: '#6366f1', fontWeight: 600 }}>Đăng nhập</a>
                            </motion.p>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;

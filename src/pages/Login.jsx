import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, register } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            let user;
            if (isRegister) {
                if (password !== confirmPassword) {
                    setError('Mật khẩu không khớp!');
                    setIsLoading(false);
                    return;
                }
                user = await register(fullName, email, password);
            } else {
                user = await login(email, password);
            }

            // Redirect logic based on role
            if (user?.role === 'admin') {
                navigate('/admin');
            } else {
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });
            }
        } catch (err) {
            setError(err.message || 'Đã xảy ra lỗi');
        } finally {
            setIsLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const formVariants = {
        login: { x: 0, opacity: 1 },
        register: { x: 0, opacity: 1 }
    };

    const floatingShapes = [
        { size: 300, x: '10%', y: '20%', delay: 0 },
        { size: 200, x: '80%', y: '60%', delay: 1 },
        { size: 150, x: '70%', y: '10%', delay: 2 },
        { size: 100, x: '20%', y: '80%', delay: 0.5 },
    ];

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
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="brand-content" variants={itemVariants}>
                        <motion.div
                            className="brand-logo"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Sparkles size={32} />
                        </motion.div>
                        <motion.h1 variants={itemVariants}>
                            <span className="brand-light">Welcome to</span>
                            <br />
                            <span className="brand-bold">PandoraPro</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="brand-tagline">
                            Nơi công nghệ đỉnh cao hội tụ,<br />
                            kiến tạo phong cách sống thời thượng.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="brand-illustration"
                        variants={itemVariants}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="illustration-glow" />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6357/6357048.png"
                            alt="Security"
                        />
                    </motion.div>

                    <motion.div className="brand-features" variants={containerVariants}>
                        {['Bảo mật tuyệt đối', 'Trải nghiệm mượt mà', 'Hỗ trợ 24/7'].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="feature-item"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                            >
                                <span className="feature-dot" />
                                {feature}
                            </motion.div>
                        ))}
                    </motion.div>
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
                            className={`tab-btn ${!isRegister ? 'active' : ''}`}
                            onClick={() => setIsRegister(false)}
                        >
                            <motion.span
                                layoutId="tabIndicator"
                                className="tab-text"
                            >
                                Đăng nhập
                            </motion.span>
                        </button>
                        <button
                            className={`tab-btn ${isRegister ? 'active' : ''}`}
                            onClick={() => setIsRegister(true)}
                        >
                            <motion.span className="tab-text">
                                Đăng ký
                            </motion.span>
                        </button>
                        <motion.div
                            className="tab-indicator"
                            layoutId="indicator"
                            animate={{ x: isRegister ? '100%' : '0%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </motion.div>

                    {/* Form Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isRegister ? 'register' : 'login'}
                            className="form-content"
                            initial={{ opacity: 0, x: isRegister ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isRegister ? -50 : 50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.h2
                                className="form-title"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                {isRegister ? 'Tạo tài khoản mới' : 'Chào mừng trở lại!'}
                            </motion.h2>
                            <motion.p
                                className="form-subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.15 }}
                            >
                                {isRegister
                                    ? 'Đăng ký để trải nghiệm những tính năng tuyệt vời'
                                    : 'Đăng nhập để tiếp tục mua sắm'}
                            </motion.p>

                            <form onSubmit={handleSubmit} className="auth-form-fields">
                                {isRegister && (
                                    <motion.div
                                        className={`input-group ${focusedField === 'name' ? 'focused' : ''}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
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
                                )}

                                <motion.div
                                    className={`input-group ${focusedField === 'email' ? 'focused' : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: isRegister ? 0.15 : 0.1 }}
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
                                    transition={{ delay: isRegister ? 0.2 : 0.15 }}
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

                                {isRegister && (
                                    <motion.div
                                        className={`input-group ${focusedField === 'confirm' ? 'focused' : ''}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
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
                                        <motion.div
                                            className="input-focus-line"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: focusedField === 'confirm' ? 1 : 0 }}
                                        />
                                    </motion.div>
                                )}

                                {!isRegister && (
                                    <motion.div
                                        className="form-extras"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="remember-me">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            Ghi nhớ đăng nhập
                                        </label>
                                        <Link to="/forgot-password" size={14} className="forgot-link">Quên mật khẩu?</Link>
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    className={`submit-btn ${isLoading ? 'loading' : ''}`}
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: isRegister ? 0.3 : 0.25 }}
                                >
                                    {isLoading ? (
                                        <motion.div
                                            className="loading-spinner"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                    ) : (
                                        <>
                                            {isRegister ? 'Đăng ký ngay' : 'Đăng nhập'}
                                            <ArrowRight size={20} />
                                        </>
                                    )}
                                </motion.button>

                                <motion.div
                                    className="divider"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.35 }}
                                >
                                    <span>hoặc tiếp tục với</span>
                                </motion.div>

                                <motion.div
                                    className="social-buttons"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
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
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

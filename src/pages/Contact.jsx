import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import './Contact.css';

const Contact = () => {
    const { showToast } = useToast();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast('Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.', 'success');
        setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="contact-page-premium">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-overlay"></div>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-tag">Liên hệ với chúng tôi</span>
                    <h1>Chúng tôi luôn sẵn sàng<br /><span>lắng nghe bạn</span></h1>
                    <p>Đội ngũ hỗ trợ của Pandora Pro làm việc 24/7 để đảm bảo trải nghiệm của bạn luôn tuyệt vời nhất.</p>
                </motion.div>
            </section>

            <div className="contact-main-container">
                {/* Contact Methods Grid */}
                <motion.div
                    className="contact-methods-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="method-card" variants={itemVariants}>
                        <div className="method-icon"><Phone size={24} /></div>
                        <h3>Hotline trực tuyến</h3>
                        <p>Hỗ trợ kỹ thuật và bán hàng 24/7</p>
                        <a href="tel:+84123456789" className="method-link">+84 123 456 789</a>
                        <div className="method-status">
                            <span className="status-dot"></span> Đang hoạt động
                        </div>
                    </motion.div>

                    <motion.div className="method-card" variants={itemVariants}>
                        <div className="method-icon"><Mail size={24} /></div>
                        <h3>Hỗ trợ Email</h3>
                        <p>Phản hồi nhanh trong vòng 2 giờ</p>
                        <a href="mailto:support@pandorapro.com" className="method-link">support@pandorapro.com</a>
                        <div className="method-status">
                            <span className="status-dot"></span> Trực tuyến
                        </div>
                    </motion.div>

                    <motion.div className="method-card" variants={itemVariants}>
                        <div className="method-icon"><MapPin size={24} /></div>
                        <h3>Trụ sở chính</h3>
                        <p>Ghé thăm showroom của chúng tôi</p>
                        <address>123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh</address>
                        <button className="view-map-btn">Xem bản đồ <ArrowRight size={14} /></button>
                    </motion.div>
                </motion.div>

                <div className="contact-split-layout">
                    {/* Contact Form Section */}
                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-title">
                            <MessageSquare className="label-icon" size={20} />
                            <h2>Gửi tin nhắn cho Pandora</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <div className="input-field">
                                    <label>Họ và tên</label>
                                    <input
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Email liên hệ</label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-field">
                                <label>Số điện thoại</label>
                                <input
                                    type="tel"
                                    placeholder="09xx xxx xxx"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <label>Chủ đề</label>
                                <select
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                >
                                    <option value="">Chọn một chủ đề</option>
                                    <option value="support">Hỗ trợ kỹ thuật</option>
                                    <option value="sales">Tư vấn mua hàng</option>
                                    <option value="feedback">Góp ý dịch vụ</option>
                                    <option value="business">Hợp tác kinh doanh</option>
                                </select>
                            </div>
                            <div className="input-field">
                                <label>Nội dung tin nhắn</label>
                                <textarea
                                    placeholder="Hãy cho chúng tôi biết bạn đang cần hỗ trợ điều gì..."
                                    rows="6"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn-premium">
                                <span>Gửi tin nhắn</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                    {/* FAQ/Support Info */}
                    <motion.aside
                        className="support-info-aside"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="support-card">
                            <h3>Giờ làm việc</h3>
                            <div className="support-list">
                                <div className="support-item">
                                    <Clock size={16} />
                                    <span>Thứ 2 - Thứ 6: 08:00 - 20:00</span>
                                </div>
                                <div className="support-item">
                                    <Clock size={16} />
                                    <span>Thứ 7 - CN: 09:00 - 18:00</span>
                                </div>
                            </div>
                        </div>

                        <div className="support-card blur-card">
                            <h3>Kết nối toàn cầu</h3>
                            <p>Chúng tôi có hệ thống showroom tại 63 tỉnh thành trên toàn quốc.</p>
                            <div className="social-links-premium">
                                <div className="social-icon-box"><Globe size={18} /></div>
                                <div className="social-icon-box"><MessageSquare size={18} /></div>
                                <div className="social-icon-box"><Send size={18} /></div>
                            </div>
                        </div>

                        <div className="help-widget">
                            <div className="widget-header">
                                <div className="live-badge">Live</div>
                                <h4>Hỗ trợ trực tuyến</h4>
                            </div>
                            <p>Chat ngay với chuyên viên của chúng tôi để được giải đáp tức thì.</p>
                            <button className="chat-now-btn">Bắt đầu chat</button>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </div>
    );
};

export default Contact;

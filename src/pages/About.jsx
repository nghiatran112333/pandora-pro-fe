import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Star, Award, ChevronRight, Zap, Shield, Heart } from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { label: 'Khách hàng tin dùng', value: '150k+', icon: Users, color: '#3b82f6' },
        { label: 'Sản phẩm chính hãng', value: '12k+', icon: ShoppingBag, color: '#ef4444' },
        { label: 'Đánh giá tích cực', value: '98%', icon: Star, color: '#f59e0b' },
        { label: 'Giải thưởng dịch vụ', value: '25+', icon: Award, color: '#10b981' }
    ];

    const values = [
        { title: 'Tốc độ', desc: 'Giao hàng siêu tốc trong 2h và hỗ trợ 24/7 tức thì.', icon: Zap },
        { title: 'Uy tín', desc: 'Cam kết 100% sản phẩm chính hãng Apple, Samsung, Sony.', icon: Shield },
        { title: 'Tận tâm', desc: 'Luôn lắng nghe và thấu hiểu nhu cầu của từng khách hàng.', icon: Heart }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="about-page-premium">
            {/* Cinematic Hero */}
            <section className="about-hero-section">
                <div className="hero-bg-blur"></div>
                <div className="about-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-subtitle">Về Pandora Pro</span>
                        <h1>Định nghĩa lại<br /><span>Trải nghiệm Công nghệ</span></h1>
                        <p>
                            Chúng tôi không chỉ bán thiết bị, chúng tôi kiến tạo phong cách sống hiện đại.
                            Mỗi sản phẩm tại Pandora Pro là một lời khẳng định về đẳng cấp và sự tinh tế.
                        </p>
                        <div className="hero-actions">
                            <button className="btn-explore">Khám phá ngay <ChevronRight size={18} /></button>
                            <div className="experience-tag">10 Năm Kinh Nghiệm</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section">
                <div className="about-container">
                    <motion.div
                        className="stats-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} className="stat-card" variants={itemVariants}>
                                <div className="stat-icon" style={{ color: stat.color }}>
                                    <stat.icon size={32} />
                                </div>
                                <div className="stat-info">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="about-vision-section">
                <div className="about-container">
                    <div className="vision-grid">
                        <motion.div
                            className="vision-image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800" alt="Pandora Office" />
                            <div className="float-badge">Since 2014</div>
                        </motion.div>
                        <motion.div
                            className="vision-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-tag">Tầm nhìn & Sứ mệnh</span>
                            <h2>Nâng tầm giá trị thực cho người yêu công nghệ</h2>
                            <p>
                                Tại Pandora Pro, sứ mệnh của chúng tôi là xóa nhòa khoảng cách giữa con người và công nghệ đỉnh cao.
                                Chúng tôi nỗ lực mỗi ngày để mang về những siêu phẩm mới nhất, nhanh nhất với mức giá tối ưu nhất.
                            </p>
                            <div className="values-list">
                                {values.map((v, i) => (
                                    <div key={i} className="value-item">
                                        <div className="v-iconbox"><v.icon size={20} /></div>
                                        <div>
                                            <h4>{v.title}</h4>
                                            <p>{v.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team-section">
                <div className="about-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Đội ngũ lãnh đạo</h2>
                        <p>Những con người đứng sau sự thành công và phát triển vượt bậc của Pandora Pro.</p>
                    </motion.div>

                    <div className="team-premium-grid">
                        {[
                            { name: 'Phan Anh Tuấn', role: 'Sáng lập & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
                            { name: 'Nguyễn Kiều Trang', role: 'Giám đốc Marketing', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
                            { name: 'Lê Minh Hoàng', role: 'Giám đốc Công nghệ', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400' }
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                className="member-card-premium"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="member-img-box">
                                    <img src={m.img} alt={m.name} />
                                    <div className="member-socials">
                                        <div className="s-icon">FB</div>
                                        <div className="s-icon">LN</div>
                                        <div className="s-icon">TW</div>
                                    </div>
                                </div>
                                <div className="member-info-premium">
                                    <h3>{m.name}</h3>
                                    <p>{m.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta">
                <div className="about-container">
                    <motion.div
                        className="cta-card"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Cùng Pandora Pro viết tiếp <br /><span>tương lai số</span></h2>
                        <button className="cta-btn-join">Liên hệ hợp tác</button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;

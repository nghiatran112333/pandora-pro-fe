import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './PublicFooter.css';

const PublicFooter = () => {
    return (
        <footer className="public-footer-figma">
            <div className="footer-container-figma">
                {/* Column 1: Newsletter */}
                <div className="footer-col-figma">
                    <h3>Đăng kí nhận bản tin</h3>
                    <p>Nhận ngay giảm giá 10% cho đơn hàng đầu tiên</p>
                    <div className="newsletter-box-figma">
                        <input type="email" placeholder="Enter your email" />
                        <button><Send size={18} /></button>
                    </div>
                </div>

                {/* Column 2: Support */}
                <div className="footer-col-figma">
                    <h3>Hỗ trợ</h3>
                    <p>123, Cộng Hòa, Tân Bình, HCM</p>
                    <p>pandorapro@gmail.com</p>
                    <p>+8412345678</p>
                </div>

                {/* Column 3: Account */}
                <div className="footer-col-figma">
                    <h3>Tài khoản</h3>
                    <Link to="/profile">Tài khoản của tôi</Link>
                    <Link to="/login">Đăng ký/ Đăng nhập</Link>
                    <Link to="/cart">Giỏ hàng</Link>
                    <Link to="/wishlist">Danh sách yêu thích</Link>
                    <a href="#">Cửa hàng</a>
                </div>

                {/* Column 4: Quick Links */}
                <div className="footer-col-figma">
                    <h3>Liên kết nhanh</h3>
                    <Link to="/policies">Chính sách bảo mật</Link>
                    <Link to="/policies">Điều khoản sử dụng</Link>
                    <Link to="/policies">Câu hỏi thường gặp</Link>
                    <Link to="/contact">Liên hệ</Link>
                </div>

                {/* Column 5: Download App */}
                <div className="footer-col-figma">
                    <h3>Tải Ứng Dụng</h3>
                    <div className="qr-box-figma">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=PandoraPro" alt="QR Code" className="qr-code" />
                        <div className="app-links-figma">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                        </div>
                    </div>
                    <div className="social-icons-figma">
                        <a href="#"><Facebook size={18} /></a>
                        <a href="#"><Twitter size={18} /></a>
                        <a href="#"><Instagram size={18} /></a>
                        <a href="#"><Linkedin size={18} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-figma">
                © Copyright Kimel 2025. All right reserved
            </div>
        </footer>
    );
};

export default PublicFooter;

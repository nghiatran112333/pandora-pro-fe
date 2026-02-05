import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PublicFooter from '../components/PublicFooter';
import './Policies.css';

const PolicyItem = ({ icon: Icon, title, content }) => (
    <div className="policy-card-item">
        <div className="policy-icon-box">
            <Icon size={32} />
        </div>
        <div className="policy-text">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </div>
);

const Policies = () => {
    return (
        <div className="policies-page">
            {/* Hero Section */}
            <div className="policies-hero">
                <div className="hero-container">
                    <h1>Trung Tâm Hỗ Trợ & Chính Sách</h1>
                    <p>Mọi thông tin bạn cần về việc mua sắm, bảo hành và bảo mật tại PandoraPro</p>
                </div>
            </div>

            <div className="policies-content">
                <div className="policy-grid">
                    <PolicyItem
                        icon={ShieldCheck}
                        title="Chính Sách Bảo Hành"
                        content="Tất cả sản phẩm Apple tại PandoraPro được bảo hành chính hãng 12 tháng theo tiêu chuẩn của Apple Việt Nam. Đổi mới trong 30 ngày nếu có lỗi từ nhà sản xuất."
                    />
                    <PolicyItem
                        icon={Truck}
                        title="Chính Sách Vận Chuyển"
                        content="Miễn phí giao hàng toàn quốc cho mọi đơn hàng từ 1.000.000đ. Thời gian giao hàng từ 1-3 ngày làm việc tùy khu vực."
                    />
                    <PolicyItem
                        icon={RotateCcw}
                        title="Chính Sách Đổi Trả"
                        content="Hỗ trợ đổi trả sản phẩm trong vòng 30 ngày kể từ ngày nhận hàng với điều kiện sản phẩm còn nguyên seal, chưa kích hoạt và đầy đủ phụ kiện."
                    />
                    <PolicyItem
                        icon={Lock}
                        title="Chính Sách Bảo Mật"
                        content="Chúng tôi cam kết bảo mật tuyệt đối thông tin khách hàng. Thông tin thanh toán được mã hóa và không được lưu trữ trên hệ thống của chúng tôi."
                    />
                </div>

                <div className="policy-details-section">
                    <div className="policy-sidebar">
                        <nav className="policy-nav">
                            <Link to="#" className="active">Bảo hành Apple <ChevronRight size={16} /></Link>
                            <Link to="#">Điều khoản sử dụng <ChevronRight size={16} /></Link>
                            <Link to="#">Quy định thanh toán <ChevronRight size={16} /></Link>
                            <Link to="#">Chính sách Cookies <ChevronRight size={16} /></Link>
                        </nav>

                        <div className="contact-support-card">
                            <h4>Cần hỗ trợ thêm?</h4>
                            <p>Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng giúp đỡ bạn.</p>
                            <a href="tel:19001234" className="btn-call-support">Hotline: 1900 1234</a>
                        </div>
                    </div>

                    <div className="policy-text-body">
                        <h2>Quy Định Bảo Hành Chi Tiết</h2>
                        <p>Chào mừng quý khách đến với PandoraPro. Để đảm bảo quyền lợi tốt nhất cho khách hàng, chúng tôi xin thông báo quy định bảo hành cụ thể như sau:</p>

                        <h3>1. Phạm vi bảo hành</h3>
                        <p>Áp dụng cho tất cả các thiết bị phần cứng của Apple như iPhone, iPad, MacBook, Apple Watch, AirPods được mua tại hệ thống cửa hàng PandoraPro.</p>

                        <h3>2. Điều kiện bảo hành</h3>
                        <ul>
                            <li>Sản phẩm còn trong thời hạn bảo hành.</li>
                            <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất.</li>
                            <li>Số Serial/IMEI trên máy phải trùng khớp với thông tin trên hệ thống bảo hành.</li>
                            <li>Sản phẩm không có dấu hiệu can thiệp phần cứng từ bên thứ ba không được ủy quyền.</li>
                        </ul>

                        <h3>3. Trường hợp không được bảo hành</h3>
                        <p>Sản phẩm bị hư hỏng do tác động vật lý (rơi vỡ, vào nước), thiên tai, hỏa hoạn hoặc sử dụng không đúng hướng dẫn của nhà sản xuất sẽ không được bảo hành miễn phí.</p>
                    </div>
                </div>
            </div>

            <PublicFooter />
        </div>
    );
};

export default Policies;

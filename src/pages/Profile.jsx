import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: 'Vân',
        lastName: 'THanh',
        email: 'Thanhvan@gmail.com',
        address: '123',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle save logic
        console.log('Profile updated:', formData);
    };

    return (
        <div className="profile-page-figma">
            <div className="profile-container">
                {/* Header Welcome */}
                <div className="profile-header-welcome">
                    <span>Welcome! </span>
                    <span className="user-name-highlight">Thanh Vân</span>
                </div>

                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span className="current">Tài khoản của tôi</span>
                </nav>

                <div className="profile-layout">
                    {/* Sidebar */}
                    <aside className="profile-sidebar">
                        <section className="sidebar-section">
                            <h3>Quản lý tài khoản</h3>
                            <ul>
                                <li><Link to="/profile" className="active">Hồ sơ của tôi</Link></li>
                                <li><Link to="/profile">Quản lý địa chỉ</Link></li>
                                <li><Link to="/profile">Phương thức thanh toán</Link></li>
                            </ul>
                        </section>

                        <section className="sidebar-section">
                            <h3>Đơn hàng</h3>
                            <ul>
                                <li><Link to="/user-orders">Đã giao</Link></li>
                                <li><Link to="/user-orders">Đã hủy</Link></li>
                            </ul>
                        </section>

                        <section className="sidebar-section">
                            <h3>Danh sách yêu thích</h3>
                            <ul>
                                <li><Link to="/wishlist">Danh sách yêu thích</Link></li>
                            </ul>
                        </section>
                    </aside>

                    {/* Main Content - Edit Profile */}
                    <main className="profile-main">
                        <h2 className="main-title">Chỉnh sửa hồ sơ của bạn</h2>

                        <form onSubmit={handleSubmit} className="profile-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Tên</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Tên"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Họ</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Họ"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Địa chỉ"
                                    />
                                </div>
                            </div>

                            <div className="password-section">
                                <label>Đổi mật khẩu</label>
                                <div className="password-inputs">
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleInputChange}
                                        placeholder="Current Passwod"
                                    />
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        placeholder="New Passwod"
                                    />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm New Passwod"
                                    />
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="cancel-btn">Hủy</button>
                                <button type="submit" className="save-btn">Lưu thay đổi</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Profile;

import React from 'react';
import { ChevronLeft, CloudDownload, Plus, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
    const navigate = useNavigate();

    return (
        <div className="add-product-page">
            <div className="back-link" onClick={() => navigate('/products')}>
                <ChevronLeft size={16} />
                <span>back</span>
            </div>

            <div className="page-header">
                <h1>Thêm sản phẩm</h1>
                <div className="header-btns">
                    <button className="btn-secondary" onClick={() => navigate('/products')}>Cancel</button>
                    <button className="btn-primary">Save</button>
                </div>
            </div>

            <div className="add-content-grid">
                <div className="add-main-form">
                    <section className="form-card card">
                        <h2>Thông tin</h2>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input type="text" placeholder="Tôi thấy hoa vàng trên cỏ xanh" />
                        </div>
                        <div className="form-group">
                            <label>Mô tả sản phẩm</label>
                            <textarea placeholder="Mô tả" rows={6}></textarea>
                        </div>
                    </section>

                    <section className="form-card card">
                        <h2>Images</h2>
                        <div className="upload-area">
                            <CloudDownload size={32} color="#3b82f6" />
                            <button className="btn-text" style={{ margin: '12px 0' }}>Add File</button>
                            <p>Or drag and drop files</p>
                        </div>
                    </section>

                    <section className="form-card card">
                        <h2>Giá</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Giá gốc</label>
                                <input type="text" placeholder="Enter price" />
                            </div>
                            <div className="form-group">
                                <label>Giá khi được khuyến mãi</label>
                                <input type="text" placeholder="Price at Discount" />
                            </div>
                        </div>
                        <div className="toggle-group">
                            <div className="toggle"></div>
                            <span>Thêm thuế cho sản phẩm này</span>
                        </div>
                    </section>

                    <section className="form-card card">
                        <h2>Different Options</h2>
                        <div className="toggle-group">
                            <div className="toggle active"></div>
                            <span>Sản phẩm này có nhiều tùy chọn</span>
                        </div>
                        <div className="option-group" style={{ marginTop: '20px' }}>
                            <label>Tùy chọn 1</label>
                            <div className="form-group">
                                <label>Màu sắc</label>
                                <div className="select-box">
                                    <span>Màu sắc</span>
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                            <button className="btn-text" style={{ marginTop: '12px' }}>+ Add More</button>
                        </div>
                    </section>

                    <section className="form-card card">
                        <h2>Vận chuyển</h2>
                        <div className="form-group">
                            <label>Trọng lượng</label>
                            <input type="text" placeholder="Nhập trọng lượng" />
                        </div>
                        <div className="toggle-group">
                            <div className="toggle"></div>
                            <span>Đây là sản phẩm số</span>
                        </div>
                    </section>
                </div>

                <div className="add-sidebar">
                    <aside className="card fixed-card">
                        <h2>Danh mục</h2>
                        <div className="category-list">
                            {['Iphone', 'Tivi', 'Ipad', 'HeadPhones', 'MiniSpeaker'].map(cat => (
                                <label key={cat} className="check-item">
                                    <input type="checkbox" />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                        <button className="btn-text" style={{ marginTop: '16px', fontSize: '13px' }}>Thêm danh mục mới</button>
                    </aside>

                    <aside className="card fixed-card" style={{ marginTop: '24px' }}>
                        <h2>SEO Settings</h2>
                        <div className="form-group">
                            <label>Tiêu đề</label>
                            <input type="text" />
                        </div>
                        <div className="form-group" style={{ marginTop: '16px' }}>
                            <label>Mô tả</label>
                            <textarea rows={4}></textarea>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="footer-save-bar">
                <button className="btn-secondary" onClick={() => navigate('/products')}>Cancel</button>
                <button className="btn-primary">Save</button>
            </div>
        </div>
    );
};

export default AddProduct;

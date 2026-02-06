import React, { useState } from 'react';
import { Search, Download, Plus, Filter, Edit, Trash2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { products } from '../data/products';
import './Dashboard.css'; // Use shared dashboard styles
import './Products.css';

const Products = () => {
    const navigate = useNavigate();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header-simple">
                <div>
                    <h1>Sản phẩm</h1>
                    <p>Quản lý danh sách sản phẩm của cửa hàng</p>
                </div>
                <div className="header-btns" style={{ display: 'flex', gap: '12px' }}>
                    <button className="export-btn"><Download size={16} /> Xuất DL</button>
                    <button className="btn-primary" onClick={() => navigate('/admin/products/add')}><Plus size={16} /> Thêm mới</button>
                </div>
            </div>

            <div className="products-content card">
                <div className="table-toolbar">
                    <div className="filter-group">
                        <div className="dropdown-filter">
                            <span>Bộ lọc</span>
                            <Filter size={16} />
                        </div>
                        <div className="search-bar">
                            <Search size={18} />
                            <input type="text" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                    <div className="action-group">
                        <button className="icon-btn"><Edit size={18} /></button>
                        <button className="icon-btn delete" onClick={() => setIsDeleteOpen(true)}><Trash2 size={18} /></button>
                    </div>
                </div>

                <div className="table-container">
                    <table className="products-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Sản phẩm</th>
                                <th>Tồn kho</th>
                                <th>Màu sắc</th>
                                <th>Giá</th>
                                <th>Đánh giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id}>
                                    <td><input type="checkbox" checked={p.selected || false} readOnly /></td>
                                    <td className="product-cell" data-label="Sản phẩm">
                                        <img src={p.image} alt={p.name} className="p-img" />
                                        <span className="p-name">{p.name}</span>
                                    </td>
                                    <td data-label="Tồn kho">
                                        <div className={`stock-badge ${p.outOfStock || p.stock === 0 ? 'out' : 'in'}`}>
                                            {p.outOfStock || p.stock === 0 ? 'Hết hàng' : `${p.stock} sản phẩm`}
                                        </div>
                                    </td>
                                    <td className="p-color" data-label="Màu sắc">{p.color}</td>
                                    <td className="p-price" data-label="Giá">{p.price.toLocaleString()}đ</td>
                                    <td data-label="Đánh giá">
                                        <div className="p-rating">
                                            <Star size={14} className="rating-star" />
                                            <span>{p.rating} ({p.reviews} lượt)</span>
                                        </div>
                                    </td>
                                    <td data-label="Hành động">
                                        <div className="action-menu">
                                            <button className="icon-btn" title="Edit" onClick={() => navigate(`/admin/products/edit/${p.id}`)}><Edit size={16} /></button>
                                            <button className="icon-btn delete" onClick={() => setIsDeleteOpen(true)} title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="table-footer">
                    <div className="pagination">
                        <button className="page-btn">&larr;</button>
                        <button className="page-btn">1</button>
                        <button className="page-btn active">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">4</button>
                        <button className="page-btn">5</button>
                        <button className="page-btn">6</button>
                        <span className="page-dots">...</span>
                        <button className="page-btn">24</button>
                        <button className="page-btn">&rarr;</button>
                    </div>
                    <span className="results-count">146 Kết quả</span>
                </div>
            </div>

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete Items">
                <p style={{ marginBottom: '24px', fontSize: '14px' }}>
                    "Bạn có chắc chắn muốn xóa 4 mục đã chọn không?"
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button className="btn-text" onClick={() => setIsDeleteOpen(false)}>Cancel</button>
                    <button className="btn-danger" onClick={() => setIsDeleteOpen(false)}>Delete</button>
                </div>
            </Modal>
        </div>
    );
};

export default Products;

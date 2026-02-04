import React, { useState } from 'react';
import { Search, Download, Plus, Filter, Edit, Trash2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import './Products.css';

const Products = () => {
    const navigate = useNavigate();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const products = [
        { id: 1, name: 'Iphone 13 Pro', stock: '96 sản phẩm', color: 'Xanh Dương', price: '21.990.000 Đ', rating: '5.0 (32 lượt)', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=50&h=50&fit=crop', selected: true },
        { id: 2, name: 'Iphone 14', stock: '56 sản phẩm', color: 'Hồng', price: '11.020.000 Đ', rating: '4.8 (24 lượt)', image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop', selected: true },
        { id: 3, name: 'Iphone 14', stock: '78 sản phẩm', color: 'Xanh Dương', price: '11.020.000 Đ', rating: '5.0 (54 lượt)', image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop', selected: true },
        { id: 4, name: 'Tai nghe AirPad Pro 2', stock: '32 sản phẩm', color: 'Trắng', price: '4.990.000 Đ', rating: '4.5 (31 lượt)', image: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=50&h=50&fit=crop', selected: true },
        { id: 5, name: 'Macbook Air 13 M4 2025', stock: '32 sản phẩm', color: 'Bạc', price: '23.990.000 Đ', rating: '4.9 (22 lượt)', image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=50&h=50&fit=crop', selected: true },
        { id: 6, name: 'Tai nghe AirPad Pro 2', stock: '96 sản phẩm', color: 'Đen', price: '4.990.000 Đ', rating: '5.0 (32 lượt)', image: 'https://images.unsplash.com/photo-1588423770186-80f3ef0819ed?w=50&h=50&fit=crop' },
        { id: 7, name: 'Macbook Air 13 M4 2025', stock: '56 sản phẩm', color: 'Xám', price: '23.990.000 Đ', rating: '4.8 (24 lượt)', image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=50&h=50&fit=crop' },
        { id: 8, name: 'Iphone 13 Pro', stock: 'Hết hàng', color: 'Đen', price: '21.990.000 Đ', rating: '5.0 (54 lượt)', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=50&h=50&fit=crop', outOfStock: true },
        { id: 9, name: 'Macbook Air 13 M4 2025', stock: 'Hết hàng', color: 'không', price: '23.990.000 Đ', rating: '4.5 (31 lượt)', image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?w=50&h=50&fit=crop', outOfStock: true },
        { id: 10, name: 'Iphone 14', stock: 'Hết hàng', color: 'Trắng', price: '11.020.000 Đ', rating: '4.9 (22 lượt)', image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop', outOfStock: true },
    ];

    return (
        <div className="products-page">
            <div className="page-header">
                <h1>Sản phẩm</h1>
                <div className="header-btns">
                    <button className="btn-secondary"><Download size={18} /> Xuất DL</button>
                    <button className="btn-primary" onClick={() => navigate('/products/add')}><Plus size={18} /> Thêm</button>
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
                                <tr key={p.id} className={p.selected ? 'selected' : ''}>
                                    <td><input type="checkbox" checked={p.selected || false} readOnly /></td>
                                    <td className="product-cell">
                                        <img src={p.image} alt={p.name} className="p-img" />
                                        <span className="p-name">{p.name}</span>
                                    </td>
                                    <td>
                                        {p.outOfStock ? (
                                            <span className="badge-out">Hết hàng</span>
                                        ) : (
                                            <span className="p-stock">{p.stock}</span>
                                        )}
                                    </td>
                                    <td className="p-color">{p.color}</td>
                                    <td className="p-price">{p.price}</td>
                                    <td className="p-rating">{p.rating}</td>
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

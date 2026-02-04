import React, { useState } from 'react';
import { Search, Download, Plus, Filter, Edit, Trash2, CheckCircle } from 'lucide-react';
import Modal from '../components/Modal';
import './Orders.css';

const Orders = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false);

    const orders = [
        { id: 'BKT0000001', date: 'May 5, 4:20 PM', customer: 'Tom Anderson', payment: 'Paid', status: 'Ready', total: '115.000 Đ', selected: true },
        { id: 'BKT0000002', date: 'May 5, 4:15 PM', customer: 'Jayden Walker', payment: 'Paid', status: 'Ready', total: '75.000 Đ', selected: true },
        { id: 'BKT0000003', date: 'May 5, 4:15 PM', customer: 'Inez Kim', payment: 'Paid', status: 'Ready', total: '22.000 Đ', selected: true },
        { id: '#23534D', date: 'May 5, 4:12 PM', customer: 'Francisco Henry', payment: 'Paid', status: 'Shipped', total: '75.000 Đ', selected: true },
        { id: '#51323C', date: 'May 5, 4:12 PM', customer: 'Violet Phillips', payment: 'Paid', status: 'Shipped', total: '75.000 Đ' },
        { id: '#35622A', date: 'May 5, 4:12 PM', customer: 'Rosetta Becker', payment: 'Paid', status: 'Shipped', total: '75.000 Đ' },
        { id: '#34232D', date: 'May 5, 4:10 PM', customer: 'Dean Love', payment: 'Paid', status: 'Ready', total: '75.000 Đ' },
        { id: '#56212D', date: 'May 5, 4:08 PM', customer: 'Nettie Tyler', payment: 'Paid', status: 'Ready', total: '75.000 Đ' },
        { id: '#76543E', date: 'May 5, 4:08 PM', customer: 'Lora Weaver', payment: 'Paid', status: 'Shipped', total: '75.000 Đ' },
    ];

    return (
        <div className="orders-page">
            <div className="page-header">
                <h1>Đơn hàng</h1>
                <div className="header-btns">
                    <button className="btn-secondary"><Download size={18} /> Xuất DL</button>
                    <button className="btn-primary" onClick={() => setIsAddOpen(true)}><Plus size={18} /> Thêm</button>
                </div>
            </div>

            <div className="orders-content card">
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

                {/* ... table content remains same ... */}
                <div className="table-container">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Mã đơn hàng</th>
                                <th>Ngày đặt</th>
                                <th>Khách hàng</th>
                                <th>Trạng thái thanh toán</th>
                                <th>Trạng thái</th>
                                <th>Tổng tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) => (
                                <tr key={i} className={order.selected ? 'selected' : ''}>
                                    <td><input type="checkbox" checked={order.selected} readOnly /></td>
                                    <td className="order-id">{order.id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.customer}</td>
                                    <td>
                                        <span className={`badge-payment ${order.payment.toLowerCase()}`}>
                                            {order.payment}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge-status ${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="order-total">{order.total}</td>
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
                    <span className="results-count">274 Kết quả</span>
                </div>
            </div>

            {/* MODALS */}
            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete items">
                <p style={{ marginBottom: '24px', fontSize: '14px' }}>
                    "Bạn có chắc chắn muốn xóa 5 mục đã chọn không?"
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button className="btn-text" onClick={() => setIsDeleteOpen(false)}>Cancel</button>
                    <button className="btn-danger" onClick={() => { setIsDeleteOpen(false); setIsSuccessOpen(true); }}>Delete</button>
                </div>
            </Modal>

            <Modal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} title="">
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <div className="success-icon-wrapper">
                        <CheckCircle size={40} color="#3b82f6" fill="#eff6ff" />
                    </div>
                    <h2 style={{ fontSize: '18px', fontWeight: '700', margin: '16px 0' }}>Export Successfull</h2>
                    <button className="btn-primary" style={{ width: '100%' }} onClick={() => setIsSuccessOpen(false)}>Continue</button>
                </div>
            </Modal>

            <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Thêm thể loại">
                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" placeholder="truyện cười" />
                </div>
                <div className="form-group" style={{ marginTop: '16px' }}>
                    <label>Add Products</label>
                    <select>
                        <option>Choose a Product</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '32px' }}>
                    <button className="btn-text" onClick={() => setIsAddOpen(false)}>Cancel</button>
                    <button className="btn-primary" onClick={() => setIsAddOpen(false)}>Create Category</button>
                </div>
            </Modal>
        </div>
    );
};

export default Orders;

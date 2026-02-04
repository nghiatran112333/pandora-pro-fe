import React from 'react';
import { Search, Filter, MoreHorizontal, Mail, Phone } from 'lucide-react';
import './Customers.css';

const Customers = () => {
    const customers = [
        { name: 'Tom Anderson', email: 'tom@example.com', phone: '+84 123 456 789', orders: 12, spent: '1.200.000 Đ', status: 'Active' },
        { name: 'Jayden Walker', email: 'jayden@example.com', phone: '+84 987 654 321', orders: 8, spent: '850.000 Đ', status: 'Active' },
        { name: 'Ira Meminger', email: 'ira@example.com', phone: '+84 555 666 777', orders: 24, spent: '5.600.000 Đ', status: 'Inactive' },
        { name: 'Kelly Williams', email: 'kelly@example.com', phone: '+84 111 222 333', orders: 5, spent: '450.000 Đ', status: 'Active' },
        { name: 'John Doe', email: 'john@example.com', phone: '+84 000 111 222', orders: 0, spent: '0 Đ', status: 'New' },
    ];

    return (
        <div className="customers-page">
            <div className="page-header">
                <h1>Khách hàng</h1>
                <div className="header-btns">
                    <button className="btn-primary">+ Thêm khách hàng</button>
                </div>
            </div>

            <div className="customers-content card">
                <div className="table-toolbar">
                    <div className="filter-group">
                        <div className="search-bar">
                            <Search size={18} />
                            <input type="text" placeholder="Tìm tên, email..." />
                        </div>
                    </div>
                    <button className="btn-secondary"><Filter size={16} /> Lọc</button>
                </div>

                <div className="table-container">
                    <table className="customers-table">
                        <thead>
                            <tr>
                                <th>Khách hàng</th>
                                <th>Liên hệ</th>
                                <th>Đơn hàng</th>
                                <th>Tổng chi tiêu</th>
                                <th>Trạng thái</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((c, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="customer-cell">
                                            <div className="c-avatar">{c.name.charAt(0)}</div>
                                            <span className="c-name">{c.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="contact-cell">
                                            <span><Mail size={14} /> {c.email}</span>
                                            <span><Phone size={14} /> {c.phone}</span>
                                        </div>
                                    </td>
                                    <td>{c.orders}</td>
                                    <td className="c-spent">{c.spent}</td>
                                    <td>
                                        <span className={`badge-status ${c.status.toLowerCase()}`}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td><button className="icon-btn-ghost"><MoreHorizontal size={18} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;

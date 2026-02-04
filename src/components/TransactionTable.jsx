import React from 'react';
import './TransactionTable.css';

const TransactionTable = () => {
    const transactions = [
        { name: 'Jagarnath S.', date: '03.10.2025', amount: '123.000 Đ', status: 'Paid' },
        { name: 'Anand G.', date: '02.10.2025', amount: '75.000 Đ', status: 'Pending' },
        { name: 'Kartik S.', date: '02.10.2025', amount: '231.000 Đ', status: 'Paid' },
        { name: 'Rakesh S.', date: '02.10.2025', amount: '115.000 Đ', status: 'Pending' },
        { name: 'Anup S.', date: '02.10.2025', amount: '22.000 Đ', status: 'Paid' },
    ];

    return (
        <div className="table-wrapper">
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Ngày</th>
                        <th>Số tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t, i) => (
                        <tr key={i}>
                            <td>{t.name}</td>
                            <td>{t.date}</td>
                            <td>{t.amount}</td>
                            <td>
                                <span className={`status-badge ${t.status.toLowerCase()}`}>
                                    {t.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
        </div>
    );
};

export default TransactionTable;

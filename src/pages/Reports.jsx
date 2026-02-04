import React from 'react';
import { BarChart3, TrendingUp, Users, ShoppingCart, Calendar, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Reports.css';

const Reports = () => {
    const dailyData = [
        { day: 'T2', amount: 4500 },
        { day: 'T3', amount: 5200 },
        { day: 'T4', amount: 4800 },
        { day: 'T5', amount: 6100 },
        { day: 'T6', amount: 5900 },
        { day: 'T7', amount: 7200 },
        { day: 'CN', amount: 6800 },
    ];

    const stats = [
        { title: 'Tổng doanh thu', value: '128.43M Đ', trend: '+12.5%', isIncrease: true, icon: TrendingUp, color: '#3b82f6' },
        { title: 'Đơn hàng', value: '1,240', trend: '+8.2%', isIncrease: true, icon: ShoppingCart, color: '#8b5cf6' },
        { title: 'Khách hàng mới', value: '342', trend: '+14.1%', isIncrease: true, icon: Users, color: '#10b981' },
        { title: 'Tỷ lệ chuyển đổi', value: '3.2%', trend: '-0.5%', isIncrease: false, icon: BarChart3, color: '#f59e0b' },
    ];

    return (
        <div className="reports-page">
            <div className="page-header">
                <div>
                    <h1>Báo cáo & Phân tích</h1>
                    <p>Theo dõi hiệu suất kinh doanh của bạn chi tiết.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-secondary"><Calendar size={16} /> Tùy chỉnh ngày</button>
                    <button className="btn-primary">Xuất PDF</button>
                </div>
            </div>

            <div className="stats-grid">
                {stats.map((s, i) => (
                    <StatCard key={i} {...s} percentage={s.trend} />
                ))}
            </div>

            <div className="reports-grid">
                <div className="report-card card">
                    <div className="card-header">
                        <h2>Doanh thu theo ngày</h2>
                        <span className="subtitle">Tuần này so với tuần trước</span>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={dailyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="amount" radius={[4, 4, 0, 0]} barSize={32}>
                                    {dailyData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 5 ? '#3b82f6' : '#94a3b8'} fillOpacity={index === 5 ? 1 : 0.4} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="report-card card">
                    <div className="card-header">
                        <h2>Top sản phẩm bán chạy</h2>
                    </div>
                    <div className="top-list">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="top-item">
                                <div className="top-rank">{i}</div>
                                <div className="top-info">
                                    <span className="top-name">Sản phẩm #{i} Premium</span>
                                    <span className="top-val">420 đơn hàng</span>
                                </div>
                                <div className="top-progress">
                                    <div className="progress-fill" style={{ width: `${100 - i * 15}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;

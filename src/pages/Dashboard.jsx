import React, { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import TransactionTable from '../components/TransactionTable';
import BestSellers from '../components/BestSellers';
import DashboardSkeleton from '../components/DashboardSkeleton';
import { DollarSign, ShoppingCart, Eye, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, Legend
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    const revenueData = [
        { name: 'Jan', revenue: 4000, orders: 240 },
        { name: 'Feb', revenue: 3000, orders: 198 },
        { name: 'Mar', revenue: 5000, orders: 300 },
        { name: 'Apr', revenue: 4780, orders: 280 },
        { name: 'May', revenue: 5890, orders: 390 },
        { name: 'Jun', revenue: 6390, orders: 420 },
        { name: 'Jul', revenue: 7490, orders: 500 },
    ];

    const categoryData = [
        { name: 'Iphone', value: 45, color: '#3b82f6' },
        { name: 'Laptop', value: 30, color: '#10b981' },
        { name: 'Headphones', value: 15, color: '#f59e0b' },
        { name: 'Others', value: 10, color: '#8b5cf6' },
    ];

    const stats = [
        { title: 'Tổng DT', value: '$10.54M', percentage: '22.45%', isIncrease: true, icon: DollarSign, color: '#3b82f6' },
        { title: 'Đơn hàng', value: '1,056', percentage: '15.34%', isIncrease: true, icon: ShoppingCart, color: '#8b5cf6' },
        { title: 'Người dùng mới', value: '1.650', percentage: '11.45%', isIncrease: true, icon: Users, color: '#10b981' },
        { title: 'Tỷ lệ chuyển đổi', value: '3.42%', percentage: '5.24%', isIncrease: true, icon: TrendingUp, color: '#f59e0b' },
    ];

    if (loading) return <DashboardSkeleton />;

    return (
        <div className="dashboard-container">
            <div className="dashboard-header-simple">
                <div>
                    <h1>Chào buổi sáng, Admin!</h1>
                    <p>Đây là những gì đang diễn ra với cửa hàng của bạn hôm nay.</p>
                </div>
                <button className="export-btn">
                    Tải báo cáo <ArrowUpRight size={16} />
                </button>
            </div>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="charts-main-grid">
                <div className="chart-card card revenue-chart">
                    <div className="card-header">
                        <h2>Doanh thu & Đơn hàng</h2>
                        <select className="chart-select">
                            <option>7 ngày qua</option>
                            <option>30 ngày qua</option>
                        </select>
                    </div>
                    <div className="chart-container-inner">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', backgroundColor: 'var(--card-bg)', color: 'var(--text-main)' }}
                                    itemStyle={{ color: 'var(--text-main)' }}
                                    cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5 5' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card card category-chart">
                    <div className="card-header">
                        <h2>Tỷ trọng danh mục</h2>
                    </div>
                    <div className="chart-container-inner">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={categoryData} layout="vertical" barGap={20}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border-color)" opacity={0.5} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} width={80} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', backgroundColor: 'var(--card-bg)' }}
                                />
                                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="content-grid middle-grid">
                <section className="recent-transactions card">
                    <div className="card-header">
                        <h2>Giao dịch gần đây</h2>
                        <button className="view-all-link">Xem tất cả</button>
                    </div>
                    <TransactionTable />
                </section>

                <section className="best-sellers card">
                    <div className="card-header">
                        <h2>Sản phẩm bán chạy</h2>
                    </div>
                    <BestSellers />
                </section>
            </div>
        </div>
    );
};

export default Dashboard;

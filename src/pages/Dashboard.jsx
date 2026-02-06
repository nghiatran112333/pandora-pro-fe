import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { DollarSign, ShoppingBag, Users, TrendingUp, Package, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import './Dashboard.css';
import { products } from '../data/products';

// Mock Stats that can't be derived purely from product list yet
// In a real app, these would come from an Orders API
const recentOrders = [
    { id: '#ORD-7752', user: 'Hoàng Nam', product: 'iPhone 15 Pro Max', amount: '34.990.000đ', status: 'completed' },
    { id: '#ORD-7753', user: 'Minh Thư', product: 'MacBook Air M2', amount: '27.500.000đ', status: 'processing' },
    { id: '#ORD-7754', user: 'Văn Toàn', product: 'AirPods Pro 2', amount: '5.990.000đ', status: 'pending' },
    { id: '#ORD-7755', user: 'Thanh Hằng', product: 'iPad Air 5', amount: '14.500.000đ', status: 'completed' },
];

const Dashboard = () => {
    // 1. Calculate Real Stats from the Products Data
    const stats = useMemo(() => {
        const totalProducts = products.length;
        const totalStock = products.reduce((acc, p) => acc + parseInt(p.stock || 0), 0);
        // Assume "low stock" is less than 20 units
        const lowStock = products.filter(p => parseInt(p.stock) < 20).length;

        // Mocking Total Revenue since we don't have a real Transaction History
        const totalRevenue = "2.845.000.000đ";

        return { totalProducts, totalStock, lowStock, totalRevenue };
    }, []);

    // 2. Prepare Data for Charts
    // Revenue Chart Data (Mocked Time Series)
    const revenueData = [
        { name: 'T2', value: 4000 },
        { name: 'T3', value: 3000 },
        { name: 'T4', value: 2000 },
        { name: 'T5', value: 2780 },
        { name: 'T6', value: 1890 },
        { name: 'T7', value: 2390 },
        { name: 'CN', value: 3490 },
    ];

    // Category Distribution (Real Calculation)
    const categoryData = useMemo(() => {
        const catMap = {};
        products.forEach(p => {
            // Standardize keys if needed, e.g. uppercase
            const key = p.category || 'Khác';
            catMap[key] = (catMap[key] || 0) + 1;
        });
        return Object.keys(catMap).map((key) => ({
            name: key,
            value: catMap[key]
        }));
    }, []);

    const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899'];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header-simple">
                <div>
                    <h1>Tổng quan</h1>
                    <p>Chào mừng trở lại, Admin! Dưới đây là tình hình kinh doanh hôm nay.</p>
                </div>
                <button className="export-btn">
                    <TrendingUp size={16} /> Xuất báo cáo
                </button>
            </header>

            {/* Top Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card blue">
                    <div className="stat-icon"><DollarSign size={24} /></div>
                    <div className="stat-info">
                        <h3>Doanh thu</h3>
                        <p className="stat-value">{stats.totalRevenue}</p>
                        <span className="stat-change positive"><ArrowUpRight size={14} /> +12.5%</span>
                    </div>
                </div>
                <div className="stat-card purple">
                    <div className="stat-icon"><ShoppingBag size={24} /></div>
                    <div className="stat-info">
                        <h3>Đơn hàng</h3>
                        <p className="stat-value">1,482</p>
                        <span className="stat-change positive"><ArrowUpRight size={14} /> +8.2%</span>
                    </div>
                </div>
                <div className="stat-card green">
                    <div className="stat-icon"><Package size={24} /></div>
                    <div className="stat-info">
                        <h3>Sản phẩm</h3>
                        <p className="stat-value">{stats.totalProducts}</p>
                        <span className="stat-change positive"><ArrowUpRight size={14} /> Kho: {stats.totalStock}</span>
                    </div>
                </div>
                <div className="stat-card orange">
                    <div className="stat-icon"><Clock size={24} /></div>
                    <div className="stat-info">
                        <h3>Cần nhập thêm</h3>
                        <p className="stat-value">{stats.lowStock}</p>
                        <span className="stat-change negative"><ArrowDownRight size={14} /> Sắp hết hàng</span>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="charts-main-grid">
                {/* Area Chart: Revenue */}
                <div className="chart-card">
                    <div className="card-header">
                        <h2>Doanh thu 7 ngày qua</h2>
                        <select className="chart-select">
                            <option>Tuần này</option>
                            <option>Tháng này</option>
                        </select>
                    </div>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} style={{ fontSize: '12px', fill: '#64748B' }} />
                                <YAxis axisLine={false} tickLine={false} tickMargin={10} style={{ fontSize: '12px', fill: '#64748B' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart: Categories */}
                <div className="chart-card">
                    <div className="card-header">
                        <h2>Phân bổ danh mục</h2>
                    </div>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Grid: Transactions & Best Sellers */}
            <div className="middle-grid">
                {/* Recent Orders */}
                <div className="card">
                    <div className="card-header">
                        <h2>Giao dịch gần đây</h2>
                        <button className="view-all-link">Xem tất cả</button>
                    </div>
                    <div className="table-responsive">
                        <table className="simple-table">
                            <thead>
                                <tr>
                                    <th>Đơn hàng</th>
                                    <th>Khách hàng</th>
                                    <th>Sản phẩm</th>
                                    <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map(order => (
                                    <tr key={order.id}>
                                        <td style={{ fontWeight: 600 }}>{order.id}</td>
                                        <td>{order.user}</td>
                                        <td>{order.product}</td>
                                        <td style={{ fontWeight: 600, color: '#0F172A' }}>{order.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Best Sellers (Preview from Product List) */}
                <div className="card">
                    <div className="card-header">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    <div className="best-sellers-list">
                        {products.slice(0, 4).map((p, i) => (
                            <div className="best-seller-item" key={i}>
                                <div className="bs-img-wrapper">
                                    <img src={p.image || 'https://placehold.co/100'} alt={p.name} />
                                </div>
                                <div className="bs-info">
                                    <h4>{p.name}</h4>
                                    <span className="bs-price">{p.price.toLocaleString()}đ</span>
                                </div>
                                <div className="bs-rank">#{i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

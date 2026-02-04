import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Eye, Users } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, percentage, isIncrease, icon: Icon, color }) => {
    return (
        <div className="stat-card">
            <div className="stat-info">
                <span className="stat-title">{title}</span>
                <h2 className="stat-value">{value}</h2>
                <div className={`stat-trend ${isIncrease ? 'up' : 'down'}`}>
                    <span className="trend-value">{percentage}</span>
                    {isIncrease ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                </div>
            </div>
            <div className="stat-icon-wrapper" style={{ backgroundColor: color + '15' }}>
                <Icon size={24} color={color} />
            </div>
        </div>
    );
};

export default StatCard;

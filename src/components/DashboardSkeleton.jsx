import React from 'react';
import './Skeleton.css';

const DashboardSkeleton = () => {
    return (
        <div className="dashboard-skeleton">
            <div className="skeleton-header skeleton-animate"></div>
            <div className="skeleton-stats-grid">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="skeleton-stat-card skeleton-animate"></div>
                ))}
            </div>
            <div className="skeleton-charts-grid">
                <div className="skeleton-chart-card skeleton-animate"></div>
                <div className="skeleton-chart-card skeleton-animate"></div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;

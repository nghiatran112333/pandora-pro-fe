import React from 'react';
import './Skeleton.css';

const ProductSkeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-img skeleton-animate"></div>
            <div className="skeleton-info">
                <div className="skeleton-title skeleton-animate"></div>
                <div className="skeleton-price skeleton-animate"></div>
                <div className="skeleton-rating skeleton-animate"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;

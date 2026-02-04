import React from 'react';
import './BestSellers.css';

const BestSellers = () => {
    const products = [
        { name: 'Đắc nhân tâm', price: '75.000 Đ', sales: 204, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100' },
        { name: 'Đắc nhân tâm', price: '75.000 Đ', sales: 155, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100' },
        { name: 'Đắc nhân tâm', price: '75.000 Đ', sales: 120, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100' },
        { name: 'Đắc nhân tâm', price: '75.000 Đ', sales: 204, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100' },
        { name: 'Đắc nhân tâm', price: '75.000 Đ', sales: 155, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100' },
    ];

    return (
        <div className="best-sellers-list">
            <div className="list-header">
                <span>Name</span>
                <span>Price</span>
                <span>Số lượng</span>
            </div>
            {products.map((p, i) => (
                <div key={i} className="product-item">
                    <div className="product-info">
                        <img src={p.image} alt={p.name} className="product-img" />
                        <span className="product-name">{p.name}</span>
                    </div>
                    <span className="product-price">{p.price}</span>
                    <span className="product-sales">{p.sales}</span>
                </div>
            ))}

            {/* Pagination shared visual style */}
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

export default BestSellers;

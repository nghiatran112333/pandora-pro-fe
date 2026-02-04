import React from 'react';
import { ChevronLeft, Plus, MoreVertical, Edit2, Trash2, GripVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CategoryDetail.css';

const CategoryDetail = () => {
    const navigate = useNavigate();
    const products = [
        { name: 'Iphone 14', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 12', img: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=50&h=50&fit=crop', showActions: true },
        { name: 'Iphone 14', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 14', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 14 Pro', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 14', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 13', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=50&h=50&fit=crop' },
        { name: 'Iphone 11', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba30a8?w=50&h=50&fit=crop' },
        { name: 'Iphone 14', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 12', img: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=50&h=50&fit=crop' },
        { name: 'Iphone 14', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=50&h=50&fit=crop' },
        { name: 'Iphone 13 Pro', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=50&h=50&fit=crop' },
    ];

    return (
        <div className="cat-detail-page">
            <div className="back-link" onClick={() => navigate('/categories')}>
                <ChevronLeft size={16} />
                <span>back</span>
            </div>

            <div className="page-header">
                <h1>Iphone</h1>
                <div className="header-btns">
                    <button className="btn-secondary" onClick={() => navigate('/categories')}>Cancel</button>
                    <button className="btn-primary">Save</button>
                </div>
            </div>

            <div className="cat-detail-grid">
                <div className="cat-main">
                    <section className="product-list-card card">
                        <div className="list-title">
                            <h2>Products</h2>
                            <span>12</span>
                        </div>

                        <div className="product-items">
                            {products.map((p, i) => (
                                <div key={i} className="list-item">
                                    <div className="item-left">
                                        <GripVertical size={18} color="#cbd5e1" className="drag-handle" />
                                        <img src={p.img} alt={p.name} className="item-img" />
                                        <span className="item-name">{p.name}</span>
                                    </div>
                                    <div className="item-right">
                                        {p.showActions ? (
                                            <div className="item-actions">
                                                <Edit2 size={16} color="#475569" cursor="pointer" />
                                                <Trash2 size={16} color="#475569" cursor="pointer" />
                                            </div>
                                        ) : (
                                            <MoreVertical size={18} color="#cbd5e1" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="add-item-btn">
                            <Plus size={18} />
                            <span>Thêm</span>
                        </button>
                    </section>
                </div>

                <div className="cat-sidebar">
                    <aside className="card visibility-card">
                        <h2>Category Visibility</h2>
                        <div className="toggle-group">
                            <div className="toggle active"></div>
                            <span>Visible on site</span>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="footer-save-bar">
                <button className="btn-secondary" onClick={() => navigate('/categories')}>Cancel</button>
                <button className="btn-primary">Save</button>
            </div>
        </div>
    );
};

export default CategoryDetail;

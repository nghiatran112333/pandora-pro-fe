import React from 'react';
import { Plus, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    const navigate = useNavigate();
    const categories = [
        { title: 'Điện Thoại', count: '24 sản phẩm', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=300&fit=crop' },
        { title: 'Mini Speakers', count: '12 sản phẩm', image: 'https://images.unsplash.com/photo-1608156639585-34052e81bd9a?w=300&h=300&fit=crop', showEdit: true },
        { title: 'Ipad', count: '43 sản phẩm', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop' },
        { title: 'HeadPhones', count: '31 sản phẩm', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
        { title: 'Laptop', count: '26 sản phẩm', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop' },
        { title: 'Tivi', count: '52 sản phẩm', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop' },
        { title: 'Bàn Phím', count: '24 sản phẩm', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop' },
        { title: 'Đồng hồ thông minh', count: '52 sản phẩm', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
        { title: 'Chuột', count: '26 sản phẩm', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop' },
    ];

    return (
        <div className="categories-page">
            <div className="page-header">
                <h1>Danh mục thể loại</h1>
                <button className="btn-primary" onClick={() => navigate('/categories/iphone')}>
                    <Plus size={18} /> Thêm
                </button>
            </div>

            <div className="categories-grid">
                {categories.map((cat, i) => (
                    <div key={i} className="category-card card" onClick={() => navigate('/categories/iphone')}>
                        <div className="cat-img-wrapper">
                            <img src={cat.image} alt={cat.title} />
                            {(cat.showEdit || true) && (
                                <div className="cat-overlay">
                                    <button className="edit-overlay-btn">
                                        <Edit3 size={16} /> Edit
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="cat-info">
                            <h3>{cat.title}</h3>
                            <span>{cat.count}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

import React, { useEffect, useState } from 'react';
import { ChevronLeft, CloudDownload, ChevronDown } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddProduct.css'; // Re-use the same CSS

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    // Mock State for Form Data
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        discountPrice: '',
        stock: '',
        category: 'Iphone'
    });

    useEffect(() => {
        // Simulate fetching product details by ID
        // In real app: fetch(`/api/products/${id}`)
        setTimeout(() => {
            setFormData({
                name: 'Apple iPhone 15 Pro Max',
                description: 'Titanium design, A17 Pro chip, 48MP Main camera.',
                price: '34990000',
                discountPrice: '32990000',
                stock: '50',
                category: 'Iphone'
            });
            setIsLoading(false);
        }, 800);
    }, [id]);

    const handleSave = () => {
        // Simulate API Update
        console.log('Update Product:', id, formData);
        navigate('/products');
    };

    if (isLoading) {
        return <div style={{ padding: '40px', textAlign: 'center' }}>Loading product details...</div>;
    }

    return (
        <div className="add-product-page">
            <div className="back-link" onClick={() => navigate('/products')}>
                <ChevronLeft size={16} />
                <span>back</span>
            </div>

            <div className="page-header">
                <h1>Sửa sản phẩm #{id}</h1>
                <div className="header-btns">
                    <button className="btn-secondary" onClick={() => navigate('/products')}>Cancel</button>
                    <button className="btn-primary" onClick={handleSave}>Update Product</button>
                </div>
            </div>

            <div className="add-content-grid">
                <div className="add-main-form">
                    <section className="form-card card">
                        <h2>Thông tin</h2>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mô tả sản phẩm</label>
                            <textarea
                                rows={6}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            ></textarea>
                        </div>
                    </section>

                    <section className="form-card card">
                        <h2>Images</h2>
                        <div className="upload-area">
                            <CloudDownload size={32} color="#3b82f6" />
                            <div className="current-images" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                {/* Mock existing image */}
                                <div style={{ width: '60px', height: '60px', background: '#f1f5f9', borderRadius: '8px' }}></div>
                            </div>
                            <button className="btn-text" style={{ margin: '12px 0' }}>Change Image</button>
                        </div>
                    </section>

                    <section className="form-card card">
                        <h2>Giá</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Giá gốc</label>
                                <input
                                    type="text"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá khi được khuyến mãi</label>
                                <input
                                    type="text"
                                    value={formData.discountPrice}
                                    onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="add-sidebar">
                    <aside className="card fixed-card">
                        <h2>Danh mục</h2>
                        <div className="category-list">
                            {['Iphone', 'Tivi', 'Ipad', 'HeadPhones'].map(cat => (
                                <label key={cat} className="check-item">
                                    <input
                                        type="checkbox"
                                        checked={cat === formData.category}
                                        onChange={() => setFormData({ ...formData, category: cat })}
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;

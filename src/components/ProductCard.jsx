import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';


const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
        showToast(`Đã thêm ${product.name} vào giỏ hàng!`, 'success');
    };



    return (
        <div className="product-card-figma" onClick={() => navigate('/product-detail')}>
            <div className="p-img-box-figma">

                <button className="heart-btn" aria-label="Add to Wishlist">
                    <Heart size={18} />
                </button>
                <button
                    className="cart-btn"
                    onClick={handleAddToCart}
                    aria-label="Add to Cart"
                >
                    <ShoppingCart size={18} />
                </button>
                <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="p-info-figma">
                <h3>{product.name}</h3>
                <div className="p-price-figma">
                    <span className="current">{product.price.toLocaleString()}đ</span>
                    {product.oldPrice && (
                        <span className="old">{product.oldPrice.toLocaleString()}đ</span>
                    )}
                </div>
                <div className="p-rating-figma">
                    {[...Array(5)].map((_, idx) => (
                        <Star
                            key={idx}
                            size={14}
                            fill={idx < product.rating ? "#FFAD33" : "none"}
                            color="#FFAD33"
                        />
                    ))}
                    <span className="reviews">({product.reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { showToast } = useToast();
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('pandora_cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('pandora_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item);
            }
            return [...prev, { ...product, quantity: product.quantity || 1 }];
        });
        showToast(`Đã thêm ${product.name} vào giỏ hàng!`, 'success');
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
        showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const updateItemQuantity = (id, newQuantity) => {
        setCart(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
    };

    const clearCart = () => setCart([]);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity, updateItemQuantity, clearCart, subtotal, cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const { showToast } = useToast();
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('pandora_wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('pandora_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist(prev => {
            if (prev.find(item => item.id === product.id)) {
                showToast(`${product.name} đã có trong danh sách yêu thích!`, 'info');
                return prev;
            }
            showToast(`Đã thêm ${product.name} vào danh sách yêu thích!`, 'success');
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist(prev => prev.filter(item => item.id !== id));
        showToast('Đã xóa khỏi danh sách yêu thích', 'info');
    };

    const toggleWishlist = (product) => {
        const isExist = wishlist.find(item => item.id === product.id);
        if (isExist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const wishlistCount = wishlist.length;

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist, wishlistCount }}>
            {children}
        </WishlistContext.Provider>
    );
};

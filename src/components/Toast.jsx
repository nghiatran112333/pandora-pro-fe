import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X, Info, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const icons = {
        success: <CheckCircle size={20} />,
        error: <AlertCircle size={20} />,
        info: <Info size={20} />,
        warning: <AlertTriangle size={20} />
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className={`toast-item ${type}`}
        >
            <div className="toast-icon">
                {icons[type] || icons.success}
            </div>
            <div className="toast-content">{message}</div>
            <button className="toast-close" onClick={onClose} aria-label="Close">
                <X size={16} />
            </button>
            <motion.div
                className="toast-progress"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
            />
        </motion.div>
    );
};

export const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <div className="toast-container">
            <AnimatePresence mode="popLayout">
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        {...toast}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toast;

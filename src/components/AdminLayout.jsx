import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.98,
        filter: 'blur(4px)'
    },
    in: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)'
    },
    out: {
        opacity: 0,
        scale: 1.02,
        filter: 'blur(4px)'
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3
};

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="layout">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="main-content">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="dashboard-container">
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <Outlet />
                    </motion.div>
                </main>
                {/* Mobile Overlay */}
                {isSidebarOpen && (
                    <div
                        className="sidebar-overlay"
                        onClick={() => setIsSidebarOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            zIndex: 40,
                            backdropFilter: 'blur(4px)'
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminLayout;

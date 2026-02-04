import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import PublicFooter from './PublicFooter';
import ScrollToTop from './ScrollToTop';
import FloatingContact from './FloatingContact';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: -20
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
};

const PublicLayout = () => {
    return (
        <div className="layout-public">
            <Navbar />
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: '100%' }}
            >
                <Outlet />
            </motion.div>
            <ScrollToTop />
            <FloatingContact />
            <PublicFooter />
        </div>
    );
};

export default PublicLayout;

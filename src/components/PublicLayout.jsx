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
    duration: 0.4
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

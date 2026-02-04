import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: -10 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 10 }
};

const AdminLayout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                <main className="dashboard-container">
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;

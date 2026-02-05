import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: -10 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 10 }
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
                        transition={{ duration: 0.3 }}
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

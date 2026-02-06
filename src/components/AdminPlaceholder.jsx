import React from 'react';
import { Construction } from 'lucide-react';
import '../pages/Dashboard.css'; // Ensure we get the shared styles

const AdminPlaceholder = ({ title }) => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header-simple">
                <div>
                    <h1>{title}</h1>
                    <p>Tính năng đang được phát triển</p>
                </div>
            </header>

            <div className="card" style={{
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '20px'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Construction size={40} color="#3b82f6" />
                </div>
                <div style={{ maxWidth: '400px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>Đang xây dựng</h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Chúng tôi đang làm việc chăm chỉ để hoàn thiện tính năng <strong>{title}</strong>.
                        Vui lòng quay lại sau!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminPlaceholder;

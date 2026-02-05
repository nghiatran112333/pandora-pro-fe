import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('pandora_user');
        return saved ? JSON.parse(saved) : null;
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in on mount
        const savedUser = localStorage.getItem('pandora_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('pandora_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('pandora_user');
        }
    }, [user]);

    const login = (email, password) => {
        // Simulate login - In real app, this would call API
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Demo accounts
                if (email === 'admin@pandora.com' && password === 'admin123') {
                    const adminUser = {
                        id: 1,
                        email: 'admin@pandora.com',
                        name: 'Admin User',
                        role: 'admin',
                        avatar: 'https://ui-avatars.com/api/?name=Admin&background=6366f1&color=fff'
                    };
                    setUser(adminUser);
                    resolve(adminUser);
                } else if (email && password) {
                    // Any other email/password = regular user
                    const regularUser = {
                        id: 2,
                        email: email,
                        name: email.split('@')[0],
                        role: 'user',
                        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=22c55e&color=fff`
                    };
                    setUser(regularUser);
                    resolve(regularUser);
                } else {
                    reject(new Error('Email và mật khẩu không được để trống'));
                }
            }, 1000);
        });
    };

    const register = (name, email, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    id: Date.now(),
                    email: email,
                    name: name,
                    role: 'user',
                    avatar: `https://ui-avatars.com/api/?name=${name}&background=22c55e&color=fff`
                };
                setUser(newUser);
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('pandora_user');
        localStorage.removeItem('isAuthenticated');
    };

    const isAuthenticated = !!user;
    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            isAuthenticated,
            isAdmin,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

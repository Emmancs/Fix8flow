import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo mode: auto-login a fake user so the app can be explored without backend auth
    const demoUser = {
      id: 'demo-user',
      email: 'demo@example.com',
      name: 'Demo User'
    };
    setUser(demoUser);
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // In demo mode we just set a local user – no API call
    const demoUser = {
      id: 'demo-user',
      email,
      name: 'Demo User'
    };
    setUser(demoUser);
    return { user: demoUser, token: null };
  };

  const register = async (email, password, name) => {
    // In demo mode we just set a local user – no API call
    const demoUser = {
      id: 'demo-user',
      email,
      name: name || 'Demo User'
    };
    setUser(demoUser);
    return { user: demoUser, token: null };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


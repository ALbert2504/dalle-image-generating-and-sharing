import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage('authToken', null);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
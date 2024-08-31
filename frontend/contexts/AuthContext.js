// File: contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isDonorLoggedIn, setIsDonorLoggedIn] = useState(false);
  const [isDoneeLoggedIn, setIsDoneeLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const loginDonor = (donor) => {
    setIsDonorLoggedIn(true);
    setIsDoneeLoggedIn(false);
    setCurrentUser(donor);
  };

  const loginDonee = (donee) => {
    setIsDoneeLoggedIn(true);
    setIsDonorLoggedIn(false);
    setCurrentUser(donee);
  };

  const logout = () => {
    setIsDonorLoggedIn(false);
    setIsDoneeLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{
      isDonorLoggedIn,
      isDoneeLoggedIn,
      currentUser,
      loginDonor,
      loginDonee,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
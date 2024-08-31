import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isDonorLoggedIn, setIsDonorLoggedIn] = useState(false);
  const [isDoneeLoggedIn, setIsDoneeLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentDonee, setCurrentDonee] = useState(null);

  return (
    <AuthContext.Provider value={{
      isDonorLoggedIn,
      setIsDonorLoggedIn,
      isDoneeLoggedIn,
      setIsDoneeLoggedIn,
      currentUser,
      setCurrentUser,
      currentDonee,
      setCurrentDonee
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
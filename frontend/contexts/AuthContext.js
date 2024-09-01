import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isVolunteerLoggedIn, setIsVolunteerLoggedIn] = useState(false);
  const [isDonorLoggedIn, setIsDonorLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const loginVolunteer = (volunteer) => {
    setIsVolunteerLoggedIn(true);
    setCurrentUser(volunteer);
  };

  const loginDonor = (donor) => {
    setIsDonorLoggedIn(true);
    setCurrentUser(donor);
  };

  const logout = () => {
    setIsVolunteerLoggedIn(false);
    setIsDonorLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{
      isVolunteerLoggedIn,
      isDonorLoggedIn,
      currentUser,
      loginVolunteer,
      loginDonor,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

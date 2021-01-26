import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// import swal from 'sweetalert';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get('/api/users/me', { withCredentials: true })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => {
        //   swal('Oops!', error.toString());
        });
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      swal(response.data.message, 'You have signed out!', 'success').then(() =>
        history.push('/login')
      );
    } catch (error) {
      swal('Oops!', 'Something went wrong.');
    }
  };
  return <Nav.Link eventKey="link-4" onClick={handleSignOut}>Logout</Nav.Link>
  ;
};

export default Logout;
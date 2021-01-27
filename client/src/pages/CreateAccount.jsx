import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
// import swal from 'sweetalert';

const CreateAccount = ({history}) => {
  const [formData, setFormData] = useState('');

  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData)
    axios
      .post('/api/users', formData)
      .then((res) => {
        sessionStorage.setItem('user', res.data);
        console.log('here is', res.data)
        setCurrentUser(res.data);
        history.push('/userhome');
      })
      .catch((error) => {
        // swal('SignUp Error: ', error.toString());
      });
  };

    return (
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1>Juan's Movie Station</h1>
      <Form style={{ width: 300 }} onSubmit={handleSignUp}>
        <Form.Group>
          <Form.Label htmlFor="fullName">Full Name</Form.Label>
          <Form.Control
            id="fullName"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/login">
        Already have an account? Log in.
      </Link>
    </Container>
  );
}

export default CreateAccount;

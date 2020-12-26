import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { registerUser } from './actions';

import { Nav,Navbar } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    navButtons: {
      fontFamily: 'Bebas Neue',
      '&:hover': {
        color:'#c26d5c'
     },
    }

  }));

function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    console.log(username);
    console.log(password);
    console.log(fullname);
    console.log(birthday);
    console.log(address);
    console.log(phoneNumber);
    console.log(email);
    registerUser(username, password, fullname, birthday, address, phoneNumber, email);
    event.preventDefault();
  }

  return (
    <div className="Login">
        <Navbar className="brand-bar" style={{justifyContent:'space-between'}}>
          <Navbar.Brand href="/">Stella Boutique</Navbar.Brand>
            <div>
            <Button href="/Login" className={classes.navButtons} variant="contained" color="primary">
              login
            </Button>
            <Button href="/Register" className={classes.navButtons} variant="contained" color="primary">
              register
            </Button>
            </div>
      </Navbar>  
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="fullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="birthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="name"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="cellphone">
          <Form.Label>Cellphone</Form.Label>
          <Form.Control
            type="name"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (username, password, fullname, birthday, address, phoneNumber, email) => dispatch(registerUser(username, password, fullname, birthday, address, phoneNumber, email))
  }
}

export default connect(null, mapDispatchToProps)(Register);
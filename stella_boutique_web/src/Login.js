import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    navButtons: {
      fontFamily: 'Bebas Neue',
      '&:hover': {
        color:'#c26d5c'
     },
    }

  }));


function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }
  
  const dispatch = useDispatch();
  
  function handleSubmit(event) {
    dispatch({
      type: "LOGIN_USER",
      username: username,
      password: password
    })
    event.preventDefault();
  }

  function admin() {
    return email == "admin" && password == "admin";
  }
  let button = null;
  if (admin()) {
    button = <Button href="/ProductManage" className="LoginBtn" block size="lg" variant="outline-secondary" disabled={!validateForm()}>
    Login
  </Button>
  } else {
    button = <Button href="/" className="LoginBtn" block size="lg" variant="outline-secondary" disabled={!validateForm()}>
    Login
  </Button>
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
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Button className="LoginBtn" block size="lg" variant="outline-secondary" type="submit" value="Submit">
          Login
        </Button>
      </Form>
    </div>
    
  );
}

export default Login;

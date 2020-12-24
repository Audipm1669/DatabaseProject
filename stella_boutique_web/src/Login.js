import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { loginUser } from './actions'
import { Nav,Navbar } from 'react-bootstrap';

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
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  function submit() {
    console.log(userID)
    console.log(password)
    loginUser(
      userID,
      password
    )

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
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
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
        <Button className="LoginBtn" block size="lg" variant="outline-secondary" >
          Login
        </Button>
      </Form>
    </div>
    
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (userID, password) => dispatch(loginUser(userID, password))
  }
}

export default connect(null, mapDispatchToProps)(Login);

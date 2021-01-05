import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login.css";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { loginUser , getOrderList , getLikeItemList} from '../actions';

const useStyles = makeStyles((theme) => ({
    navButtons: {
      fontFamily: 'Bebas Neue',
      '&:hover': {
        color:'#c26d5c'
     },
    }
  })); 



function AddDiscount(props) {
  const [code, setCode] = useState("");
 
  function handleSubmit(event) {

    console.log(code);
    
    // props.loginUser(imgUrl,name,price,description);
    event.preventDefault();

  }

  return (
    <div className="Login">
      <Form name="form">
        
        <Form.Group size="lg" controlId="code">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Form.Group>
        
        <Button className="LoginBtn" block size="lg" variant="outline-secondary" onClick={handleSubmit} value="Submit">
          ADD DISCOUNT
        </Button>
      </Form>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    // LoginUser: state.LoginUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // loginUser: (username,password,userID) => {
    //   dispatch(loginUser(username,password,userID))
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddDiscount);

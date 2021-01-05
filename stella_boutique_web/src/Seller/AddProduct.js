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



function AddProduct(props) {
  var imgUrl = "/img/";
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  var fileInput = React.createRef();


  var input = document.getElementsByTagName("input")[0];
  var binaryData = [];
  binaryData.push(input);
  
 
  function handleSubmit(event) {
    var src = `${fileInput.current.files[0].name}`;
    console.log(src);
    imgUrl = imgUrl+src;
    console.log(imgUrl);
    
    // props.loginUser(imgUrl,name,price,description);
    event.preventDefault();

  }


  let button = null;

  return (
    <div className="Login">
      <Form name="form">
        <Form.Group size="lg" controlId="picform">
        <Form.Label>Product Picture</Form.Label>
            <input
                accept="image/*"
                style={{ margin:"10px 0" }}
                id="raised-button-file"
                multiple
                type="file"
                ref={fileInput}
                className="pic"
            />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button className="LoginBtn" block size="lg" variant="outline-secondary" onClick={handleSubmit} value="Submit">
          ADD
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

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);

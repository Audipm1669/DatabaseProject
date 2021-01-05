import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login.css";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addDiscount } from '../actions';

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
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 
  function handleSubmit(event) {
    console.log(value);
    console.log(code);
    
    props.addDiscount(value,code,name,startDate,endDate);
    event.preventDefault();

  }

  return (
    <div className="Login">
     
      <Form name="form">
        <h2>ADD DISCOUNT</h2><Form.Group size="lg" controlId="code">
          <Form.Label>Discount Code</Form.Label>
          <Form.Control
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            step="0.01"
          />
        </Form.Group>

        <Form.Group size="lg" controlId="value">
          <Form.Label>Discount Percentage</Form.Label>
          <Form.Control
            type="number"
            placeholder="(only number. example:0.8)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="name">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="(YYYY/MM/DD)"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group size="lg" controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="text"            
            placeholder="(YYYY/MM/DD)"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>
        
        <Button className="LoginBtn" block size="lg" variant="outline-secondary" onClick={handleSubmit} value="Submit">
          ADD DISCOUNT
        </Button>
      </Form>

    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addDiscount: (value,code,name,startDate,endDate) => {
      dispatch(addDiscount(value,code,name,startDate,endDate))
    }
  }
}

export default connect(null,mapDispatchToProps)(AddDiscount);

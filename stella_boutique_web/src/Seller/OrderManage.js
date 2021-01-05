import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';


import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

import { getOrderList , updateStatus} from '../actions';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  table: {
    margin:'100px',
    minWidth: 650,
    width:'80%'
  },
});



function OrderManage(props) {
  var sale2020 = 0;
  var sale2021 = 0;
  var y = 0;
  
  const classes = useStyles();
  const history = useHistory();

  function getstatus (status) {
    if (status == 0)
    { return "new order"}
    else if (status == 1) 
    { return "shipout" }
    else 
    { return "done" }
  }

  function getsale (year,sale) {
    console.log(year)
    y = parseInt(year) - 2000
    console.log(y)
    console.log(sale)
    if (y == 20)
    { sale2020 += sale }
    else if (y == 21) 
    { sale2021 += sale }
    else 
    { }
   console.log(sale2020)
   console.log(sale2021)

    return sale

   
  }

  const processOrder = playload => {
    console.log("update order "+playload.orderID)
    props.updateStatus(playload.orderID,1)
    window.location.href = "/OrderManage"
  }

  const canProcess = playload => {
    console.log("Check Process "+playload.orderID)
    if(playload.status != 0)
      return true;
  }
  console.log("----------")
  console.log(sale2020)
  var data = [
    
  ];



  return (
    
    
    <React.Fragment>
      <main>
        <div style={{ height: 400, width: '90%' , margin: '60px'}}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">No</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.sellerOrder.map((order,index) => (
                  <TableRow align="left" key={index}>
                    <TableCell component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell align="right">{getstatus(order.status)}</TableCell>
                    <TableCell align="right">{order.totalPrice}</TableCell>
                    <TableCell align="right">
                      <Button onClick={() => processOrder(order)} disabled = {canProcess(order)} >Process</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </React.Fragment>
  );
}
function mapStateToProps(state) {
  return {
    sellerOrder: state.sellerOrder
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getOrderList: (userID) => {
      dispatch(getOrderList(userID))
    },
    updateStatus: (orderID, status) => {
      dispatch(updateStatus(orderID, status))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderManage);
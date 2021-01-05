import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

import { getOrderList} from '../actions';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Date', headerName: 'Date', width: 130 },
  { field: 'State', headerName: 'State', width: 130 },
  {
    field: 'Cost',
    headerName: 'Cost',
    type: 'number',
    width: 90,
  },
];



const useStyles = makeStyles({
  table: {
    margin:'100px',
    minWidth: 650,
    width:'80%'
  },
});



function MyOrder(props) {
  const classes = useStyles();
  const history = useHistory();

  function GoToMyLikes(){
    history.push("/MyLike")
  }
  function GoToHistory(){
    console.log("get order")
    console.log(localStorage.getItem("userID"))
    props.getOrderList(localStorage.getItem("userID"))
    history.push("/MyOrder")
  }

  function getstatus (status) {
    if (status == 0)
    { return "new order"}
    else if (status == 1)
    { return "checkout" }
    else if (status == 2) 
    { return "shipout" }
    else 
    { return "done" }
  }

  return (
    <React.Fragment>
        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <BrowserRouter>
              <Nav.Link onClick = {GoToMyLikes}>LIKE</Nav.Link>
              <Nav.Link onClick = {GoToHistory}>ORDER</Nav.Link>
            </BrowserRouter>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userOrderList.map((order,index) => (
            <TableRow align="left" key={index}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell align="right">{getstatus(order.status)}</TableCell>
              <TableCell align="right">{order.totalPrice}</TableCell>
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
    userOrderList: state.userOrderList
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getOrderList: (userID) => {
      dispatch(getOrderList(userID))
    },,
    getLikeItemList: (userID) => {
      dispatch(getLikeItemList(userID))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyOrder);
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
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  // },
];

const rows = [
  { id: 1, Date: '2020-11-07', State: 'Delivered', Cost: 1100 },
  { id: 2, Date: '2020-12-07', State: 'Delivered', Cost: 800 },
  { id: 3, Date: '2020-11-22', State: 'Ordered', Cost: 760 },
  { id: 4, Date: '2020-11-29', State: 'Ordered', Cost: 600 },
  { id: 5, Date: '2020-11-19', State: 'Ordered', Cost:  2000},
  { id: 6, Date: '2020-12-03', State: 'Ordered', Cost: 2200 },
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
              <TableCell align="right">{order.status}</TableCell>
              <TableCell align="right">{order.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */}
      </div>

      <Button style={{ margin: '0 60px'}} color="secondary">Cancel Order</Button>
        
    
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
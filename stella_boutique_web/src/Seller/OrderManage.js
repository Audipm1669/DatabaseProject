import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

import {
  BrowserRouter,
} from 'react-router-dom';

import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


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
  { id: 1, Date: '2020-11-07', State: 'Jon', Cost: 35 },
  { id: 2, Date: '2020-12-07', State: 'Cersei', Cost: 42 },
  { id: 3, Date: '2020-11-22', State: 'Jaime', Cost: 45 },
  { id: 4, Date: '2020-11-29', State: 'Arya', Cost: 16 },
  { id: 5, Date: '2020-11-19', State: 'Daenerys', Cost: null },
  { id: 6, Date: '2020-12-03', State: null, Cost: 150 },
  { id: 7, Date: '2020-11-07', State: 'Ferrara', Cost: 44 },
  { id: 8, Date: '2020-11-07', State: 'Rossini', Cost: 36 },
  { id: 9, Date: '2020-11-07', State: 'Harvey', Cost: 65 },
];


const useStyles = makeStyles({
  table: {
    margin:'100px',
    minWidth: 650,
    width:'80%'
  },
});



export default function OrderManage() {
  const classes = useStyles();


  return (
    
    
    <React.Fragment>

        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <BrowserRouter>
              <Nav.Link href="/ProductManage">PRODUCT</Nav.Link>
              <Nav.Link href="/OrderManage">ORDER</Nav.Link>
              <Nav.Link href="/MemberManage">MEMBER</Nav.Link>
            </BrowserRouter>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <main>

      <div style={{ height: 400, width: '90%' , margin: '60px'}}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
        
    
      </main>
    </React.Fragment>
  );
}
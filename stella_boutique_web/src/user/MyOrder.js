import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

import { BrowserRouter} from 'react-router-dom';

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



export default function MyOrder() {
  const classes = useStyles();


  return (
    
    
    <React.Fragment>
        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <BrowserRouter>
              <Nav.Link href="/MyLike">LIKE</Nav.Link>
              <Nav.Link href="/MyOrder">ORDER</Nav.Link>
            </BrowserRouter>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <main>

      <div style={{ height: 400, width: '90%' , margin: '60px'}}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>

      <Button style={{ margin: '0 60px'}} color="secondary">Cancel Order</Button>
        
    
      </main>
    </React.Fragment>
  );
}
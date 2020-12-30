import React,{Component,useState } from 'react';
import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';

import {
    BrowserRouter,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    homecoverdiv: {
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
    },
    homecover: {
      width:'100%',
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      backgroundColor: '#f7ebea',
    },
    navButtons: {
      fontFamily: 'Bebas Neue',
      '&:hover': {
        color:'#c26d5c'
     },
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    iconColor: {
      backgroundColor:'#9e7d7a',
    }
  }));
  
  const cart = [];
  
  export default function MyNavbar() {
    const [ state = {
            modal: false,
            },setState] = useState(0);

    const toggle = () => {
      setState({
        modal: !state.modal,
        loginStatus: state.loginStatus,
      });
    }

    const [loginStatus, setLoginStatus] = React.useState(true);
    const classes = useStyles();
   
    const useEffect = () => {
      document.title = "home";
    };

    const [displayName] = useState(localStorage.getItem("displayName"));


  
    return (
      <React.Fragment>
        <Navbar className="brand-bar" style={{justifyContent:'space-between'}}>
          <Navbar.Brand href="/">Stella Boutique</Navbar.Brand>
            <div>
              <p>Hi, {displayName}</p>
            </div>
            <div>
              <Button color="secondary" onClick={toggle}>購物車({cart.length})</Button>
              <Button href="/Login" className={classes.navButtons} variant="contained" color="primary">
                login
              </Button>
              <Button href="/Register" className={classes.navButtons} variant="contained" color="primary">
                register
              </Button>
            </div>
        </Navbar>
        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <BrowserRouter>
              <Nav.Link href="/Newarrivals">NEW ARRIVALS</Nav.Link>
              <Nav.Link href="/Onsale">ON SALE</Nav.Link>
              <Nav.Link href="/Tops">TOPS</Nav.Link>
              <Nav.Link href="/Bottom">BOTTOMS</Nav.Link>
              <Nav.Link href="/Jacket">OUTERWEAR</Nav.Link>
              <Nav.Link href="/Dresses">DRESSES & JUMPSUITS</Nav.Link>
            </BrowserRouter>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>

        <Modal isOpen={state.modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>購物車</ModalHeader>
          <ModalBody>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>品項</th>
                        <th>價格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>150</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>900</td>
                    </tr>
                </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>結帳</Button>{' '}
            <Button color="secondary" onClick={toggle}>取消</Button>
          </ModalFooter>
        </Modal>
        
        
      </React.Fragment>
    );
  }
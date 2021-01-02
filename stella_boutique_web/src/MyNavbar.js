import React,{ useState,useEffect } from 'react';
import { Nav ,Navbar ,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import { connect } from 'react-redux';
import { enterWeb, setUser} from './actions';
import { useHistory } from 'react-router-dom';

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
  
function MyNavbar(props) {
    const [ state = {
            cart: false,
            },setState] = useState(0);
    const handleCart = () => {
      setState({
        cart: !state.cart,
      });
    }
    const [userID,setUserID] = useState(localStorage.getItem("userID"));
    const [username,setUername] = useState(localStorage.getItem("username"));
    const classes = useStyles();

    useState(() => {
      props.enterWeb();
      props.setUser(username,userID);
    });

    function handleLogout() {
      localStorage.clear();
      window.location.href = '/';
    }

    const history = useHistory();

    const goToNewArrival = () => {
      history.push("/Newarrivals")
    };
    const goToOnSale = () => {
      history.push("/Onsale")
    };
    const goToTops = () => {
      history.push("/Tops")
    };
    const goToBottoms = () => {
      history.push("/Bottom")
    };
    const goToOutwear = () => {
      history.push("/Jacket")
    };
    const goToDresses = () => {
      history.push("/Dresses")
    };

    const [orderList,createOrderList] = useState(false);
    function createOrder() {
    }
    
    return (
      <React.Fragment>
        <Navbar className="brand-bar" style={{justifyContent:'space-between'}}>
          <Navbar.Brand href="/">Stella Boutique</Navbar.Brand>
            <div>
              <p>Welome{userID == 0?null:", "+username} </p> 
            </div>
            {userID == 0? 
            <div>
              <Button href="/Login" className={classes.navButtons} variant="contained" color="primary">login</Button>
              <Button href="/Register" className={classes.navButtons} variant="contained" color="primary">register</Button>
            </div> :
            <div>
              <Button color="secondary" onClick={handleCart}>購物車({cart.length})</Button>
              <Button href="/Login" className={classes.navButtons} variant="contained" color="primary" onClick={handleLogout}>logout</Button>
            </div>
            }
        </Navbar>
        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={goToNewArrival}>NEW ARRIVALS</Nav.Link>
              <Nav.Link onClick={goToOnSale}>ON SALE</Nav.Link>
              <Nav.Link onClick={goToTops}>TOPS</Nav.Link>
              <Nav.Link onClick={goToBottoms}>BOTTOMS</Nav.Link>
              <Nav.Link onClick={goToOutwear}>OUTERWEAR</Nav.Link>
              <Nav.Link onClick={goToDresses}>DRESSES & JUMPSUITS</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>

        <Modal isOpen={state.cart} toggle={handleCart}>
          <ModalHeader toggle={handleCart}>購物車</ModalHeader>
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
            <Button color="primary" onClick={handleCart}>結帳</Button>{' '}
            <Button color="secondary" onClick={handleCart}>取消</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }

  function mapStateToProps(state) {
    return {
      ProductList: state.ProductList,
      LoginUser: state.LoginUser
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      enterWeb: () => {
        dispatch(enterWeb())
      },
      setUser: (username,userID) => {
        dispatch(setUser(username,userID))
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MyNavbar);
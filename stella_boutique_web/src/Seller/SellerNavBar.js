import React,{ useState,useEffect } from 'react';
import { Nav ,Navbar ,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert} from 'reactstrap';
import { connect } from 'react-redux';
import { setUser , checkoutOrder , getOrderList , getLikeItemList} from '../actions';
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
    
function SellerNavBar(props) {
    var totalPrice = 0;
    const [userID,setUserID] = useState(localStorage.getItem("userID"));
    const [username,setUername] = useState(localStorage.getItem("username"));
    const classes = useStyles();
    var cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const [profileOpen,setProfileClose] = useState(false); 
    useState(() => {
      props.setUser(username,userID);
    });

    function handleLogout() {
      localStorage.clear();
      window.location.href = '/';
    }

    const history = useHistory();

    const goToNewArrival = () => {
      setProfileClose(false)
      history.push("/Newarrivals")
    };
    const goToOnSale = () => {
      setProfileClose(false)
      history.push("/Onsale")
    };
    const goToTops = () => {
      setProfileClose(false)
      history.push("/Tops")
    };
    const goToBottoms = () => {      
      setProfileClose(false)
      history.push("/Bottom")
    };
    const goToOutwear = () => {
      setProfileClose(false)
      history.push("/Jacket")
    };
    const goToDresses = () => {
      setProfileClose(false)
      history.push("/Dresses")
    };
    const goToProfile = () => {
      setProfileClose(!profileOpen)
      if(profileOpen){
        history.push("/")
      }else{
        console.log("getting order");
        props.getOrderList(userID);
        props.getLikeItemList(userID);
        history.push("/MyOrder")
      }
    };
    const GoToMyLikes = () => {
      console.log("item like"+ props.userMyLike)
      console.log("product list "+ props.ProductList)
      history.push("/MyLike")
    }
    const GoToHistory = () => {
      history.push("/MyOrder")
    }

    const [cartOpen, setcartOpenOpen] = useState(false);
    const handleCartOpen = () => {
      setcartOpenOpen(!cartOpen)
    }
    const removeProduct = payload => {
      console.log(cartItems);
      cartItems.pop(payload.itemID);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      handleCartOpen();
      console.log('removeProduct' +payload.itemID );
    }

    const clearCart = () => {
        cartItems = [0];
        localStorage.setItem("cart", JSON.stringify(cartItems));
        handleCartOpen();
        console.log('clearCart' );
    }

    const handleCheckout = () => {
      cartItems = JSON.parse(localStorage.getItem('cart'));
      props.checkoutOrder(cartItems);
      clearCart();
      //alert to tell user checkout sucess
      console.log('handleCheckout' );
    }
    function handleLogout() {
        localStorage.clear();
        window.location.href = '/';
      }
    return (
      <React.Fragment>
        {/* <Navbar className="brand-bar" style={{justifyContent:'space-between'}}>
          <Navbar.Brand href="/">Stella Boutique</Navbar.Brand>
            <div>
              <p>Welome{userID == null?null:", "+username} </p> 
            </div>
            {userID == null? 
            <div>
              <Button href="/Login" className={classes.navButtons} variant="contained" color="primary">login</Button>
              <Button href="/Register" className={classes.navButtons} variant="contained" color="primary">register</Button>
            </div> :
            <div>
              <Button color="secondary" onClick={handleCartOpen}>購物車</Button>
              <Button className={classes.navButtons} variant="contained" color="primary" onClick={goToProfile}>Profile</Button>
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
            
            {
              profileOpen?
              <Nav className="mr-right">
                <Nav.Link onClick = {GoToMyLikes}>LIKE</Nav.Link>
                <Nav.Link onClick={GoToHistory}>ORDER</Nav.Link>
              </Nav>
              :
              null
            }
            
          </Navbar.Collapse>
        </Navbar> */}
        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/ProductManage">PRODUCT</Nav.Link>
              <Nav.Link href="/OrderManage">ORDER</Nav.Link>
              <Nav.Link href="/MemberManage">MEMBER</Nav.Link>
            </Nav>
            <Nav className="mr-right">
              <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }

  function mapStateToProps(state) {
    return {
      ProductList: state.ProductList,
      LoginUser: state.LoginUser,    
      userMyLike: state.userMyLike
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      setUser: (username,userID) => {
        dispatch(setUser(username,userID))
      },
      checkoutOrder: (orderList) => {
        dispatch(checkoutOrder(orderList))
      },
      getOrderList: (userID) => {
        dispatch(getOrderList(userID))
      },
      getLikeItemList: (userID) => {
        dispatch(getLikeItemList(userID))
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SellerNavBar);
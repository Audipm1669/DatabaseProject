import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';


import {
    BrowserRouter,
    Route,
    Switch,
    Link
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
    heroButtons: {
      marginTop: theme.spacing(4),
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
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  
  export default function MyNavbar() {
    const classes = useStyles();
   
    const useEffect = () => {
      document.title = "home";
    };
    
  
  
    const [anchorProfile, setAnchorProfile] = React.useState(null);
  
    const handleProfileClick = (event) => {
      setAnchorProfile(event.currentTarget);
    };
  
    const handleProfileClose = () => {
      setAnchorProfile(null);
    };
  
  
    return (
      
      
      <React.Fragment>
       
        <Navbar className="brand-bar" style={{justifyContent:'space-between'}}>
          <Navbar.Brand href="/">Stella Boutique</Navbar.Brand>
            <Avatar className={classes.iconColor} src="/broken-image.jpg" onClick={handleProfileClick} id="profile-icon"/>
            <Popover
              open={Boolean(anchorProfile)}
              margin='100px'
              anchorEl={anchorProfile}
              onClose={handleProfileClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              style={{
                width: '150%',
                height: '150%',
              }}
            >
                <div>
                    Hi,User
                </div>
              
              <div>
                <Link color="primary" href="/Newarrivals">會員中心</Link>
              </div>
              <div>
                <Link color="primary" href="/Newarrivals">LOGOUT</Link>
              </div>
             
            </Popover>
        </Navbar>
        <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <BrowserRouter>
              <Nav.Link href="/Newarrivals">NEW ARRIVALS</Nav.Link>
              <Nav.Link href="/Onsale">ON SALE</Nav.Link>
              <NavDropdown title="TOPS" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Shirt">Shirt</NavDropdown.Item>
                <NavDropdown.Item href="/TShirt">T-Shirt</NavDropdown.Item>
                <NavDropdown.Item href="/Hoodie">Hoodie</NavDropdown.Item>
                <NavDropdown.Item href="/Tank Tops">Tank Tops</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BOTTOMS" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Pants">Pants</NavDropdown.Item>
                <NavDropdown.Item href="/Jeans">Jeans</NavDropdown.Item>
                <NavDropdown.Item href="/Skirt">Skirt</NavDropdown.Item>
                <NavDropdown.Item href="/Leggings">Leggings</NavDropdown.Item>
                <NavDropdown.Item href="/Shorts">Shorts</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="OUTERWEAR" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Coat">Coat</NavDropdown.Item>
                <NavDropdown.Item href="/Jacket">Jacket</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="DRESSES &JUMPSUITS" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Dresses">Dresses</NavDropdown.Item>
                <NavDropdown.Item href="/Jumpsuits">Jumpsuits</NavDropdown.Item>
              </NavDropdown>
            </BrowserRouter>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        
        
      </React.Fragment>
    );
  }
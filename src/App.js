import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


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


export default function Album() {
  const classes = useStyles();
  


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
        <Navbar.Brand href="#home">Stella Boutique</Navbar.Brand>
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
            
          </Popover>
      </Navbar>
      <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">NEW ARRIVALS</Nav.Link>
            <Nav.Link href="#link">ON SALE</Nav.Link>
            <NavDropdown title="TOPS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">T-Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hoodie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tank Tops</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BOTTOMS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Leggings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shorts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="OUTERWEAR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jacket</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="DRESSES &JUMPSUITS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jumpsuits</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className="homecoverdiv">
              <img src={require('./img/cover.jpg')} alt="Background" className={classes.homecover} />
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Shopping GOGO
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
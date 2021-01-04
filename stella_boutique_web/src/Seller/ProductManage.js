import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Nav,Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {  Row, Col, Jumbotron, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge} from 'reactstrap';

import {
  BrowserRouter,
} from 'react-router-dom';


import '../App.css';

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


export default function ProductManage() {
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
      
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardContent>
                      <CardTitle>商品名稱</CardTitle>
                      <CardSubtitle>
                          <h4>售價：1000</h4>
                      </CardSubtitle>
                      <CardText>商品描述</CardText>
                      <Button color="secondary" >Edit</Button>
                      <Button color="secondary" >Delete</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
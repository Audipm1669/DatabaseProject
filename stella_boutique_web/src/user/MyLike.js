import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AlbumJson from '../Album.json';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getOrderList, removeLikeItem} from '../actions';
import { useHistory } from 'react-router-dom';

import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody ,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';


function MyLike(props){
  const history = useHistory();
  const userID = useState(localStorage.getItem("userID"));

  function GoToHistory(){
    props.getOrderList(userID)
    history.push("/MyOrder")
  }
  // state = {
  //   album: AlbumJson,
  // }
      // const { album } = this.astate;
        return (
            <div>
              <Navbar bg="dark" variant="dark" className="menu-bar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  <BrowserRouter>
                    <Nav.Link href="/MyLike">LIKE</Nav.Link>
                    <Nav.Link onClick={GoToHistory}>ORDER</Nav.Link>
                  </BrowserRouter>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
                <div style={{margin:'10px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </div>
                <Row style={{margin:'10px 100px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                {/* {
                  album.map(product => (
                    <Col sm={6} md={4} className="mb-3">
                      <Card style={{margin:'0px 50px'}}>
                        <CardImg src={require("../img/clothes/Dress/ClassicCheongsamInPastel.jpg")} alt="Card image cap" />
                        <CardBody >
                          <CardTitle>{product.title}</CardTitle>
                          <CardSubtitle> 
                            <h4>
                              
                                <Badge color="success">售價：{product.price}</Badge>
                              
                            </h4>
                          </CardSubtitle>
                          <CardText>{product.desc}</CardText>
                          <Button color="secondary">Unlike</Button>
                        </CardBody >
                      </Card>
                    </Col>
                  ))
                } */}
                </Row>

                
            </div>
        );
}

function mapDispatchToProps(dispatch) {
  return {
    getOrderList: (userID) => {
      dispatch(getOrderList(userID))
    },
    removeLikeItem: (userID,itemID) => {
      dispatch(removeLikeItem(userID,itemID))
    } 
  }
}
export default connect(null,mapDispatchToProps)(MyLike);
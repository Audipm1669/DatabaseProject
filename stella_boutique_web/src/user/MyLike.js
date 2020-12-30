import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from '../MyNavbar';
import AlbumJson from '../Album.json';

import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody ,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Form,FormControl,Button } from 'react-bootstrap';

class MyLike extends Component {
  state = {
    album: AlbumJson,
  }

  
  

    render() {
      const { album } = this.state;

        return (
            <div>
                <MyNavbar />
                <div style={{margin:'10px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </div>
                <Row style={{margin:'10px 100px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                {
                  album.map(product => (
                    <Col sm={6} md={4} className="mb-3">
                      <Card style={{margin:'0px 50px'}}>
                        <CardImg src={require("../img/clothes/Dresses/ClassicCheongsamInPastel.jpg")} alt="Card image cap" />
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
                }
                </Row>

                
            </div>
        );
    }

}

export default MyLike;
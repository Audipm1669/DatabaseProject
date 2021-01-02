import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody ,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Form,FormControl,Button } from 'react-bootstrap';

class Tops extends Component {

    render() {
        return (
            <div>
                <div style={{margin:'10px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </div>
                <Row style={{margin:'10px 100px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                {
                  this.props.ProductList.map((item,key) => {
                    if(item.category == "Tops"){
                      return(
                      <Col sm={6} md={4} className="mb-3" >
                        <Card style={{margin:'0px 50px'}}>
                          <CardImg src={require(""+item.pictureURL)} alt="Card image cap" />
                          <CardBody >
                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle> 
                              <h4>
                                  <Badge color="success">售價：{item.price}</Badge>
                              </h4>
                            </CardSubtitle>
                            <CardText>{item.description}</CardText>
                            <Button color="secondary" onClick={this.getItem}>購買</Button>
                          </CardBody >
                        </Card>
                      </Col>
                      )
                    }  
                  })
                }
                </Row>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
      ProductList: state.ProductList
    }
  }
  
  export default connect(mapStateToProps,null)(withRouter(Tops));
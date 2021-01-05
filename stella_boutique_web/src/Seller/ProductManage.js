import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody ,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Form,FormControl,Button } from 'react-bootstrap';
import ProductItemForSeller from '../ProductItemForSeller';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { BrowserRouter} from 'react-router-dom';
import SellerNavBar from './SellerNavBar';


class ProductManage extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemID:0,
      shoppingCart:{},
    }
    this.addToCart = this.addToCart.bind(this)
  }
  
  addToCart(){
    console.log(this.state.itemID)
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
  }
    render() {
        return (
            <div>
              
              <SellerNavBar/>
                <div style={{margin:'10px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </div>
                <Row style={{margin:'10px 100px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                {
                  this.props.ProductList.map((item,key) => {
                    
                      console.log(item.itemID)
                      return(
                       <ProductItemForSeller key={item.itemID} product={item}/>
                      )
                    
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
  
  export default connect(mapStateToProps,null)(withRouter(ProductManage));
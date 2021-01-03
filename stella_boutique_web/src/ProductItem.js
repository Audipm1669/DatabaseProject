import React from 'react';
import {Col, Card, CardImg, CardBody ,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Button } from 'react-bootstrap';

const ProductItem = ({product}) => {
    var cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    
    const addProduct = payload => {
        cartItems = JSON.parse(localStorage.getItem('cart'))
        cartItems.push(payload.itemID);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        console.log('addProduct' +payload.itemID );
    }

    return ( 
        <Col sm={6} md={4} className="mb-3" >
            <Card style={{margin:'0px 50px'}}>
                <CardImg src={require(""+product.pictureURL)} alt="Card image cap" />
                <CardBody >
                <CardTitle>{product.name}</CardTitle>
                <CardSubtitle> 
                    <h4>
                        <Badge color="success">售價：{product.price}</Badge>
                    </h4>
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button color="secondary" onClick={() => addProduct(product)}>購買</Button> 
                </CardBody >
            </Card>
         </Col>
     );
}
 
export default ProductItem;
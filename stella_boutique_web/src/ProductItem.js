import React, { useState} from 'react';
import {Col, Card, CardImg, CardBody ,  CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import { Button } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { addLikeItem,removeLikeItem} from './actions';


function ProductItem(props){
    var cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    var like = false;
    var likeColor = "secondary";
    const [userID,setUserID] = useState(localStorage.getItem("userID"));
    
    const addProduct = payload => {
        cartItems = JSON.parse(localStorage.getItem('cart'))
        cartItems.push(payload.itemID);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        console.log('addProduct' +payload.itemID );
    }

    const addLike = payload => {
        if(like == false)
        {   
            like = true; 
            props.addLikeItem(userID,payload.itemID);
            likeColor = "secondary"
        }
        else
        {
            like = false;
            props.removeLikeItem(userID,payload.itemID);
            likeColor = "default"
        } 
        console.log(like);
        console.log(likeColor);
        alert(`已加入到您的喜歡商品中！`);
    }
    
    return ( 
        <Col sm={6} md={4} className="mb-3" >
            <Card style={{margin:'0px 50px'}}>
                <CardImg src={require(""+props.product.pictureURL)} alt="Card image cap" />
                <CardBody >
                <CardTitle>{props.product.name}</CardTitle>
                <CardSubtitle> 
                    <h4>
                        <Badge color="success">售價：{props.product.price}</Badge>
                    </h4>
                </CardSubtitle>
                <CardText>{props.product.description}</CardText>
                <Button color="secondary" onClick={() => addProduct(props.product)}>購買</Button>
                <IconButton aria-label="add like">
                    <FavoriteIcon color={likeColor} onClick={() => addLike(props.product)} /> 
                </IconButton>
                </CardBody >
            </Card>
         </Col>
     );
}
function mapDispatchToProps(dispatch) {
    return {
      removeLikeItem: (userID,itemID) => {
        dispatch(removeLikeItem(userID,itemID))
      },
      addLikeItem: (userID,itemID) => {
        dispatch(addLikeItem(userID,itemID))
      } 
    }
  }
  export default connect(null,mapDispatchToProps)(ProductItem);
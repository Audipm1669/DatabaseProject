import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Newarrivals from './Newarrivals';
import Home from './Home';
import Onsale from './Onsale';

import Coat from './clothes/Coat';
import Dresses from './clothes/Dresses';
import Hoodie from './clothes/Hoodie';
import Jacket from './clothes/Jacket';
import Jeans from './clothes/Jeans';
import Jumpsuits from './clothes/JumpSuits';
import Leggings from './clothes/Leggings';
import Pants from './clothes/Pants';
import Shirt from './clothes/Shirt';
import Shorts from './clothes/Shorts';
import Skirt from './clothes/Skirt';
import Tanktop from './clothes/TankTop';
import TShirt from './clothes/TShirt';
import Login from './Login';
import Register from './Register';
import ProductManage from './Seller/ProductManage';
import OrderManage from './Seller/OrderManage';
import MemberManage from './Seller/MemberManage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Album() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/Newarrivals" component={Newarrivals} exact={true}></Route>
          <Route path="/Onsale" component={Onsale} exact={true}></Route>
          <Route path="/Coat" component={Coat} exact={true}></Route>
          <Route path="/Dresses" component={Dresses} exact={true}></Route>
          <Route path="/Hoodie" component={Hoodie} exact={true}></Route>
          <Route path="/Jacket" component={Jacket} exact={true}></Route>
          <Route path="/Jeans" component={Jeans} exact={true}></Route>
          <Route path="/Jumpsuits" component={Jumpsuits} exact={true}></Route>
          <Route path="/Leggings" component={Leggings} exact={true}></Route>
          <Route path="/Pants" component={Pants} exact={true}></Route>
          <Route path="/Shirt" component={Shirt} exact={true}></Route>
          <Route path="/Shorts" component={Shorts} exact={true}></Route>
          <Route path="/Skirt" component={Skirt} exact={true}></Route>
          <Route path="/Tanktop" component={Tanktop} exact={true}></Route>
          <Route path="/TShirt" component={TShirt} exact={true}></Route>
          <Route path="/Login" component={Login} exact={true}></Route>
          <Route path="/Register" component={Register} exact={true}></Route>
          <Route path="/ProductManage" component={ProductManage} exact={true}></Route>
          <Route path="/OrderManage" component={OrderManage} exact={true}></Route>
          <Route path="/MemberManage" component={MemberManage} exact={true}></Route>

        </Switch>
      </BrowserRouter>
 
  );
}
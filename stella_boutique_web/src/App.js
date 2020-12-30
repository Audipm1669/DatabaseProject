import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';

import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Newarrivals from './Newarrivals';
import Home from './Home';
import Onsale from './Onsale';

import Dresses from './clothes/Dresses';
import Jacket from './clothes/Jacket';
import Bottom from './clothes/Bottom';
import Tops from './clothes/Tops';
import Login from './Login';
import Register from './Register';
import ProductManage from './Seller/ProductManage';
import OrderManage from './Seller/OrderManage';
import MemberManage from './Seller/MemberManage';
import MyLike from './user/MyLike';
import MyOrder from './user/MyOrder';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/Newarrivals" component={Newarrivals} exact={true}></Route>
          <Route path="/Onsale" component={Onsale} exact={true}></Route>
          <Route path="/Dresses" component={Dresses} exact={true}></Route>
          <Route path="/Jacket" component={Jacket} exact={true}></Route>
          <Route path="/Tops" component={Tops} exact={true}></Route>
          <Route path="/Bottom" component={Bottom} exact={true}></Route>
          <Route path="/Login" component={Login} exact={true}></Route>
          <Route path="/Register" component={Register} exact={true}></Route>
          <Route path="/ProductManage" component={ProductManage} exact={true}></Route>
          <Route path="/OrderManage" component={OrderManage} exact={true}></Route>
          <Route path="/MemberManage" component={MemberManage} exact={true}></Route>
          <Route path="/MyLike" component={MyLike} exact={true}></Route>
          <Route path="/MyOrder" component={MyOrder} exact={true}></Route>

        </Switch>
      </BrowserRouter>
 
  );
}
export default connect()(App);
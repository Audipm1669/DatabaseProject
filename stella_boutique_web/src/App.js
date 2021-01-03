import React,{Component} from 'react';
import { connect } from 'react-redux';
import AllRoutes from './routes'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';


class App extends Component {


 render(){ 
  return (
    <div>
    <MyNavbar /> 
    <AllRoutes />
    </div>
    );
  }
}
export default connect()(App);
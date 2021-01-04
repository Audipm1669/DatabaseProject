import React,{Component} from 'react';
import { connect } from 'react-redux';
import AllRoutes from './routes'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';
import { ModeComment } from '@material-ui/icons';
import { enterWeb } from './actions';


class App extends Component {
constructor(props){
  super(props)
}
componentDidMount(){
  this.props.enterWeb();

}
 render(){ 
  return (
    <div>
    <MyNavbar /> 
    <AllRoutes />
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    enterWeb: () => dispatch(enterWeb())
  }
}

export default connect(null,mapDispatchToProps)(App);
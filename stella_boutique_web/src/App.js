import React from 'react';
import AppBar from './component/AppBar';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path='/' component={Home} exact>
            <AppBar></AppBar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/test' component={Home} exact>
            <AppBar></AppBar>
            <h1>Hello</h1>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
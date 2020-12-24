import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from '../MyNavbar';

import { Form,FormControl,Button } from 'react-bootstrap';

class Tops extends Component {

    render() {
        return (
            <div>
                <MyNavbar />
                <div style={{margin:'10px' , display: 'flex',  justifyContent:'flex-end ', alignItems:'center'}}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </div>

            </div>
        );
    }

}

export default Tops;
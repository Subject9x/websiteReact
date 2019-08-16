import React, {Component} from 'react';
import { Container, Row, Col, Button, Label} from 'reactstrap';

import NavHeader from '../NavHeader'

/*
WebsiteReact
Peter Roohr
Overview:
    
*/
class GaragePage extends Component{
    render(){
        return(
            <Container >
                <NavHeader/>
                <Label>You've reached the Garage.</Label>
            </Container>
        );
    }
}

export default GaragePage;
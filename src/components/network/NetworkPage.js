import React, { Component } from 'react';
import { Container, Label} from 'reactstrap';

import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:  
    The main page for the Network section.
        Network contains links to EMR, and existing Roohr Orbital project websites.
    TODO - 
*/

class NetworkPage extends Component{
    render(){
        return(
            <Container >
                <NavHeader />
                <Label>You've reached the Netowrking.</Label>
            </Container>
        );
    }
}

export default NetworkPage;

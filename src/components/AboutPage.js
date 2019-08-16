import React, { Component } from 'react';
import { Container, Label} from 'reactstrap';
import NavHeader from './NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:  
    Resume / about me?
    TODO - 
*/

class AboutPage extends Component{
    render(){
        return(
            <Container >
                <NavHeader />
                <Label>You've reached the About page.</Label>
            </Container>
        );
    }
}

export default AboutPage;

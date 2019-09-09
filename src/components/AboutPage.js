import React, { Component } from 'react';
import { Container, Label} from 'reactstrap';

import NavHeader from './NavHeader';
import CommonHeaderSpanner from './common/CommonHeaderSpanner';
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
                <CommonHeaderSpanner />
                <Label>You've reached the About page.</Label>
            </Container>
        );
    }
}

export default AboutPage;

import React, { Component } from 'react';
import { Container, Label, Row, Col} from 'reactstrap';

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
            <Row>
                <Col md={{size:10,offset:2}}>
                Here's a page about myself, ideally you've perused the fun stuff. I've been a software engineer for 8 years, working mostly in the J2EE / Spring space. I generally enjoy middle tier work, refactoring and improving older code bases.
                
                </Col>
            </Row>
        </Container>
        );
    }
}

export default AboutPage;

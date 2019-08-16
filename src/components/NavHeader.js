import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
/*
WebsiteReact
Peter Roohr
Overview:
    Header Nav sits atop all pages EXCEPT home page.
    maintains buttons for quick navigation.

    this is meant to be included in a parent component's Container stack.
*/

class NavHeader extends Component{
    render(){
        return(
            <Row>
                <Col md={{ size: 2}}> </Col>
            </Row>
            <div>
                This is the nav bar
            </div>
        );
    }
}

export default NavHeader;
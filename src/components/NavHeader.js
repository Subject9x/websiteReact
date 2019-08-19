import React, { Component } from 'react';
import {Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
/*
WebsiteReact
Peter Roohr
Overview:
    Header Nav sits atop all pages EXCEPT home page.
    maintains buttons for quick navigation.

    this is meant to be included in a parent component's Container stack.

    TODO - make sure this is stickied at the top
*/

class NavHeader extends Component{
    render(){
        return(
            <Row>
                <Col md={{ size: 2}}><Link to="/"><Button>Home</Button></Link></Col>
                <Col md={{ size: 2}}><Link to="/garage"><Button>Code Garage</Button></Link></Col>
                <Col md={{ size: 2}}><Link to="/artwork"><Button>Artwork</Button></Link></Col>
                <Col md={{ size: 2}}><Link to="/boardgames"><Button>Board Games</Button></Link></Col>
                <Col md={{ size: 2}}><Link to="/network"><Button>Network</Button></Link></Col>
                <Col md={{ size: 2}}><Link to="/about"><Button>About</Button></Link></Col>
            </Row>
        );
    }
}

export default NavHeader;
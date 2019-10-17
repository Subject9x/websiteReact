import React, { Component } from 'react';
import {Row, Container, Col, Button, Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
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
    constructor(props) {
        super(props);
    }
    render(){
    return(
    <Row>
        <Col md={{size:12}}>
        <Container id='fixed-top' fixed='top' className="container-fluid">
            <Navbar color="secondary" light fixed='top' expand="md">
                <NavbarBrand href="/">Roohr Orbital Yards</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/garage"><Button>Code Garage</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/artwork/home"><Button>Artwork</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/boardgames"><Button>Board Games</Button></Link> 
                    </NavItem>
                    <NavItem>
                        <Link to="/network"><Button>Network</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><Button>About</Button></Link> 
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
        </Col>
    </Row>
    );
    }
}

export default NavHeader;
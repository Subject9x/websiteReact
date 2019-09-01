import React, { Component } from 'react';
import {Row, Col, Button, ButtonGroup} from 'reactstrap';
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
        <Row className="text-centered">
            <Col md={{size:8, offset:3}}>
                <ButtonGroup>
                    <Link to="/"><Button>Home</Button></Link> 
                    <Link to="/garage"><Button>Code Garage</Button></Link>
                    <Link to="/artwork/home"><Button>Artwork</Button></Link>
                    <Link to="/boardgames"><Button>Board Games</Button></Link>
                    <Link to="/network"><Button>Network</Button></Link> 
                    <Link to="/about"><Button>About</Button></Link>
                </ButtonGroup>
            </Col>
        </Row>
        );
    }
}

export default NavHeader;
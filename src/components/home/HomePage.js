import React, {Component} from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'

/*
WebsiteReact
Peter Roohr
Overview:
    main page for the entire website.
*/
class HomePage extends Component{
    render(){
        return(
            <Container >
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <h1>Roohr Orbital Yards</h1>
                    </Col>
                </Row>
                <Row><Col><p></p></Col></Row>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                    </Col>
                </Row>
                <Row><Col><p></p></Col></Row>
                <Row><Col><p></p></Col></Row>
                <Row>
                    <Col md={{ size: 2 }}><Button><Link to="/garage"><img alt="[Code Work]" src='/img/thumbs/codeThumb.png'></img></Link></Button></Col>
                    <Col md={{ size: 2, offset: 2 }}><Button><Link to="/artwork"><img alt="[Artwork]" src='/img/thumbs/artThumb.png'></img></Link></Button></Col>
                    <Col md={{ size: 2 , offset: 3}}><Button><Link to="/boardgames"><img alt="[Board Games]" src='/img/thumbs/tableThumb.png'></img></Link></Button></Col>
                </Row>
                <Row>
                    <Col><p></p></Col>
                </Row>
                <Row>
                    <Col md={{ size: 2, offset: 3 }}><Button><Link to="/about">About</Link></Button></Col>
                    <Col md={{ size: 2, offset: 1}}><Button><Link to="/network"><img alt="[Other Sites]" src='/img/thumbs/netThumb.png'></img></Link></Button></Col>
                </Row>
            </Container>
        );
    }
}



export default HomePage;
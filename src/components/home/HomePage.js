import React, {Component} from 'react';
import BillBoard from '../billboard/BillBoard';
import { Container, Row, Col, Button} from 'reactstrap';

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
                    <BillBoard />
                    </Col>
                </Row>
                <Row><Col><p></p></Col></Row>
                <Row><Col><p></p></Col></Row>
                <Row>
                    <Col md={{ size: 2 }}><Button><img alt="[Code Work]" src='/img/thumbs/codeThumb.png'></img></Button></Col>
                    <Col md={{ size: 2, offset: 2 }}><Button><img alt="[Artwork]" src='/img/thumbs/artThumb.png'></img></Button></Col>
                    <Col md={{ size: 2 , offset: 3}}><Button><img alt="[Board Games]" src='/img/thumbs/tableThumb.png'></img></Button></Col>
                </Row>
                <Row>
                    <Col><p></p></Col>
                </Row>
                <Row>
                    <Col md={{ size: 2, offset: 3 }}><Button>About</Button></Col>
                    <Col md={{ size: 2, offset: 1}}><Button><img alt="[Other Sites]" src='/img/thumbs/netThumb.png'></img></Button></Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;
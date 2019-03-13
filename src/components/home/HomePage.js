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
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                    <BillBoard />
                    </Col>
                </Row>
                <Row>
                    
                </Row>
                <Row>
                    <Col><Button>About</Button></Col>
                    <Col><Button><img src='/img/thumbs/codeThumb.png'></img></Button></Col>
                    <Col><Button><img src='/img/thumbs/artThumb.png'></img></Button></Col>
                    <Col><Button>Board Games</Button></Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;
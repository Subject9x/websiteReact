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
                    <Col sm={{ size: 6, offset: 3 }}>
                        <h1>Roohr Orbital Yards</h1>
                    </Col>
                </Row>
                &nbsp;
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        Hello and welcome to the Orbital Yards, here you can explore all the projects and endeavors that I embark on. Each icon below will take you to a different sector of the 
                        station, to read more about me specifically, just click <Button><Link to="/about">Here</Link></Button>
                    </Col>

                </Row>
                &nbsp;
                &nbsp;
                <Row>
                    <Col md={{ size: 3, offset:2 }}><Button><Link to="/garage"><img alt="[Code Work]" src='/img/thumbs/codeThumb.png'></img></Link></Button></Col>
                    <Col md={{ size: 3, offset:2 }}><Button><Link to="/artwork"><img alt="[Artwork]" src='/img/thumbs/artThumb.png'></img></Link></Button></Col>
                </Row>
                &nbsp;
                <Row>
                    <Col md={{ size: 3, offset:2 }}><Button><Link to="/boardgames"><img alt="[Board Games]" src='/img/thumbs/tableThumb.png'></img></Link></Button></Col>
                    <Col md={{ size: 3, offset:2 }}><Button><Link to="/network"><img alt="[Other Sites]" src='/img/thumbs/netThumb.png'></img></Link></Button></Col>
                </Row>
            </Container>
        );
    }
}
export default HomePage;
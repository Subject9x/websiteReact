import React, { Component } from 'react';
import { Container, Label, Row, Col} from 'reactstrap';
import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:  
    The entry/main page to the Board Games section of the site.
        Board Games page details all the work I've done for board game projects
            Free Lunch's PitFighter
            LANDWAR

            Alpha Kill Team Strike Conversion
            Alpha Strike Mobile App (unofficial)
    TODO - 
*/

class BoardGamesMainPage extends Component{
    render(){
        return(
        <Container >
            <NavHeader/>
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/tableThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>Here you will find all the freelance and hobby projects I've worked on so far.</p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Label>
                    Projects to fill out - TODO
                </Label>
            </Row>
            <Row>
                <ul>
                    <li>Battlesuit</li>
                    <li>LANDWAR</li>
                    <li>PitFighter</li>
                    <li>Warhammer 40k Kill Team Mod - Mech RPG</li>
                </ul>
            </Row>
        </Container>
        );
    }
}

export default BoardGamesMainPage;

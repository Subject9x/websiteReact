import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

import NavHeader from '../NavHeader';
import CommonProjectPanel from '../common/CommonProjectPanel';

/*
WebsiteReact
Peter Roohr
Overview:  
    The entry/main page to the Board Games section of the site.
        Board Games page details all the work I've done for board game projects
            Free Lunch's PitFighter
            LANDWAR
            Alpha Kill Team Strike Conversion
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
                    <p>This section covers all the board game projects I've worked on so far. My background is tabletop wargaming, having got into Warhammer40k early in life.
                        I'd say my design philosophy stems from my experience as a programmer - figuring out how to model (usually with math) certain themes and mechanics
                        for the game I am working on. 
                    </p>
                </Col>
            </Row>
            &nbsp;
            <Row>              
                <Col md={{size:4}} color="info">
                    <CommonProjectPanel clazz="btn btn-primary codePanel" linkPath="/boardgames/project/" linkVar="0" projectName="Battle Suit" imagePath="placeholder" />
                </Col>
                <Col md={{size:4}} color="info">
                    <CommonProjectPanel clazz="btn btn-primary codePanel" linkPath="/boardgames/project/" linkVar="3" projectName="LANDWAR" imagePath="placeholder" />
                </Col>
                <Col md={{size:4}} color="info">
                    <CommonProjectPanel clazz="btn btn-success" linkPath="/boardgames/project/" linkVar="1" projectName="PitFighter" imagePath="placeholder" />
                </Col>
                <Col md={{size:4}} color="info">
                    <CommonProjectPanel clazz="btn btn-success" linkPath="/boardgames/project/" linkVar="2" projectName="40k Kill Team Conversion" imagePath="placeholder" />
                </Col>
            </Row>
        </Container>
        );
    }
}

export default BoardGamesMainPage;


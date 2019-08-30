import React, { Component } from 'react';
import {Container, Label, Row, Col, Media} from 'reactstrap';
import {Link} from 'react-router-dom';

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
    TODO - 
*/

//oh, nifty
const GameProjectSpot = (props) =>{
    return(
    <Link to={'/boardgames/project/'+props.projectLinkId} params={props.projectLinkId}>
        <Media>
            <Media left>
                <Media object data-source={props.imagePath} src={props.imagePath} alt="placeholder"/>
            </Media>
            <Media body>
                <Media heading >{props.projectName}</Media>
                {props.projectDesc}
            </Media>
        </Media>
    </Link>
    );
}

class BoardGamesMainPage extends Component{
    render(){
        return(
        <Container >
            <NavHeader/>
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/tableThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>This section covers all the board game projects I've worked on so far. </p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Label>
                    Projects to fill out - TODO
                </Label>
            </Row>
            <Row>
                <GameProjectSpot projectName="BattleSuit" projectLinkId="0" projectDesc="TODO" />
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


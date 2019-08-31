import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Media} from 'reactstrap';
import NavHeader from '../NavHeader'

/*
WebsiteReact
Peter Roohr
Overview:
    Garage page is the main entry point for all the projects, users can browse by project. Each project is 
*/

//oh, nifty
const GameProjectSpot = (props) =>{
    return(
    <Link to={'/garage/project/'+props.projectLinkId} params={props.projectLinkId} source='code'>
        <Media>
            <Media left>
                <Media object data-source={props.imagePath} src={props.imagePath} alt="placeholder"/>
            </Media>
            <Media body>
                <Media heading >{props.projectName}</Media>
                {/*{props.projectDesc}*/}
            </Media>
        </Media>
    </Link>
    );
}

const GameProjectPoster = (props) =>{
    return(  
    <Link to={'/garage/project/'+props.projectLinkId} params={props.projectLinkId} source='code'>
    <Container className={props.clazz}>
        <Row>
            <Col sm={{size:6, offset:3}}><img className="img-fluid h-100" src={props.imagePath} alt={props.projectDesc} /></Col>
        </Row>
        <Row>
            <Col sm={{size:6, offset:3}}>{props.projectName}</Col>
        </Row>
    </Container>
    </Link>
    );
}

class GaragePage extends Component{
    render(){
        return(
        <Container >
            <NavHeader/>
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/codeThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>Here you will find all the freelance and hobby projects I've worked on so far.</p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col lg={{size:4}} color="info">
                    <GameProjectPoster  clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_battlemetal.png' projectName="battleMETAL" projectLinkId="0" projectDesc="A retro Mech-sim FPS built on the Quake enine source-port known as Darkplaces." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" projectName="Website - battleMETAL" projectLinkId="1" projectDesc="The complete website for the battleMETAL video game." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" projectName="LANDWAR Unit Calculator" projectLinkId="2" projectDesc="A web-native stat calculator for the tabletop wargame 'LANDWAR'." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" projectName="Website - LANDWAR" projectLinkId="3" projectDesc="Main website for the tabletop wargame of same name. Website provides resources for gameplay and information." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_website2019.png' projectLinkId="9" projectName='Website - Rebuild 2019' projectDesc='Rebuilt my personal website from the ground up on ReactJS and ReactStrap.'/>
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-success" imagePath='/img/projectsCode/thumbs/thumb_zond1.png' projectLinkId="4" projectName="Zond 1" projectDesc="Video game, written in Java on the Slick2D framework. Asteroids-inspired gameplay." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-success" imagePath='/img/projectsCode/thumbs/thumb_website2015.png' projectLinkId="5" projectName="Website - Original" projectDesc="Built using just Bootstrap, my original website layout." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-success" imagePath='/img/projectsCode/thumbs/thumb_strikeralpha.png' projectLinkId="6" projectName="App - Striker Alpha" projectDesc="Unofficial game aide for the Battletech:Alpha Strike tabletop game, made using AngularJS." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-secondary" imagePath='/img/projectsCode/rigsThumb_gray.png' projectLinkId="7" projectName="BattleRigs" projectDesc="A rough test of the BabylonJS game engine." />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-secondary" imagePath='/img/projectsCode/thumbs/thumb_mw2d.png' projectLinkId="8" projectName='MW2D:Mercs' projectDesc='An attempt to create a top-down mech-based action game using Java, and the LWJGL framework.'/>
                </Col>
            </Row>
            &nbsp;
        </Container>
        );
    }
}

export default GaragePage;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button, Label, Card, CardBody, CardTitle, CardText, Media} from 'reactstrap';

import NavHeader from '../NavHeader'
import CodeProjectPage from './CodeProjectPage';

/*
WebsiteReact
Peter Roohr
Overview:
    Garage page is the main entry point for all the projects, users can browse by project. Each project is 
*/

//oh, nifty
const GameProjectSpot = (props) =>{
    return(
    <Link to={'/garage/project/'+props.id} id={props.id} >
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

class GaragePage extends Component{
    render(){
        return(
        <Container >
            <NavHeader/>
            &nbsp;
            <Row>
                <Col md={{size:4}}><img src='/img/thumbs/codeThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>Here you will find all the freelance and hobby projects I've worked on so far.</p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:3}}>
                    <Card>
                        <CardBody>
                            <CardTitle ><b>[In Progress]</b></CardTitle>
                            <CardText>These projects are actively being worked on as of 2019.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot projectName="battleMETAL" projectLinkId="0" projectDesc="A retro Mech-sim FPS built on the Quake enine source-port known as Darkplaces." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot projectName="Website - battleMETAL" projectLinkId="1" projectDesc="The complete website for the battleMETAL video game." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot projectName="LANDWAR Unit Calculator" projectLinkId="2" projectDesc="A web-native stat calculator for the tabletop wargame 'LANDWAR'." />
                </Col>
            </Row>
            <Row>
                <Col md={{size:3, offset:3}}>
                    <GameProjectSpot projectName="Website - LANDWAR" projectLinkId="3" projectDesc="Main website for the tabletop wargame of same name. Website provides resources for gameplay and information." />
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:3}}>
                    <Card>
                        <CardBody>
                            <CardTitle><b>[Complete]</b></CardTitle>
                            <CardText>These projects have been completed / released.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/zondThumb.png' projectLinkId="4" projectName="Zond 1" projectDesc="Video game, written in Java on the Slick2D framework. Asteroids-inspired gameplay." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/roohrsite1Thumb.png' projectLinkId="5" projectName="Website - Original" projectDesc="Built using just Bootstrap, my original website layout." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/strikerAlphaThumb.png' projectLinkId="6" projectName="App - Striker Alpha" projectDesc="Unofficial game aide for the Battletech:Alpha Strike tabletop game, made using AngularJS." />
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:3}}>
                    <Card >
                        <CardBody>
                            <CardTitle><b>[Prototypes]</b></CardTitle>
                            <CardText>The following projects were either testing grounds for ideas, or sanboxes to learn and explore with different languages
                                and frameworks.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/rigsThumb_gray.png' projectLinkId="7" projectName="BattleRigs" projectDesc="A rough test of the BabylonJS game engine." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/bt2dThumb.png' projectLinkId="8" projectName='MW2D:Mercs' projectDesc='An attempt to create a top-down mech-based action game using Java, and the LWJGL framework.'/>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4}}></Col>



            </Row>
        </Container>
        );
    }
}

export default GaragePage;
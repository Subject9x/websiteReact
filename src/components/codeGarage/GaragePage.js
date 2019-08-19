import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import { Container, Row, Col, Button, Label, Card, CardBody, CardTitle, CardText, Media} from 'reactstrap';
import { createBrowserHistory } from "history";

import NavHeader from '../NavHeader'

/*
WebsiteReact
Peter Roohr
Overview:
    Garage page is the main entry point for all the projects, users can browse by project. Each project is 
*/

const localHistoryVar = createBrowserHistory();

const garageRouter=(
    <Router history={localHistoryVar} >
        <Switch>

        </Switch>
    </Router>
)

//oh, nifty
const GameProjectSpot = (props) =>{
    return(
    <Media>
        <Media left>
            <Media object data-source={props.imagePath} src={props.imagePath} alt="placeholder"/>
        </Media>
        <Media body>
            <Media heading >{props.projectName}</Media>
            {props.projectDesc}
        </Media>
    </Media>
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
                    <GameProjectSpot projectName="battleMETAL" projectDesc="A retro Mech-sim FPS built on the Quake enine source-port known as Darkplaces." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot projectName="Website - battleMETAL" projectDesc="The complete website for the battleMETAL video game." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot projectName="LANDWAR Unit Calculator" projectDesc="A web-native stat calculator for the tabletop wargame 'LANDWAR'." />
                </Col>
            </Row>
            <Row>
                <Col md={{size:3, offset:3}}>
                    <GameProjectSpot projectName="Website - LANDWAR" projectDesc="Main website for the tabletop wargame of same name. Website provides resources for gameplay and information." />
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
                    <GameProjectSpot imagePath='/img/projectsCode/zondThumb.png'projectName="Zond 1" projectDesc="Video game, written in Java on the Slick2D framework. Asteroids-inspired gameplay." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/roohrsite1Thumb.png' projectName="Website - Original" projectDesc="Built using just Bootstrap, my original website layout." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/strikerAlphaThumb.png' projectName="App - Striker Alpha" projectDesc="Unofficial game aide for the Battletech:Alpha Strike tabletop game, made using AngularJS." />
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
                    <GameProjectSpot imagePath='/img/projectsCode/rigsThumb_gray.png' projectName="BattleRigs" projectDesc="A rough test of the BabylonJS game engine." />
                </Col>
                <Col md={{size:3}}>
                    <GameProjectSpot imagePath='/img/projectsCode/bt2dThumb.png' projectName='MW2D:Mercs' projectDesc='An attempt to create a top-down mech-based action game using Java, and the LWJGL framework.'/>
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
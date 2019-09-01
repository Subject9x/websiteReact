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
const GameProjectPoster = (props) =>{
    return(  
    <Link to={'/garage/project/'+props.projectLinkId} params={props.projectLinkId} source='code'>
    <Container className={props.clazz + " h-100"}>
        <Row>
            <Col sm={{size:6, offset:3}}><img className="img-fluid h-100" src={props.imagePath} alt="placeholder" /></Col>
        </Row>
        <Row>
            <Col sm={{size:10, offset:1}}><b><h3>{props.projectName}</h3></b></Col>
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
                <Col md={{size:4}} color="info">
                    <GameProjectPoster  clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_battlemetal.png' projectName="battleMETAL" projectLinkId="0" />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_battlemetalweb.png'projectName="Website: battleMETAL" projectLinkId="1" />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" projectName="LANDWAR Unit Calculator" projectLinkId="2" />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" projectName="Website: LANDWAR" projectLinkId="3" />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_website2019.png' projectLinkId="9" projectName='Website: 2019' />                
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-success" imagePath='/img/projectsCode/thumbs/thumb_zond1.png' projectLinkId="4" projectName="Zond 1"/>
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-success" imagePath='/img/projectsCode/thumbs/thumb_website2015.png' projectLinkId="5" projectName="Website - 2015" />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-success" imagePath='/img/projectsCode/thumbs/thumb_strikeralpha.png' projectLinkId="6" projectName="App - Striker Alpha"/>
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-secondary" imagePath='/img/projectsCode/thumbs/thumb_rigs.png' projectLinkId="7" projectName="BattleRigs" />
                </Col>
                <Col md={{size:4}}>
                    <GameProjectPoster clazz="btn btn-secondary" imagePath='/img/projectsCode/thumbs/thumb_mw2d.png' projectLinkId="8" projectName='MW2D:Mercs' />
                </Col>
            </Row>
            &nbsp;
        </Container>
        );
    }
}

export default GaragePage;
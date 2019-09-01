import React, { Component } from 'react';
import { Container, Row, Col, Media} from 'reactstrap';

import NavHeader from '../NavHeader';
import { Link } from 'react-router-dom';
/*
WebsiteReact
Peter Roohr
Overview:  
    The entry/main page to the Artwork section of the site.
        Artwork contains the following sub sections:
            Miniatures
            3D Renders
            Recoil
            Concept Art
    TODO - 
*/

class ArtworkMainPage extends Component{
    render(){
        return(
        <Container >
            <NavHeader />
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/artThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>
                    This section details the many art projects I've undertaken across a wide selection of mediums; from concept art, 3D modeling, to painting
                    miniatures for tabletop wargaming.</p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:2}}><ArtProjectPoster clazz="btn btn-info" link="/artwork/recoil" section="Recoil" /></Col>
                <Col md={{size:4}}><ArtProjectPoster link="/artwork/concepts" section="Concept Art" /></Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:2}}><ArtProjectPoster link="/artwork/3d" section="3D Work" /></Col>
                <Col md={{size:4}}><ArtProjectPoster link="/artwork/minis" section="Miniatures" /></Col>
            </Row>
        </Container>
        );
    }
}

export default ArtworkMainPage;

const ArtProjectPoster = (props) =>{
    return(  
    <Link to={props.link} source='code'>
    <Container className={props.clazz + " h-100"}>
        <Row>
            <Col sm={{size:6, offset:3}}><img className="img-fluid h-100" src={props.imagePath} alt="placeholder" /></Col>
        </Row>
        <Row>
            <Col sm={{size:10, offset:1}}><b><h3>{props.section}</h3></b></Col>
        </Row>
    </Container>
    </Link>
    );
}

const ArtworkMainPageSectionBadge = (props) =>{
    return(
    <Container>
        <Link to={props.link}>
        <Row>
            <Col md={{size:3}}>
                <img src={props.imagePath} alt="none"></img>
            </Col>
            <Col md={{size:9}}>
                <Media>
                    <Media body>
                        <Media heading >{props.section}</Media>
                        {props.desc}
                    </Media>
                </Media>
            </Col>
        </Row>
        </Link>
    </Container>
    ); 
}
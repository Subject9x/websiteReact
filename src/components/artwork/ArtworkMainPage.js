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
                <Col md={{size:3, offset:2}}><ArtworkMainPageSectionBadge link="/artwork/recoil" section="Recoil" desc="A science-fiction universe of my own design; a mix of diesel-punk robots and World War 1 aesthetics." /></Col>
                <Col md={{size:3, offset:2}}><ArtworkMainPageSectionBadge link="/artwork/concepts" section="Concept Art" desc="some of this has ended up in projects, other pieces were never used." /></Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:3, offset:2}}><ArtworkMainPageSectionBadge link="/artwork/3d" section="3D Work" desc="I've spent some time working with low-polycount modeling, usually for my game projects." /></Col>
                <Col md={{size:3, offset:2}}><ArtworkMainPageSectionBadge link="/artwork/minis" section="Miniatures" desc="I've spent some time working with low-polycount modeling, usually for my game projects." /></Col>
            </Row>
        </Container>
        );
    }
}

export default ArtworkMainPage;

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
import React, { Component } from 'react';
import { Container, Row, Col, Media} from 'reactstrap';
import NavHeader from '../NavHeader';

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
                    <Col md={{size:2, offset:5}}><h2>Artwork</h2></Col>
                </Row>
                &nbsp;
                <Row>
                    <Col md={{size:10, offset:1}}>
                        This section details the many art projects I've undertaken across a wide selection of mediums; from concept art, 3D modeling, to painting
                        miniatures for tabletop wargaming.
                    </Col>
                </Row>
                &nbsp;
                <Row>
                    <Col md={{size:4}}><ArtworkMainPageSectionBadge section="Recoil" desc="A science-fiction universe of my own design; a mix of diesel-punk robots and World War 1 aesthetics." /></Col>
                    <Col md={{size:4}}><ArtworkMainPageSectionBadge section="Concept Art" desc="some of this has ended up in projects, other pieces were never used." /></Col>
                    <Col md={{size:4}}><ArtworkMainPageSectionBadge section="3D Work" desc="I've spent some time working with low-polycount modeling, usually for my game projects." /></Col>
                </Row>
            </Container>
        );
    }
}

export default ArtworkMainPage;

const ArtworkMainPageSectionBadge = (props) =>{
    return(
    <Media>
        <Media left>
            <Media object data-source={props.imagePath} src={props.imagePath} alt="placeholder"/>
        </Media>
        <Media body>
            <Media heading >{props.section}</Media>
            {props.desc}
        </Media>
    </Media>
    ); 
}
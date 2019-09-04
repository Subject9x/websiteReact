import React, { Component } from 'react';
import { Container, Row, Col, Media} from 'reactstrap';
import { Link } from 'react-router-dom';

import NavHeader from '../NavHeader';
import CommonProjectPanel from '../common/CommonProjectPanel';

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
                <Col md={{size:4, offset:2}}>
                    <CommonProjectPanel clazz="btn btn-info" linkPath="/artwork/recoil" linkVar="0" projectName="Recoil" imagePath="placeholder" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-info" linkPath="/artwork/concepts" linkVar="1" projectName="Concept Art" imagePath="placeholder"/>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:2}}>
                    <CommonProjectPanel clazz="btn btn-info" linkPath="/artwork/3d" linkVar="2" projectName="3D Work" imagePath="placeholder"/>
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-info" linkPath="/artwork/minis" linkVar="3" projectName="Miniatures" imagePath="placeholder"/>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default ArtworkMainPage;

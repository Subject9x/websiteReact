import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import NavHeader from '../NavHeader';
import ArtworkConceptsDropCourier from './concepts/ArtworkConceptsDropCourier';
import ArtworkConceptsDropMecha from './concepts/ArtworkConceptsDropMecha';
import ArtworkConceptsDropCharacters from './concepts/ArtworkConceptsDropCharacters';
import CommonDropSection from '../common/CommonDropSection';
import CommonImagePanel from '../common/CommonImagePanel';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Concepts
    The Courier mini comic - TODO
      best pages - TODO

    mecha - TODO
      battleMETAL concept art - TODO

    various characters  - TODO
      mass effect - TODO
      monitors - TODO

    other snippets - TODO
      monitor snippets - TODO
*/

class ArtworkPageConceptsMain extends Component{
  render(){
    return(
      <Container>
        <NavHeader />
        &nbsp;
        <Row>
          <Col md={{size:10, offset:1}}>Banner Image</Col>
        </Row>
        &nbsp;
        <Row>
          <Col md={{size:8, offset:2}}>
            This is a catch-all for any artwork I've produced that doesn't fall into a clear and distinct project.  Rocket cars, robots, and scoundrels. Part of my free time I spend working on various comic projects. Most of these projects are generally collaborations with friends where I will provide the line-art while the partner writes the story. I have also occasionally some fan art for myself for the video game series, Mass Effect.
          </Col>
        </Row>
        &nbsp;
        <Row>
          <Col md={{size:10, offset:1}}><ArtworkConceptsDropCourier /></Col>
        </Row>
        <Row>
          <Col md={{size:10, offset:1}}><ArtworkConceptsDropMecha /></Col>
        </Row>
        <Row>
          <Col md={{size:10, offset:1}}><ArtworkConceptsDropCharacters /></Col>
        </Row>
      </Container>
    );
  }
}

export default ArtworkPageConceptsMain;
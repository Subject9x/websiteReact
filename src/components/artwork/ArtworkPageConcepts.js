import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';

import NavHeader from '../NavHeader';
import ArtworkConceptsDropCourier from './concepts/ArtworkConceptsDropCourier';
import ArtworkConceptsDropMecha from './concepts/ArtworkConceptsDropMecha';
import ArtworkConceptsDropCharacters from './concepts/ArtworkConceptsDropCharacters';
import CommonHeaderSpanner from '../common/CommonHeaderSpanner';

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
  constructor(props){
    super(props);
    this.state = {
      openCourier : true,
      openMecha : false,
      openChars : false
    };

    this.toggleCourier = this.toggleCourier.bind(this);
    this.toggleMecha = this.toggleMecha.bind(this);
    this.toggleCharacters = this.toggleCharacters.bind(this);
  }
  toggleCourier(){
    this.setState(state => ({openCourier: true, openMecha: false, openChars: false}));
  }
  
  toggleMecha(){
    this.setState(state => ({openCourier: false, openMecha: true, openChars: false}));
  }

  toggleCharacters(){
    this.setState(state => ({openCourier: false, openMecha: false, openChars: true}));
  }

  render(){
    return(
      <Container>
        <NavHeader />
        <CommonHeaderSpanner />
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
          <Col md={{size:3, offset:2}}><Button onClick={this.toggleCourier} color="info" style={{marginBottom: '1rem'}}>The Courier Project</Button>   </Col>
          <Col md={{size:3}}><Button onClick={this.toggleMecha} color="info" style={{marginBottom: '1rem'}}>Mecha Concepts</Button></Col>
          <Col md={{size:3}}><Button onClick={this.toggleCharacters} color="info" style={{marginBottom: '1rem'}}>Various Characters</Button></Col>
          <Col md={{size:1}}></Col>
        </Row>
        <Row>
          <Col md={{size:10, offset:1}}><ArtworkConceptsDropCourier open={this.state.openCourier}/></Col>
        </Row>
        <Row>
          <Col md={{size:10, offset:1}}><ArtworkConceptsDropMecha open={this.state.openMecha}/></Col>
        </Row>
        <Row>
          <Col md={{size:10, offset:1}}><ArtworkConceptsDropCharacters open={this.state.openChars}/></Col>
        </Row>
      </Container>
    );
  }
}

export default ArtworkPageConceptsMain;
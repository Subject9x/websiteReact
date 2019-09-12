import React, { Component } from 'react';
import { Row, Col, Collapse, Button } from 'reactstrap';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Concepts
    The Courier mini comic - TODO
      best pages - TODO
*/

class ArtworkConceptsDropCourier extends Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false};
  }

  toggle(){
    this.setState(state => ({collapse: !state.collapse}));
  }

  render(){
    return(
      <div>
        <Button onClick={this.toggle} color="info" style={{marginBottom: '1rem'}}>The Courier Project</Button>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col md={{size:12}}>The Courier was a mini-comic project collaboration between myself and an old coworker. The goal was to produce an 8-page mini comic done out
            completely from concept, layouts, penciling, then inking, and shading. I was the artist on the project; taking the script and creating the page layouts, concept art, 
            and pencils. </Col>
          </Row>
          <Row>
            TODO - use CommonImagePanel on these guys 
          </Row>
          <Row>
            <Col md={{size:3}}>Sample Page</Col>
            <Col md={{size:3}}>Sample Page 2</Col>
            <Col md={{size:3}}>Concept Sample 1</Col>
            <Col md={{size:3}}>Concept Sample 2</Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default ArtworkConceptsDropCourier;
import React, { Component } from 'react';
import { Row, Col, Collapse, Button} from 'reactstrap';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Concepts
    various characters  - TODO
      mass effect - TODO
      monitors - TODO
*/

class ArtworkConceptsDropCharacters extends Component{
  constructor(props){
    super(props);
    this.state = { collapse: false};
  }

  render(){
    return(
      <div>
        <Collapse isOpen={this.props.open}>
          <Row>
            <Col md={{size:12}}>In addition to my own work, I've also drawn characters for existing properties as fan art. It can be fun to play around in an existing fictional universe from time to time,
            exploring your own take on certain themes and motifs. Other times its interesting to take the established aesthetics of a franchise and move them forward, find out why it works the way it does visually.
            </Col>
          </Row>
          <Row>
            TODO - use CommonImagePanel on these guys
          </Row>
          <Row>
            <Col md={{size:3}}>Monitors 1</Col>
            <Col md={{size:3}}>Monitors 2</Col>
            <Col md={{size:3}}>Monitors 3</Col>
          </Row>
          <Row>
            <Col md={{size:3}}>Mass effect 1</Col>
            <Col md={{size:3}}>Mass effect 2</Col>
            <Col md={{size:3}}>Mass effect 3</Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default ArtworkConceptsDropCharacters;
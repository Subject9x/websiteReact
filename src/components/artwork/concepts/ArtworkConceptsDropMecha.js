import React, { Component } from 'react';
import { Row, Col, Collapse} from 'reactstrap';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Concepts
    mecha - TODO
      battleMETAL concept art - TODO
*/

class ArtworkConceptsDropMecha extends Component{
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
        <input type="button" onClick={this.toggle} color="info" style={{marginBottom: '1rem'}} value="Mecha Concepts"/>   
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col md={{size:12}}>I've </Col>
          </Row>
          <Row>
            TODO - use CommonImagePanel on these guys
          </Row>
          <Row>
            <Col md={{size:3}}>Concept Sample 1</Col>
            <Col md={{size:3}}>Concept Sample 2</Col>
            <Col md={{size:3}}>Concept Sample 3</Col>
          </Row>
          <Row>
            <Col md={{size:3}}>Concept Sample 4</Col>
            <Col md={{size:3}}>Concept Sample 5</Col>
            <Col md={{size:3}}>Concept Sample 6</Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default ArtworkConceptsDropMecha;
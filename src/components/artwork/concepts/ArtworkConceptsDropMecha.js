import React, { Component } from 'react';
import { Row, Col, Collapse, Button } from 'reactstrap';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Concepts
    mecha -
      battleMETAL concept art
      redone earthsiege
      any battletech?
      random mecha
*/

class ArtworkConceptsDropMecha extends Component{
  constructor(props){
    super(props);
    this.state = { collapse: false};
  }

  render(){
    return(
      <div> 
        <Collapse isOpen={this.props.open}>
          <Row>
            <Col md={{size:12}}>This section is a slice of my lifelong passion for giant fighting robots. Since an early age, I was enamored with idea of piloting walking tanks
            in almost any genre. Reinterpreting the look and feel of mecha from various properties is also something I've done as well. Several mecha franchises at this point are 
            quite old, and giving an updated look is both an interesting challenge for me the artist, as well as a chance to allow some neat older designs to really shine
            in a more contemporary style.</Col>
          </Row>
          <Row>
            TODO - use CommonImagePanel on these guys
          </Row>
          <Row>
            <Col md={{size:3}}>Concept Sample 1</Col>
            <Col md={{size:3}}>Concept Sample 2</Col>
            <Col md={{size:3}}>Concept Sample 3</Col>
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
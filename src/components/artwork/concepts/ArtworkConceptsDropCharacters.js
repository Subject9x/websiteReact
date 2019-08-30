import React, { Component } from 'react';
import { Row, Col, Collapse} from 'reactstrap';

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
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false};
  }

  toggle(){
    this.setState(state => ({collapse: !state.collapse}));
  }

  render(){
    return(
      <div>
        <input type="button" onClick={this.toggle} color="info" style={{marginBottom: '1rem'}} value="Various Characters"/>   
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col md={{size:12}}>I've </Col>
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
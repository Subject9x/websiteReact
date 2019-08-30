import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import NavHeader from '../NavHeader';
/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Minis
    Sections
      40k
      Battletech
      Starsiege
      Dystopia Wars
      Other
*/

class ArtworkPageMinisMain extends Component{
  render(){
    return(
      <Container>
        <NavHeader />
        <Row>
          <Col md={{size:10, offset:1}}>Banner Image</Col>
          &nbsp;
        </Row>
      </Container>
    );
  }

}

export default ArtworkPageMinisMain;
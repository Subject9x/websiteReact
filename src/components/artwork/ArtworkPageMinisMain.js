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
        &nbsp;
        <Row>
          <Col md={{size:10, offset:1}}>Banner Image</Col>
        </Row>
        &nbsp;
        <Row>
          <Col md={{Size:8, offset:2}}>I have been playing tabletop wargames for a fairly long time. Originally brought in from trying out Warhammer 40k when I was younger, I now have a sizeable collection of miniatures across a range of games. Painting miniatures has become a very rewarding hobby for me, even if I don't get to play the games that often.</Col>
        </Row>
        &nbsp;
        <Row>
          <Col></Col>
        </Row>
      </Container>
    );
  }

}

export default ArtworkPageMinisMain;
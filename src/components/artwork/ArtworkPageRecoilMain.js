import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import NavHeader from '../NavHeader';
import CommonImagePanel from '../common/CommonImagePanel';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Recoil
  describes the Recoil project, very image-heavy
*/

class ArtworkPageRecoilMain extends Component{
  render(){
    return(
      <Container>
        <NavHeader />
        &nbsp;
        <Row>
          <Col md={{size:10, offset:1}} className="text-center">TODO - banner image</Col>
        </Row>
        &nbsp;
        <Row>
          <Col md={{size:10, offset:1}}><i><h3>"</h3><h4>Like the Red Baron and Battletech put together.</h4><h3>"</h3></i></Col>
        </Row>
        <Row>
          <Col md={{size:8, offset:2}}>
            <p><i>Recoil</i> is a science-fiction universe of my own design. It takes inspiration from the World War One era of history crossed with mecha and diesel-punk aesthetics. The story takes place in a star system far removed from Earth and possible the Milky Way. A human-run empire has take control of a colony world next door, and our main characters
            are all mech pilots in an experimental squad for this empire.</p>
            <p>The entire project so far is contained to a series of sketches I've produced over the years starting around 2010. I've done some background writing but the sketches tell most of the story at this point.</p>
          </Col>
        </Row>
        &nbsp;
        <Row>
          <Col md={{Size:2, offset:1}}>The Armors</Col>
          <Col md={{size:2, offset:1}}>Characters</Col>
          <Col md={{size:2}}>AFV's</Col>
        </Row>
      </Container>
    );
  }
}

export default ArtworkPageRecoilMain;
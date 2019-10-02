import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import NavHeader from '../NavHeader';
import CommonImagePanel from '../common/CommonImagePanel';
import CommonHeaderSpanner from '../common/CommonHeaderSpanner';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork Page - Models
    battleRigs
    battleMETAL
*/

class ArtworkPageModelsMain extends Component{
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
          <Col md={{size:10, offset:1}}>I became interested in creating 3D objects when I first sat down to learn how to make 3D games rather than 2D ones.
           I started out with this low-poly modeling program called Milkshape, mostly self-taught. 
           By the time I reached the <i>battleMETAL</i> game project, I started to teach myself <i>Blender</i> and began leveraging a program called <i>Ultimate Unwrap 3D</i> for texturing.
           Majority of my 3D work is requirements based, usually in service to an ongoing game project.
           </Col>
        </Row>
        &nbsp;
        <Row>
          <Col><CommonImagePanel src="test1" alt="some alt" className="mw-100"/></Col>
          <Col><CommonImagePanel src="test2" alt="some alt" className="mw-100"/></Col>
          <Col><CommonImagePanel src="test3" alt="some alt" className="mw-100"/></Col>
          <Col><CommonImagePanel src="test4" alt="some alt" className="mw-100"/></Col>
          <Col><CommonImagePanel src="test5" alt="some alt" className="mw-100"/></Col>
          <Col><CommonImagePanel src="test6" alt="some alt" className="mw-100"/></Col>
          <Col><CommonImagePanel src="test7" alt="some alt" className="mw-100"/></Col>
        </Row>
      </Container>
    );
  }
}

export default ArtworkPageModelsMain;


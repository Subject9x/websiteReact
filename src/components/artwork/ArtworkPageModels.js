import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import NavHeader from '../NavHeader';
import CommonImagePanel from '../common/CommonImagePanel';

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
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default ArtworkPageModelsMain;


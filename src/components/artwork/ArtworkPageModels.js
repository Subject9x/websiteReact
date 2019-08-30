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
        <Row>
          <Col md={{size:10, offset:1}}>Banner Image</Col>
          &nbsp;
        </Row>
      </Container>
    );
  }
}

export default ArtworkPageModelsMain;
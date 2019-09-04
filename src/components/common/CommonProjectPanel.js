import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

/*
WebsiteReact
Peter Roohr
Overview:
    Spun out from Garage page, this is a nice catch-all for project listings on a page

  important props
    linkPath;
    linkVar;
    imagePath
    projectName
    clazz
*/

class CommonProjectPanel extends Component{
  render(){
    return( 
    <Link to={(props.linkPath + props.linkVar)} params={props.linkVar} source='code'>
    <Container className={props.clazz + " h-100"}>
        <Row>
            <Col sm={{size:6, offset:3}}><img className="img-fluid" src={props.imagePath} alt="placeholder" /></Col>
        </Row>
        <Row>
            <Col sm={{size:10, offset:1}}><b><h3>{props.projectName}</h3></b></Col>
        </Row>
    </Container>
    </Link>
    );
  }
}

export default CommonProjectPanel;
import React, { Component } from 'react';
import { Container, Label, Row, Col } from 'reactstrap';

import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:  
    The main page for the Network section.
        Network contains links to EMR, and existing Roohr Orbital project websites.
    TODO - 
*/

class NetworkPage extends Component{
    render(){
        return(
        <Container >
            <NavHeader/>
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/netThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>This section is for a quick goto for any and all important links that can be found across the rest of the website, but you don't need to dig for. </p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:2, offset:1}}><h4><a href="https://github.com/Subject9x" target="_">My github</a></h4></Col>
                <Col md={{size:2}}><h4><a href="" target="_">Eamonn McHugh-Roohr</a></h4></Col>
                <Col md={{size:2}}><h4><a href="http://battleMETAL.net" target="_">battleMETAL</a></h4></Col>
                <Col md={{size:2}}><h4><a href="https://github.com/Subject9x/battleMETAL" target="_">battleMETAL Source Code</a></h4></Col>
                <Col md={{size:2}}><h4><a href="https://github.com/Subject9x/battleMETAL_website" target="_">battleMETAL-Website</a></h4></Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:2, offset:1}}><h4><a href="https://subjecttotesting.blogspot.com/2018/05/the-cold-rise-from-sleep.html" target="_">battleMETAL Dev Blog</a></h4></Col>
                <Col md={{size:2}}><h4><a href="" target="_">TODO-LANDWAR</a></h4></Col>
                <Col md={{size:2}}><h4><a href="https://github.com/Subject9x/LANDWAR_unitBuilder" target="_">LANDWAR Unit Calculator source</a></h4></Col>
                <Col md={{size:2}}><h4><a href="https://github.com/EamonnMR/Zond" target="_">Zond I Source Code</a></h4></Col>
                <Col md={{size:2}}><h4><a href="" target="_"></a>TODO</h4></Col>
            </Row>
        </Container>
        );
    }
}

export default NetworkPage;

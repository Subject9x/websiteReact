import React, { Component } from 'react';
import { Container, Card, CardBody, CardText, Row, Col } from 'reactstrap';

import NavHeader from '../NavHeader';
import CommonHeaderSpanner from '../common/CommonHeaderSpanner';

/*
WebsiteReact
Peter Roohr
Overview:  
    The main page for the Network section.
        Network contains links to EMR, and existing Roohr Orbital project websites.
*/

const NetworkPageLinkCard = (props) =>{
    return(
    <Col md={{size:3}} className="h-100">
    <Card>
        <CardBody>
            <CardText className="justify-content-md-center">
                <a href={props.link} target="_">{props.title}</a>
            </CardText>
        </CardBody>
    </Card>
    </Col>
    );
}

export default class NetworkPage extends Component{
    render(){
        return(
        <Container>
            <NavHeader/>
            <CommonHeaderSpanner />
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/netThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>This section is for a quick goto for any and all important links that can be found across the rest of the website, but you don't need to dig for. </p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <NetworkPageLinkCard link="https://github.com/Subject9x" title="My github" />
                <NetworkPageLinkCard link="http://eamonnmr.com/" title="Eamonn McHugh-Roohr" />
                <NetworkPageLinkCard link="http://battleMETAL.net" title="battleMETAL" />
                <NetworkPageLinkCard link="https://github.com/Subject9x/battleMETAL" title="battleMETAL Source Code" />
                <NetworkPageLinkCard link="https://github.com/Subject9x/battleMETAL_website" title="battleMETAL Website Source" />
                <NetworkPageLinkCard link="https://subjecttotesting.blogspot.com/2018/05/the-cold-rise-from-sleep.html" title="battleMETAL Dev Blog" />
                <NetworkPageLinkCard link="" title="TODO-LANDWAR" />
                <NetworkPageLinkCard link="https://github.com/Subject9x/LANDWAR_unitBuilder" title="LANDWAR Unit Calculator source" />
                <NetworkPageLinkCard link="https://github.com/EamonnMR/Zond" title="Zond I Source Code" />
            </Row>
        </Container>
        );
    }
}

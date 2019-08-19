import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:
    Project Page is the main template for code projects selected from the Garage.js
*/
/*
    Projec ttitle 
    end date
    description
    website
    team
    tech
    media

*/

/*
    Projec header
        - icon
        - title
        -release date
        -url
*/
const CodeProjectPanelHeader = () =>{
    return(
    <Row>
        <Col md={{size:1, offset:1}}><img src="/img/projectsCode/roohrsite1Thumb.png" alt="an icon"/></Col>
        <Col md={{size:3}}><h2>Project Title</h2></Col>
        <Col md={{size:2}}>Release Date</Col>
        <Col md={{size:4}}><h4>the url</h4></Col>
    </Row>
    );
}
/*
    Panel that displays the team for the project,
    and links to their website.
*/
const CodeProjectPanelTeam = () =>{
    return(
        <Container>
            <Row><Col sm={{size:10, offset:1}}><h3>A description</h3></Col></Row>
            <Row>Desc</Row>
        </Container>
    );
}

/*
    Panel that displays the tech stack for the project.
    Also links where possible
*/
const CodeProjectPanelTech = () =>{
    return(
        <Container>
            <Row>
                <Col sm={{size:10, offset:1}}><h3>Tech Stack</h3></Col>
            </Row>
            <Row>List of Techs</Row>
        </Container>
    );
}

/*
    semi-unlimited list of features for the project
*/
const CodeProjectPanelFeatures = () =>{
    return(
    <Container>
        <Row><Col md={{size:3, offset:1}}><h3>Core Features</h3></Col></Row>
        <Row>
            <Col md={{size:10, offset:1}}>
                list of core features to go here
            </Col>
        </Row>
        <Row>
            <Col>
                make sure to do rows programmatically
            </Col>
        </Row>
    </Container>
    );
}

export class CodeProjectPage extends Component {

    render() {
        return (
        <Container>
            <NavHeader />
            &nbsp;
            <CodeProjectPanelHeader/>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:1}}><CodeProjectPanelTeam/></Col>
                <Col md={{size:4, offset:2}}><CodeProjectPanelTech/></Col>
            </Row>
            &nbsp;
            <CodeProjectPanelFeatures />
            &nbps;
            <Row>
                <Col md={{size:3, offset:1}}><h3>Media</h3></Col>
            </Row>
        </Container>);
    }
}
export default CodeProjectPage;
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import NavHeader from '../NavHeader';
import { withRouter } from 'react-router';

let codeProjectData = require('../../data/projects/codeProjectData.json');


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

export class CodeProjectPage extends Component {
    constructor(props) {
        super(props);
        let projectData = codeProjectData[props.id];
        console.log(props.id);
    }
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
            <CodeProjectPanelFeatures/>
            &nbsp;
            <CodeProjectPanelMediaSection />
            <CodeProjectPanelLongDescription/>
        </Container>);
    }
}
export default withRouter(CodeProjectPage);


/*
    Projec header
        - icon
        - title
        -release date
        -url
*/
const CodeProjectPanelHeader = (props) =>{
    return(
    <Row>
        <Col md={{size:1, offset:1}}><img src="/img/projectsCode/roohrsite1Thumb.png" alt="an icon"/></Col>
        <Col md={{size:3}}><h2>{props.title}</h2></Col>
        <Col md={{size:2}}>Release Date: date</Col>
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
            <Row><Col sm={{size:10, offset:1}}><h3>Team of peeps</h3></Col></Row>
            <Row>List of teamers</Row>
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
                <ListGroup>
                    <ListGroupItem>
                        A list item
                    </ListGroupItem>
                </ListGroup>
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

/*
    Json data should be 2D array of media objects,
        allowable objets
            -> image, expandable
            -> youtube link frame
            -? maybe allow for some label text
*/
const CodeProjectPanelMediaSection = () =>{
    return(
        <Container>
            <Row>
                <Col md={{size:10, offset:1}}>X by Y grid of media objects</Col>
            </Row>
        </Container>
    );
}

/*
    The long-form description is only needed if the project needs a big description
*/
const CodeProjectPanelLongDescription = () =>{
    return(
        <Container>
            <Row>
                <Col md={{size:8, offset:2}}>
                    A longer description of the project if this is required, run a check on the json data to see if its neeeded.
                </Col>
            </Row>
        </Container>

    )
}
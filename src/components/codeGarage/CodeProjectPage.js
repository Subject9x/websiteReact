import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Label } from 'reactstrap';
import NavHeader from '../NavHeader';
import { withRouter } from 'react-router';

import ProjectDataCode from '../../data/projects/ProjectDataCode.js';

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

class CodeProjectPage extends Component {
    render() {
        /*console.log(this.props.match.params.id);*/
        /*cconsole.log(ProjectDataCode);*/
        const theData = ProjectDataCode.data[this.props.match.params.id];
        if( theData === undefined){
            /* quick safety valve for null project data */
            return(
                <Container>
                    <NavHeader />
                    <Row>
                        <Col><h2>Project data not found!</h2></Col>
                    </Row>
                </Container>
            );
        }
        return (
        <Container>
            <NavHeader />
            &nbsp;
            <CodeProjectPanelHeader thumb={theData.thumb} title={theData.title} date={theData.date} url={theData.url}/>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:1}}><CodeProjectPanelTeam teamList={theData.team}/></Col>
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
Project header
    -icon
    -title
    -release date
    -url
*/
const CodeProjectPanelHeader = (props) =>{
    return(
    <Row>
        <Col md={{size:1, offset:1}}><img src={props.thumb} alt="an icon"/></Col>
        <Col md={{size:3}}><h2>{props.title}</h2></Col>
        <Col md={{size:2}}>Release Date: {props.date}</Col>
        <Col md={{size:4}}><a href={props.url}><h3>main website</h3></a></Col>
    </Row>
    );
}


const CodeProjectPanelTeamListItem = (props) =>{
    let rowData;
    console.log('CodeProjectPanelTeamListItem:'+props.name +' '+ props.url);
    if( props.url !== undefined){
        rowData = <a href={props.url}>+ {props.name}</a>
    }
    else{
        rowData = props.name;
    }
    return(
        <Row>
            <Col md={{size:3, offset:2}}>{rowData}</Col>
        </Row>
    )
}

/*
    Panel that displays the team for the project,
    and links to their website.
*/
const CodeProjectPanelTeam = (props) =>{

    return(
        <Container>
            <Row><Col sm={{size:10, offset:1}}><h3>Team of peeps</h3></Col></Row>
            <Row>List of teamers</Row>
            {props.teamList.map((team)=>{
                return(
                    <CodeProjectPanelTeamListItem name={team.name} url={team.url}/>
                );
            })}
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
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import NavHeader from '../NavHeader';
import { withRouter } from 'react-router';

import CommonImagePanel from '../common/CommonImagePanel'
import ProjectDataCode from '../../data/projects/ProjectDataCode.js';
import ProjectDataBoardGames from '../../data/projects/ProjectDataBoardGames.js';

/*
WebsiteReact
Peter Roohr
Overview:
    Project Page is the main template for code projects selected from the Garage.js

    Project title 
    end date
    description
    website
    team
    tech
    media
*/

class CodeProjectPage extends Component {
    render() {
        let theData;
        if(this.props.match.path === '/garage/project/:id'){
            theData = ProjectDataCode.data[this.props.match.params.id];
        }
        else{
            theData = ProjectDataBoardGames.data[this.props.match.params.id];
        }
        
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
                <CodeProjectInfoPanelGroup team={theData.team} tech={theData.tech} links={theData.links} tooling={theData.tooling}/>
            </Row>
            &nbsp;
            <Row>
                <CodeProjectPanelFeatures features={theData.features}/>
            </Row>
            &nbsp;
            <CodeProjectPanelMediaSection media={theData.mediaData}/> 
            <CodeProjectPanelLongDescription descText={theData.desc}/>
        </Container>
        );
    }
}
export default withRouter(CodeProjectPage);


/*
Project header
    icon, title, release date, url
*/
const CodeProjectPanelHeader = (props) =>{
    let href;
    if(props.url === undefined){
        href = <div></div>
    }
    else{
        href = <Col md={{size:4, offset:1}}><a href={props.url}  target="_"><h3>main website</h3></a></Col>;
    }
    return(
    <Container>
        <Row>
            <Col md={{size:1, offset:1}}><img src={props.thumb} alt="an icon"/></Col>
            <Col md={{size:6}}><h2>{props.title}</h2></Col>
        </Row>
        &nbsp;
        <Row>
            <Col md={{size:6, offset:1}}><h4><b>Release Date:</b></h4>{props.date}</Col>
            {href}
        </Row>
    </Container>
    );
}

const CodeProjectPanelInfoListItem = (props) =>{
    let rowData;
    if( props.listItemUrl !== undefined){
        rowData = <a href={props.listItemUrl} target="_">{props.listItemName}</a>
    }
    else{
        rowData = props.listItemName;
    }
    return(
        <ListGroupItem>{rowData}</ListGroupItem>
    )
}

const CodeProjectInfoPanel = (props) =>{
    if(props.itemList !== undefined){
        return(
        <Container>
            <Row><Col sm={{size:10}}><h3>{props.title}</h3></Col></Row>
            <Row>
                <Col md={{size:10, offset:0}}>
                    <ListGroup>
                        {props.itemList.map((item, index)=>{
                            return(<CodeProjectPanelInfoListItem listItemName={item.name} listItemUrl={item.url} key={index}/>);
                        })}
                    </ListGroup>
                </Col>
    
            </Row>
        </Container>
        );
    }
    else{
        return(null);
    }
}

const CodeProjectInfoPanelGroup = (props) =>{
    return(
    <Container>
        <Row>
            <Col md={{size:4}}>
                <CodeProjectInfoPanel title="Team" itemList={props.team} />
            </Col>
            <Col md={{size:4}}>
                <CodeProjectInfoPanel title="Tech" itemList={props.tech}/>
            </Col>
            <Col md={{size:4}}>
                <CodeProjectInfoPanel title="Links" itemList={props.links} />
            </Col>
            <Col md={{size:4}}>
                <CodeProjectInfoPanel title="Tooling" itemList={props.tooling}/>
            </Col>
        </Row>
    </Container>
    );
}


/*
    semi-unlimited list of features for the project
*/
const CodeProjectPanelFeatures = (props) =>{
    if(props.features.length <= 0){
        return(null);
    }
    else{
        return(
        <Container>
            <Row><Col md={{size:3, offset:1}}><h3>Core Features</h3></Col></Row>
            <Row>
                <Col md={{size:10, offset:1}}>
                    <ul>
                        {props.features.map((feat, index)=>{
                            return(<li key={index}>{feat}</li>);
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
        );
    }
}

/*
    Json data should be 2D array of media objects,
        allowable objets
            -> image, expandable
            -> youtube link frame
            -? maybe allow for some label text
*/
const CodeProjectPanelMediaSection = (props) =>{
    if(props.media === undefined || props.media.length <= 0){
        return(null);
    }
    else{
        return(
            <Row><Col md={{size:3, offset:1}}><h3>Media</h3></Col></Row>,
            props.media.map((row, index) =>{
                return(<CodeProjectPanelMediaSectionRow mediaRow={row} key={index}/>);
            })
        ); 
    }
}

const CodeProjectPanelMediaSectionRow = (props) =>{
    if(props.mediaRow.length <= 0){
        return(null);
    }
    else{
        return(
            <Row className="justify-content-md-center">
                {props.mediaRow.map((item, index)=>{
                    return(
                        <CodeProjectPanelMediaSectionRowItem mediaItem={item} key={index}/>
                    );
                })}
            </Row>
        );
    }
}

const CodeProjectPanelMediaSectionRowItem = (props) =>{
    return(
        <Col md={{size:3}}>
            <CommonImagePanel src={props.mediaItem} alt="some alt" className="mw-100"/>
        </Col>
    );
}

/*
Creates 1 paragraph section of the the data.desc[] piece.
*/
const CodeProjetPanelDescriptionParagraph = (props) =>{
    return(
        <Row>
            <Col md={{size:10, offset:1}}>
                <p>{props.textData}</p>
            </Col>
        </Row>
    );
}

/*
The long-form description is only needed if the project needs a big description
*/
const CodeProjectPanelLongDescription = (props) =>{
    if(props.descText === undefined || props.descText.length <= 0){
        return(null);
    }
    else{
        return(
        <Container>

            <Row>
                <Col md={{size:3, offset:1}}><h3>Description</h3></Col>
            </Row>
            
            {props.descText.map((textParagraph, index)=>{
                return(
                    <CodeProjetPanelDescriptionParagraph textData={textParagraph} key={index}/>
                );
              })}
        </Container>
        );  
    }
}
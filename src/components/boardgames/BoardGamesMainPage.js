import React, { Component } from 'react';
import { Container, Label} from 'reactstrap';
import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:  
    The entry/main page to the Board Games section of the site.
        Board Games page details all the work I've done for board game projects
            Free Lunch's PitFighter
            LANDWAR

            Alpha Kill Team Strike Conversion
            Alpha Strike Mobile App (unofficial)
    TODO - 
*/

class BoardGamesMainPage extends Component{
    render(){
        return(
            <Container >
                <NavHeader />
                <Label>You've reached the Board Games.</Label>
            </Container>
        );
    }
}

export default BoardGamesMainPage;

import React, { Component } from 'react';
import { Container, Label } from 'reactstrap';
import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:  
    The entry/main page to the Artwork section of the site.
        Artwork contains the following sub sections:
            Miniatures
            3D Renders
            Recoil
            Concept Art
    TODO - 
*/

class ArtworkMainPage extends Component{
    render(){
        return(
            <Container >
                <NavHeader />
                <Label>You've reached the Artworks.</Label>
            </Container>
        );
    }
}

export default ArtworkMainPage;

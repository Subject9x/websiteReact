import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavHeader from '../NavHeader';

/*
WebsiteReact
Peter Roohr
Overview:
    Project Page is the main template for code projects selected from the Garage.js
*/
export class CodeProjectPage extends Component {
    render() {
        return (
        <Container>
            <NavHeader />
        </Container>);
    }
}
export default CodeProjectPage;
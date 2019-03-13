/*
WebsiteReact
Peter Roohr
Overview:
    main js entry point
*/
import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Button, Container, Col, Row } from 'reactstrap';
import HomePage from "./components/home/HomePage"

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1> simple</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/" component={HomePage}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
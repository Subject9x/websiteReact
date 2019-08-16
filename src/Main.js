import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from "./components/home/HomePage";
import GaragePage from "./components/codeGarage/GaragePage";

/*
WebsiteReact
Peter Roohr
Overview:
    main js entry point,
    probably not need
*/

const history= createBrowserHistory();

const routing=(
    <Router history={history} >
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/garage" component={GaragePage}/>
        </Switch>
    </Router>
)

class Main extends Component{
    render(){
        return(
            <div>here's a nav bar</div>,
            routing
        );
    }
}

export default Main;
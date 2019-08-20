import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import GaragePage from './components/codeGarage/GaragePage';
import ArtworkMainPage from './components/artwork/ArtworkMainPage';
import BoardGamesMainPage from './components/boardgames/BoardGamesMainPage';
import NetworkPage from './components/network/NetworkPage';
import AboutPage from './components/AboutPage';
import CodeProjectPage from './components/codeGarage/CodeProjectPage';

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
            <Route path="/garage" exact component={GaragePage}/>
            <Route path="/artwork" exact component={ArtworkMainPage}/>
            <Route path="/boardgames" exact component={BoardGamesMainPage}/>
            <Route path="/network" exact component={NetworkPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/garage/project/:id" render={props => {return <CodeProjectPage {...props}/>;}}/>
        </Switch>
    </Router>
)

class Main extends Component{
    render(){
        return(
            routing
        );
    }
}

export default Main;
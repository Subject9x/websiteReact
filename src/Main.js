import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import GaragePage from './components/codeGarage/GaragePage';
import ArtworkNav from './components/artwork/ArtworkNavBar';
import BoardGamesMainPage from './components/boardgames/BoardGamesMainPage';
import NetworkPage from './components/network/NetworkPage';
import AboutPage from './components/AboutPage';
import CodeProjectPage from './components/codeGarage/CodeProjectPage';

/*
WebsiteReact
Peter Roohr
Overview:
    main js entry point
*/

const history= createBrowserHistory();

const Routing= (props) =>{
    return(
    <Router history={history} >
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/garage" exact component={GaragePage}/>
            <Route path="/artwork/:page" exact render={props => {return <ArtworkNav {...props}/>;}} />
            <Route path="/boardgames" exact component={BoardGamesMainPage}/>
            <Route path="/boardgames/project/:id" exact render={props => {return <CodeProjectPage {...props}/>;}}/>
            <Route path="/network" exact component={NetworkPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/garage/project/:id" exact source='code' render={props => {return <CodeProjectPage {...props}/>;}}/>
        </Switch>
    </Router>
    );
}

class Main extends Component{
    render(){
        return(
            <Routing />
        );
    }
}

export default Main;
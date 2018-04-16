import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import { MainView } from '../views/MainView'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <MainView>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </MainView>
        )
    }
}
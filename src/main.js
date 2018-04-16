import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { store } from './store';
import style from './main.css';

import Header from './components/containers/Header';
import Main from './components/containers/Main';
import Footer from './components/containers/Footer';

const Fragment = React.Fragment;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <Route component={Header} />
                <Route component={Main} />
                <Route component={Footer} />
            </Fragment>
        </Router>
    </Provider>,
    document.getElementById("app"));

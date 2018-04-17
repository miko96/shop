import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Home} />
            </Router>
        );
    }
};
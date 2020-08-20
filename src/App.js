import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

import {
    BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="app"> {/* BEM class naming convention : lowercase app*/}
            <Router>
                <Header/> 
                <Switch>
                    <Route exact path="/search">
                        <h1>Search page</h1>
                    </Route>
                    <Route path="/">
                        <div className="app__page">
                            <p>homepage</p>
                            <Sidebar />
                            <RecommendedVideos/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

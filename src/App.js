import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Show from './Pages/Show';
import New from './Pages/New';
import Nav from './Components/Nav';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/new" exact component={New} />
                    <Route path="/:id" component={Show} />
                    <Route path="/edit/:id" component={Edit} />
                </Switch>
            </div>
        );
    }
}

export default App;

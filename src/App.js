import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Show from './Pages/Show';
import New from './Pages/New';
import Nav from './Components/Nav';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bountiesList: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/bounties');
        const data = await response.json();
        this.setState({ bountiesList: data.bounties, isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="App">
                    <Nav />
                    <h1>Loading...</h1>
                </div>
            );
        }
        return (
            <div className="App">
                <Nav />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => {
                            return <Home bounties={this.state.bountiesList} />;
                        }}
                    />
                    <Route path="/new" exact component={New} />
                    <Route
                        path="/show/:id"
                        render={({ location }) => {
                            return <Show location={location} />;
                        }}
                    />
                    <Route path="/edit/:id" component={Edit} />
                </Switch>
            </div>
        );
    }
}

export default App;

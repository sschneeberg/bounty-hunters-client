import React, { Component } from 'react';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Show from './Pages/Show';
import New from './Pages/New';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <Edit />
                <Show />
                <New />
            </div>
        );
    }
}

export default App;

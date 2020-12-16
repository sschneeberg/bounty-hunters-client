import React, { Component } from 'react';
import BountyLink from '../Components/BountyLink';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <BountyLink bounty={{ id: 1, name: 'test' }} />
            </div>
        );
    }
}

export default Home;

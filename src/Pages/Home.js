import React, { Component } from 'react';
import BountyLink from '../Components/BountyLink';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const bountyLinks = this.props.bounties.map((bounty) => {
            return (
                <BountyLink
                    key={`${bounty.name}: ${bounty._id}`}
                    bounty={bounty}
                />
            );
        });

        return (
            <div>
                <h2>Home Page</h2>
                {this.props.bounties.length > 0
                    ? bountyLinks
                    : 'No bounties to show'}
            </div>
        );
    }
}

export default Home;

import React, { Component } from 'react';

class Show extends Component {
    render() {
        const bounty = this.props.location.state;
        const hunters = bounty.hunters.map((hunter) => {
            return (
                <p className="hunter" key={`${hunter.name}: ${hunter._id}`}>
                    {hunter.name}
                </p>
            );
        });
        return (
            <div>
                <h2>{bounty.name}</h2>
                <div className="bountyInfo">
                    <h5>Wanted for: {bounty.wantedFor}</h5>
                    <h5>Reward: ${bounty.reward}</h5>
                    <h5>Hunter(s) on file:</h5>
                    <ul>
                        {bounty.hunters.length > 0
                            ? hunters
                            : 'No hunters on file'}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Show;

import React, { Component } from 'react';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounty: this.props.location.state.bounty
        };
    }

    render() {
        if (!this.state.bounty) {
            return (
                <div className="App">
                    <h1>Loading...</h1>
                </div>
            );
        }

        let hunters = 'No hunters found';

        if (this.state.bounty.hunters.length > 0) {
            hunters = this.state.bounty.hunters.map((hunter) => {
                return (
                    <p className="hunter" key={`${hunter.name}: ${hunter._id}`}>
                        {hunter.name}
                    </p>
                );
            });
        }

        return (
            <div>
                <h2>{this.state.bounty.name}</h2>
                <div className="bountyInfo">
                    <h5>Wanted for: {this.state.bounty.wantedFor}</h5>
                    <h5>Reward: ${this.state.bounty.reward}</h5>
                    <h5>Hunter(s) on file:</h5>
                    <ul>{hunters}</ul>
                </div>
            </div>
        );
    }
}

export default Show;

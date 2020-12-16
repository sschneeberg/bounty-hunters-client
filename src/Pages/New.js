import React, { Component } from 'react';
import FormField from '../Components/FormField';

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            wantedFor: '',
            reward: 1000,
            client: '',
            ship: '',
            captured: false,
            lastSeen: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitForm = () => {
        fetch('http://localhost:3001/bounties', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(() => {
            this.setState({
                name: '',
                wantedFor: '',
                reward: 1000,
                client: '',
                ship: '',
                captured: false,
                lastSeen: ''
            });
        });
    };

    render() {
        return (
            <div>
                <h1>New Bounty</h1>
                <form
                    className="bountyInfo"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.submitForm();
                    }}>
                    <FormField
                        label="name"
                        display="Name: "
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <FormField
                        label="ship"
                        display="Ship: "
                        value={this.state.ship}
                        onChange={this.onChange}
                    />
                    <FormField
                        label="wantedFor"
                        display="Wanted For: "
                        value={this.state.wantedFor}
                        onChange={this.onChange}
                    />
                    <FormField
                        label="lastSeen"
                        display="Last Seen: "
                        value={this.state.lastSeen}
                        onChange={this.onChange}
                    />
                    <FormField
                        label="reward"
                        display="Reward: $"
                        value={this.state.reward}
                        onChange={this.onChange}
                    />
                    <FormField
                        label="client"
                        display="Client: "
                        value={this.state.client}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

export default New;

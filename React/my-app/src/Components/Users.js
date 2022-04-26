import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get(`https://localhost:7082/api/Users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>UserName</h1>
                    <p>{this.state.users.map(users => <p>{users.userName}</p>)}</p>
                </div>
            </div>
        )
    }
}
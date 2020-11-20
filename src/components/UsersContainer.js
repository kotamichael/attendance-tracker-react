import React, { Component } from 'react';
import process from "process"
import axios from 'axios';

import User from './User';

class UsersContainer extends Component {
	constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const { REACT_APP_API_URL } = process.env;
        console.log(`ENVS: ${process.env.NODE_ENV}`);
        console.log(`API_URL: ${process.env.REACT_APP_API_URL}`);
        console.log(`API_URL: ${REACT_APP_API_URL}`);
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users.json`)
        .then(response => {
            this.setState({
                users: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="users-container">
                {this.state.users.map( user => {
                    return (<User user={user} key={user.id} />)
                })}
            </div>
        )
    }
}

export default UsersContainer;
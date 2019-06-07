import React, { Component } from 'react';

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from 'aws-exports'
import { Authenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin: false 
        }
    }

    componentDidMount() {
        let isLogin = false;
        Auth.currentSession()
            .then(token => isLogin = token !== null)
            .catch(err => console.log(err));
        
        this.setState({
            isLogin
        });
    }

    handleLogin = async (e) => {
        e.preventDefault();
        await Auth.signIn(this.state.username, this.state.password);
        this.setState({
            isLogin: true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Authenticator>
            </Authenticator>
        );
    }
}

export default Container;
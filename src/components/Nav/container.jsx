import React, { Component } from 'react';
import Nav from './presenter';

import { Auth } from 'aws-amplify';

class Container extends Component {
    
    handleLogout = () => {
        Auth.signOut()
    }

    render() {
        return (
            <Nav logout={this.handleLogout} />
        );
    }
}

export default Container;
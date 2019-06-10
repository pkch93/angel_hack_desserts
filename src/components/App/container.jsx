import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './presenter';

class Container extends Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

export default Container;
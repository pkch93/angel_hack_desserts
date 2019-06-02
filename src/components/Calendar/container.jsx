import React, { Component } from 'react';
import Calendar from './presenter';

class Container extends Component {
    render() {
        return (
            <Calendar data={this.props.score} />
        )
    }
}

export default Container;
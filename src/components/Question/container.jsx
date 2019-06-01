import React, { Component } from 'react';
import { Question } from './presenter';

import { API } from 'aws-amplify';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            score: 0
        }
    }

    async componentDidMount() {
        const id = 1;
        await API.get("questionAPI", `/questions`, {
            body: {
                id
            }
        })
        .then( res => {
            this.setState({ question: res.data.content })
        })
        .catch( err => console.log(err.response) );
        console.log(this.state.question);
    }

    render() {
        return (
            <Question question={this.state.question}/>
        );
    }
}

export default Container;
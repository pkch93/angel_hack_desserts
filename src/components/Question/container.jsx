import React, { Component } from 'react';
import { Question } from './presenter';

import { API, graphqlOperation } from 'aws-amplify';

const GetQuestion = `query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
        contents
        yes
        no
    }
}
`

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            score: 0
        }
    }

    async componentDidMount() {
        const id = 3;
        const result = await API.graphql(graphqlOperation(GetQuestion, { id }));
        this.setState({ question: result.data.getQuestion.contents })
    }

    render() {
        return (
            <Question question={this.state.question}/>
        );
    }
}

export default Container;
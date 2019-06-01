import React, { Component } from 'react';
import { Question, Button, QuestionHeader } from './presenter';

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
        const id = 1;
        const result = await API.graphql(graphqlOperation(GetQuestion, { id }));
        this.setState({ question: result.data.getQuestion.contents })
    }

    render() {
        return (
            <div className="question-block">
                <QuestionHeader />
                <Question question={this.state.question}/>
                <div className="btns">
                    <Button btnType="no" btnContent="아니오" />
                    <Button btnType="yes" btnContent="예" />
                </div>
            </div>
        );
    }
}

export default Container;
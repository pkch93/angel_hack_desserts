import React, { Component } from 'react';
import { Question, Button, QuestionHeader } from './presenter';
import Insite from '../Insite';

import { API, graphqlOperation } from 'aws-amplify';

const GetQuestion = `query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
        contents
        yes
        no
    }
}
`

const PostScore = `

`

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            score: 0,
            cnt: 0,
            used: []
        }
    }

    getRandomNumber = () => Math.floor(Math.random() * 131) + 1;

    fetchQuestion = async () => {
        let id = this.getRandomNumber();
        while (this.state.used.includes(id)) {
            id = this.getRandomNumber();
        }
        const result = await API.graphql(graphqlOperation(GetQuestion, { id }));
        this.setState({ 
            question: result.data.getQuestion.contents,
            yes: result.data.getQuestion.yes,
            no: result.data.getQuestion.no,
            used: [...this.state.used, id]
        });
        console.log(this.state.cnt)
    }

    componentDidMount() {
        this.fetchQuestion();
    }

    handleBtnClick = e => {
        this.setState({
            score: this.state.score + parseInt(e.target.value),
            cnt: this.state.cnt + 1
        });

        if (this.state.cnt === 5) {

        } else {
            this.fetchQuestion();
        }
    }


    render() {
        return (
            <>
                { this.state.cnt === 5 ? 
                    <Insite /> :
                    <div className="question-block">
                        <QuestionHeader />
                        <Question question={this.state.question}/>
                        <div className="btns">
                            <Button 
                                btnType="no"
                                btnContent="아니오"
                                value={this.state.no}
                                onClick={this.handleBtnClick}
                            />
                            <Button 
                                btnType="yes"
                                btnContent="예"
                                value={this.state.yes}
                                onClick={this.handleBtnClick}
                            />
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default Container;
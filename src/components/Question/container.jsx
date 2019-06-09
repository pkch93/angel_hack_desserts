import React, { Component } from 'react';
import { Question, Button, QuestionHeader } from './presenter';
import Insite from '../Insite';

import { API, graphqlOperation, Auth } from 'aws-amplify';

const GetQuestion = `query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
        contents
        yes
        no
    }
}
`

const PostScore = `mutation NewScore($score: Int!, $username: String!, $create_date: String!) {
    createScore(input: {
        score: $score,
        username: $username,
        create_date: $create_date
    }){
        id
        score
        username
        create_date
    }
}
`

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            score: 0,
            cnt: 5,
            used: []
        }
    }

    getRandomNumber = () => Math.floor(Math.random() * 121) + 1;

    fetchQuestion = async () => {
        let id = this.getRandomNumber();
        while (this.state.used.includes(id)) {
            id = this.getRandomNumber();
        }
        console.log(id);
        const result = await API.graphql(graphqlOperation(GetQuestion, { id }));
        console.log(result);
        this.setState({ 
            question: result.data.getQuestion.contents,
            yes: result.data.getQuestion.yes,
            no: result.data.getQuestion.no,
            used: [...this.state.used, id]
        });
    }

    componentDidMount() {
        this.fetchQuestion();
    }

    handleBtnClick = e => {
        this.setState({
            score: this.state.score + parseInt(e.target.value),
            cnt: this.state.cnt + 1
        });

        if (this.state.cnt === 4) {
            const now = new Date();
            const scoreData = {
                score: this.state.score,
                username: "",
                create_date: now.toISOString()
            };
            
            Auth.currentSession()
                .then(data => scoreData.username = data.getIdToken().payload['cognito:username'])
                .catch(err => console.log(err));
            API.graphql(graphqlOperation(PostScore, scoreData))
        } else {
            this.fetchQuestion();
        }
    }

    jumpNextQuestion = () => {
        this.fetchQuestion();
    }


    render() {
        return (
            <>
                { this.state.cnt === 5 ? 
                    <Insite /> :
                    <div className="question-block">
                        <QuestionHeader skip={this.jumpNextQuestion} />
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
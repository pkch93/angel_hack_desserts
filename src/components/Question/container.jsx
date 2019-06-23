import React, { Component } from 'react';
import { Question } from './presenter';
import { Redirect } from 'react-router-dom';

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

    getNoneUsedNumber = () => {
        let id = this.getRandomNumber();
        while (this.state.used.includes(id)) {
            id = this.getRandomNumber();
        }
        return id;
    };

    // TODO: 현재 한번씩 5번의 요청 서버에 전달하는데 이를 한번 요청으로 5개의 질문을 가져오도록 변경
    fetchQuestion = async () => {
        const id = this.getNoneUsedNumber();
        const result = await API.graphql(graphqlOperation(GetQuestion, { id }));
        
        this.setState({ 
            question: result.data.getQuestion.contents,
            yes: result.data.getQuestion.yes,
            no: result.data.getQuestion.no,
            used: [...this.state.used, id]
        });
    };

    async componentDidMount() {
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

            // TODO: 추후 로그인 인증이 끝나면 localStorage에 인증 정보 저장
            Auth.currentSession()
                .then(data => scoreData.username = data.getIdToken().payload['cognito:username'])
                .catch(err => console.log(err));
            API.graphql(graphqlOperation(PostScore, scoreData))
        } else {
            this.fetchQuestion();
        }
    }

    render() {
        return (
            <>
                { this.state.cnt === 5 ? 
                    <Redirect to="/insite" /> :
                    <Question 
                        handleSkip={this.fetchQuestion}
                        handleBtnClick={this.handleBtnClick}
                        question={this.state.question}
                        yes={this.state.yes}
                        no={this.state.no}
                    />
                }
            </>
        );
    }
}

export default Container;

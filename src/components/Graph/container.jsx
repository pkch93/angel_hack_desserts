import React, { Component } from 'react';

import Graph from './presenter';

import { API, graphqlOperation, Auth } from 'aws-amplify';

const ListScores = `query ListScores {
    listScores(limit: 100) {
        items {
            id
            score
            username
            create_date
        }
    }
}`

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            date: new Date()
        };
    }

    async componentDidMount() {
        // 현재 날짜 기준으로 월간 데이터 가져오기
    }

    handleClickWeek = () => {
        // 주간 데이터 가져오기
    };

    handleClickMonth = () => {
        // 월간 데이터 가져오기
    };

    render() {
        return (    
            <Graph />
        );
    }
}

export default Container;

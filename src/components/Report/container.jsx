import React, { Component } from 'react';

import Report from './presenter';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'pkch',
            month: 5,
            score: 75,
            data: this.makeData()
        }
    }

    makeData = () => ([
        {
            day: "월",
            "1주차": 1,
            "2주차": 6,
            "3주차": 3,
            "4주차": 8,
            "5주차": 2
        },
        {
            day: "화",
            "1주차": 6,
            "2주차": 3,
            "3주차": 4,
            "4주차": 9,
            "5주차": 3
        },
        {
            day: "수",
            "1주차": 3,
            "2주차": 5,
            "3주차": 9,
            "4주차": 6,
            "5주차": 1
        },
        {
            day: "목",
            "1주차": 2,
            "2주차": 9,
            "3주차": 6,
            "4주차": 7,
            "5주차": 5
        },
        {
            day: "금",
            "1주차": 9,
            "2주차": 8,
            "3주차": 5,
            "4주차": 3,
            "5주차": 7
        },
        {
            day: "토",
            "1주차": 5,
            "2주차": 4,
            "3주차": 7,
            "4주차": 2,
            "5주차": 8
        },
        {
            day: "일",
            "1주차": 7,
            "2주차": 10,
            "3주차": 5,
            "4주차": 1,
            "5주차": 6
        },
    ]);

    render() {
        const { username, month, score, data } = this.state;
        return (
            <Report
                username={username}
                month={month}
                score={score}
                data={data}
            />
        );
    }
}

export default Container;
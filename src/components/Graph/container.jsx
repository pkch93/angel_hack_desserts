import React, { Component } from 'react';

import Graph from './presenter';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    async componentDidMount() {
        // 현재 날짜 기준으로 월간 데이터 가져오기
    }

    render() {
        return (    
            <Graph data={this.props.data}/>
        );
    }
}

export default Container;

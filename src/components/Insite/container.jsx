import React, { Component } from 'react';

import { Insite } from './presenter';

import { API, graphqlOperation, Auth } from 'aws-amplify';

const ListInsites = `query ListInsites {
    listInsites(limit: 50) {
        items {
            id
            category
            contents
        }
    }
}`;

const ListScores = `query ListScores {
    listScores(limit: 100) {
        items {
            id
            score
            username
            create_date
        }
    }
}
`

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: "",
            username: "",
            score: "",
            data: [],
            graph: true,
            calendar: false,
            insitemenu: false
        }
    }

    async componentDidMount() {
        const newState = {}
        const result = await API.graphql(graphqlOperation(ListInsites));
        const categoriedInsite = result.data.listInsites.items.filter(item => item.category === 8);
        newState.sentence = categoriedInsite[Math.floor(Math.random() * categoriedInsite.length)];
        
        await Auth.currentSession()
        .then(data => newState.username = data.getIdToken().payload['cognito:username'])
        .catch(err => console.log(err));
        
        // TODO: SSR 서버에서 해당 유저와 날짜를 전달받아서 로직 처리
        const basicDate = new Date(2018, 4);
        const scores = await API.graphql(graphqlOperation(ListScores));
        const filteredScores = scores.data.listScores.items.filter(score => {
            return (basicDate.getMonth() -1 <= new Date(score.create_date).getMonth() && new Date(score.create_date).getMonth() <= basicDate.getMonth());
        });
        
        this.setState({
            sentence: newState.sentence.contents,
            username: newState.username,
            data: filteredScores
        });
    }

    handleInsiteNavMenuHover = (e) => {
        e.stopPropagation();
        this.setState({
            ...this.state,
            insitemenu: this.state.insitemenu ? false : true
        })
    };

    handleInsiteNavMenuForComponents = () => {
        this.setState({
            ...this.state,
            calendar: this.state.calendar ? false : true,
            graph: this.state.graph ? false : true
        })
    };

    render() {
        const { data } = this.state;
        const processedData = data.map(score => {
            const date = new Date(score.create_date)
            return {
                name: (date.getMonth() + 1) + "/" + date.getDate(),
                value: score.score 
            }
        });

        processedData.sort((a, b) => {
            const temp1 = a.name.split('/').map(i => parseInt(i));
            const temp2 = b.name.split('/').map(i => parseInt(i));
            if (temp1[0] < temp2[0]) {
                return -1;
            } else if (temp1[0] === temp2[0] && temp1[1] < temp2[1]){
                return -1;
            }
            return 1;
        });

        return (
            <Insite
                username={this.state.username}
                sentence={this.state.sentence}
                date={data[0] === undefined ? undefined : new Date(data[0].create_date)}
                moodData={processedData}
                graph={this.state.graph}
                calendar={this.state.calendar}
                insitemenu={this.state.insitemenu}
                onClickInsiteNav={this.handleInsiteNavMenuHover}
                onClickToggleComponent={this.handleInsiteNavMenuForComponents}
            />
        );
    }
}

export default Container;
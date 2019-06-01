import React, { Component } from 'react';
import { Insite, GraphNav, Graph } from './presenter';

import { API, graphqlOperation, Auth } from 'aws-amplify';

const ListInsites = `query ListInsites {
    listInsites {
        items {
            id
            category
            contents
        }
    }
}`;

class Container extends Component {
    constructor() {
        super();
        this.state = {
            insite: "",
            username: ""
        }
    }

    async componentDidMount() {
        const newState = {}
        const result = await API.graphql(graphqlOperation(ListInsites));
        const categoriedInsite = result.data.listInsites.items.filter(item => item.category === 5);
        newState.insite = categoriedInsite[Math.floor(Math.random() * categoriedInsite.length)];
        await Auth.currentSession()
        .then(data => newState.username = data.getIdToken().payload['cognito:username'])
        .catch(err => console.log(err));

        this.setState({
            insite: newState.insite.contents,
            username: newState.username
        })
    }

    render() {
        const data = [
            {name: "6/1", value: 5}, 
            {name: "5/31", value: 2}, 
            {name: "5/30", value: 3}, 
            {name: "5/29", value: 5}, 
            {name: "5/28", value: 4}];
        return (
            <div className="insite-box">
                <Insite insite={this.state.insite}/>
                <GraphNav username={this.state.username} />
                <Graph data={data}/>
            </div>
        );
    }    
}

export default Container;
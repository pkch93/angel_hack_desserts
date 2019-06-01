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
        return (
            <div className="insite-box">
                <Insite insite={this.state.insite}/>
                <GraphNav username={this.state.username} />
            </div>
        );
    }    
}

export default Container;
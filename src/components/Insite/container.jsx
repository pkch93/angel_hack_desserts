import React, { Component } from 'react';
import { Insite, GraphNav, Graph } from './presenter';

class Container extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="insite-box">
                <GraphNav />
                <Insite insite={'요 며칠 우울해 보였는데 오늘은 기분이 좋아 보여서 다행이에요!'}/>
            </div>
        );
    }    
}

export default Container;
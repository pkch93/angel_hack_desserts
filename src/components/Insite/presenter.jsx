import React from 'react';
import './style.css'

export const Insite = props => (
    <div className="insite">
        {props.insite}
    </div>
);

export const GraphNav = props => (
    <div className="graph-nav">
        <h3 className="title">
            {props.username}님의 감정 리포트
        </h3>
        <h3>...</h3>
    </div>
);

export const Graph = props => (
    <div className="graph">
        
    </div>
);
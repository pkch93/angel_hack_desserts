import React from 'react';
import './style.css'
import { ComposedChart, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const coloredText = (text) => {
    const splitedText = text.split('\n');
    splitedText[1] = '<span class="colored">' + splitedText[1] + '</span>'
    return splitedText.join('<br>')
}

export const Insite = props => (
    <div className="insite" dangerouslySetInnerHTML={{__html: coloredText(props.insite)}}>
    </div>
);

export const GraphNav = props => (
    <div className="graph-nav">
        <h3 className="title">
            {props.username}님의 감정 리포트
        </h3>
        <h3 
            className="other"
        >...</h3>
    </div>
);



export const Graph = props => (
    <div className="graph">
        <div className="graph-legend">
            <h3><span className="text-pointer">&lt;</span> 4월 ~ 5월 <span className="text-pointer"> > </span></h3>
            <p><span className="week text-pointer">주간</span> | <span className="month text-pointer">월간</span></p>
        </div>
        <ComposedChart  width={500} height={500} data={props.data}>
            <Bar barSize={20} dataKey="value" fill="#ffdeeb" />
            <Line type="linear" dataKey="value" stroke="#343a40" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" tickMargin={10}/>
            <YAxis />
        </ComposedChart >
    </div>
);
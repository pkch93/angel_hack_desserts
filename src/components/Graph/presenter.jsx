import React from 'react';
import { ComposedChart, Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import './style.scss';

const Graph = ({ data, date }) => {
    return (
        <div className="graph">
            <div className="graph__header">
                <h3>감정 그래프</h3>
                {/* <span className="date">
                    <span className="text-pointer left">&lt;</span>
                    ${date.getFullYear()}.${date.getMonth() + 1}
                    <span className="text-pointer right">&rt;</span>
                </span> */}
                <p><span className="week text-pointer">주간</span> | <span className="month text-pointer">월간</span></p>
            </div>
            <ComposedChart width={300} height={350} data={data}>
                <Bar barSize={20} dataKey="value" fill="#ffdeeb" />
                <Line type="linear" dataKey="value" stroke="#343a40" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" tickMargin={10} />
                <YAxis />
            </ComposedChart>
        </div>
    )
};

export default Graph;

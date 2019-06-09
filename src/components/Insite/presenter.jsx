import React from 'react';
import { ComposedChart, Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import Calendar from 'components/Calendar';
import './style.scss'

const coloredText = (text) => {
    const splitedText = text.split('\n');
    splitedText[1] = '<span class="colored">' + splitedText[1] + '</span>'
    return splitedText.join('<br>')
}

const Sentence = ({ sentence }) => (
    <div
        className="sentence"
        dangerouslySetInnerHTML={{ __html: coloredText(sentence) }}
    >
    </div>
);

const InsiteNav = ({ username }) => (
    <div className="insite-nav">
        <h3 className="title">
            {username}님의 감정 리포트
        </h3>
        <h3 className="other">...</h3>
    </div>
);

const Graph = ({ data }) => {
    return (
        <div className="graph">
            <div className="graph__header">
                <h3>감정 그래프</h3>
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

export const Insite = ({ username, sentence, moodData, date }) => (
    <div className="insite-box">
        <Sentence sentence={sentence} />
        <InsiteNav username={username} />
        <div className="visual-components">
            <Graph data={moodData} />
            <Calendar date={date} moodData={moodData}/>
        </div>
    </div>
);
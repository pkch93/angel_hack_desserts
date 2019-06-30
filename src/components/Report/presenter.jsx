import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import './style.scss';

const CHART_COLORS = ['#ffa94d', '#ffdeeb', '#ff8787', '#8ce99a', '#a5d8ff'];
const PALETTE_COLORS = ['orange', 'pink', 'red', 'green', 'blue'];

const ReportHeader = ({ username, month }) => (
    <div className="report__header">
        <h5>{username}님의 MONTHLY REPORT</h5>
        <h5>{month}월</h5>
    </div>
);

const ReportInsite = ({ username, month, score }) => (
    <div className="report__insite">
        <h5><span className="text--pink">{month}월</span>의 인사이트</h5>
        <h3>이번 달은 {username}님의 마음이 <span className="text--pink">{(score / 100) * 100}%</span>만큼 여유로웠어요.</h3>
    </div>
);

const generateChartLine = () => {
    const lines = [];
    for (let i = 0; i < 5; i++) {
        lines.push(<Line key={i} type="monotone" dataKey={`${i+1}주차`} stroke={`${CHART_COLORS[i]}`} />)
    }
    return lines;
};

const ReportChart = ({ data }) => {
    const chartLines = generateChartLine();
    return (
        <div className="report__charts">
            <h5>주간별 차트</h5>
            <LineChart width={700} height={300} data={data}
                margin={{ top: 10, right: 25, left: 25, bottom: 10}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                { chartLines }
            </LineChart>
        </div>
    );
};


const processWeekData = (data) => {
    const weekName = ["1주차", "2주차", "3주차", "4주차", "5주차"];
    const weekData = [];
    for (let i = 0; i < 5; i++) {
        let score = 0;
        for (let week of data) {
            score += week[weekName[i]];
        }
        weekData.push(score);
    }
    return weekData;
};

const ReportFooter = ({ data }) => {
    const colorPalette = PALETTE_COLORS.map(( color, i ) => (
        <div key={i} className="week-color">
            <span className={`palette color--${color}`}></span>
            <span>{i+1}주차</span>
        </div>
    ));

    const dates = [new Date(2019, 3, 29), new Date(2019, 4, 6), new Date(2019, 4, 13), new Date(2019, 4, 20), new Date(2019, 4, 27), new Date(2019, 5, 2)];

    const weeksData = processWeekData(data);
    const renderData = weeksData.map((score, i) => {
        return (
            <div key={i} className="week--section">
                <div><span className="week--name">{i+1}주차</span> | <span className="week--range">{dates[i].getMonth() + 1}월 {dates[i].getDate()}일 ~ {dates[i+1].getMonth() + 1}월 {dates[i+1].getDate() - 1}일</span></div>
                <div>
                    <span className="heart">♥</span><span className="week--score">마음 {(score / 100) * 100 + 40}%</span>
                </div>
            </div>
        );
    });

    return (
        <div className="report__footer">
            <div className="colors">
                { colorPalette }
            </div>
            <div className="weeks">
                { renderData }
            </div>
        </div>
    );
};

export default ({ username, month, score, data }) => (
    <div className="report">
        <ReportHeader
            username={username}
            month={month}
        />
        <ReportInsite
            username={username}
            month={month}
            score={score}
        />
        <ReportChart
            data={data}
        />
        <ReportFooter
            data={data}
        />
    </div>
);
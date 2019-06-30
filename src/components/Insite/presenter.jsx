import React from 'react';

import Calendar from 'components/Calendar';
import Graph from 'components/Graph';

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

const InsiteNav = ({ username, insitemenu, onClickInsiteNav, onClickToggleComponent }) => (
    <div className="insite-nav">
        <h3 className="title">
            {username}님의 감정 리포트
        </h3>
        <h3 className="other">
            <span onClick={onClickInsiteNav}>...</span>
            <div className={`insite-popup ${insitemenu ? "" : "invisible"}`}>
                <span onClick={onClickToggleComponent}>다르게 보기</span>
                <a href="/report" target="_blank">리포트 추출</a>
            </div>
        </h3>
    </div>
);

const VisualComponents = ({ moodData, date, calendar, graph }) => (
    <>
        <Graph data={moodData} graph={graph} />
        <Calendar date={date} moodData={moodData} calendar={calendar} />
    </>
);

export const Insite = ({ username, sentence, moodData, date, calendar, graph, insitemenu,
    onClickInsiteNav, onClickToggleComponent }) => (
    <div className="insite-box">
        <Sentence sentence={sentence} />
        <InsiteNav
            username={username}
            insitemenu={insitemenu}
            onClickInsiteNav={onClickInsiteNav} 
            onClickToggleComponent={onClickToggleComponent}
        />
        <div className="visual-components">
            <VisualComponents
                moodData={moodData}
                date={date}
                calendar={calendar}
                graph={graph}
            />
        </div>
    </div>
);
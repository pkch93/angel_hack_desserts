import React from 'react';
import './style.css'

export const Question = props => (
    <h3 className="question">
        {props.question}
    </h3>
);

export const Button = props => (
    <button className={`btn btn--${props.btnType}`}>
        {props.btnContent}
    </button>
);

const toLocaleString = (date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}

export const QuestionHeader = props => (
    <nav className="question-nav">
        <h2 className="date">
            {toLocaleString(new Date())}
        </h2>
        <h3 className="other-question">
            다른 질문 대답하기 >
        </h3>
    </nav>  
);
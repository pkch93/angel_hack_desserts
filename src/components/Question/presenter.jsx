import React from 'react';
import './style.scss'

const Question = props => (
    <h3 className="question">
        {props.question}
    </h3>
);

const Button = props => (
    <button 
        className={`btn btn--${props.btnType}`}
        value={props.value}
        onClick={props.onClick}
    >
        {props.btnContent}
    </button>
);

const toLocaleString = (date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}

const QuestionHeader = props => (
    <nav className="question-nav">
        <h2 className="date">
            {toLocaleString(new Date())}
        </h2>
        <h3 
            className="other-question"
            onClick={props.skip}
        >
            다른 질문 대답하기 >
        </h3>
    </nav>  
);

export default ({ handleSkip, handleBtnClick, question, yes, no }) => (
    <div className="question-block">
        <QuestionHeader skip={handleSkip} />
        <Question question={question}/>
        <div className="btns">
            <Button 
                btnType="no"
                btnContent="아니오"
                value={no}
                onClick={handleBtnClick}
            />
            <Button 
                btnType="yes"
                btnContent="예"
                value={yes}
                onClick={handleBtnClick}
            />
        </div>
    </div>
);
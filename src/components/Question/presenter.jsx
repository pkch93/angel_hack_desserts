import React from 'react';
import './style.css'

export const Question = props => (
    <h3 className="question">
        {props.question}
    </h3>
);
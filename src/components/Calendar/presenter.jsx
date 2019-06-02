import React from 'react';
import './style.css';

const Calendar = (props) => {

    const numbers = Array.from(Array(31), (value, idx) => idx + 1);
    const days =  numbers.map(num => <li className="daySpace" key={num}>{num}</li>);
    for (let i = 0; i < 2; i++) {
        days.unshift(<li className="daySpace" key={i+31}></li>)
    }

    return (
        <div className="calendar">
            <div className="wrapper"> 
                <h3 className="month">2019년 5월</h3>
                <ul class="days">
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                    <li>S</li>
                </ul>
                <ul className="num-days">
                    {days}
                </ul>
            </div>
        </div>
    )};

export default Calendar;
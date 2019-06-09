import React from 'react';
import './style.scss';

const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WEN', 'THR', 'FRI', 'SAT'];
const WEEKDAYS = 7;
const BLANK_DATE_DEFAULT_KEY = 100;

// 마지막 날짜 구해주는 method
const calculateLastDayOfMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// calendar와 moodData를 비교하여 score 색칠하는 method, 이때 날짜는 list의 content와 비교
// 날짜 하나를 관리하는 Date 컴포넌트 분리 고려
const fillColor = (day, moodData) => {
    const target = moodData.find(({ targetDay }) => day === targetDay.getDate());
    if (target) {
        const { score } = target;
        if (score > 8) {
            return 'date--high';
        } else if (score > 6) {
            return 'date--midhigh';
        } else if (score > 4) {
            return 'date--mid';
        } else if (score > 2) {
            return 'date--low';
        }
    }
};

// 해당 월에 맞게 calendar를 그려주는 메서드
const makeCalendar = ({ date, moodData }) => {
    const calendar = [];
    const start = date.getDay()
    for (let i = 0; i < start; i++) {
        calendar.push(
            <li 
                key={BLANK_DATE_DEFAULT_KEY + i} 
                className="date date--blank">
            </li>
        );
    }

    const last = calculateLastDayOfMonth(date);
    for (let i = 1; i <= last; i++) {
        calendar.push(
            <li 
                key={i} 
                className={`date 
                ${(start + i) % WEEKDAYS === 0 ? 'date--sun' : ''}
                ${fillColor(i, moodData)}    
                `}
            >
                {i}
            </li>
        );
    }

    return (
        <ul className="calendar__body">
            {calendar}
        </ul>
    );
};

// 캘린더 상단의 날짜 이름
const CalendarHeader = () => {
    const headers = DAY_NAMES.map((day, idx) => (
        <li 
            key={idx}
            className="date date--name">
            {day}
        </li>
    ));
    return (
        <ul className="calendar__header">
            {headers}
        </ul>
    );
};

// target은 년도와 월 정보가 있어야한다. moodData는 해당 월에 대해 날짜와 score 정보가 필요
const Calendar = ({ target, moodData }) => {
    const CalendarBody = makeCalendar(makeCalendar(target), moodData);
    return (
        <div className="calendar">
            <CalendarHeader />
            <CalendarBody />
        </div>
    );
};

export default Calendar;
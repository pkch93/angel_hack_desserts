import React from 'react';
import './style.css'

const Nav = props => (
    <nav>
        <div className="logout" onClick={props.logout}>로그아웃</div>
    </nav>
);

export default Nav;
import React from 'react';
import './style.scss';
import { relative } from 'path';

export const LoginForm = (props) => (
    <div className="login">
        <form action="" method="POST">
            <label htmlFor="username">
                아이디:
                <input 
                    id="username" 
                    type="text" 
                    name="username"
                    onChange={props.onChange}
                 />
            </label>
            <label htmlFor="password">
                비밀번호:
                <input 
                    id="password"
                    type="password"
                    name="password"
                    onChange={props.onChange}    
                />
            </label>
            <button type="submit" onClick={props.login}>로그인</button>
        </form>
    </div>
);


export const AmplifyCustomAuthTheme = {
    container: {
        position: 'absolute',
        top: '25%',
        left: '35%'
    },
    sectionHeader: {
        fontSize: '20px'
    }
}
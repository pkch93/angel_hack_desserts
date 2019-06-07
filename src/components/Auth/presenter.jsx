import React from 'react';
import './style.scss';

const LoginForm = (props) => (
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

export default LoginForm;
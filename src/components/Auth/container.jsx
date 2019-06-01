import React, { Component } from 'react';
import LoginForm from './presenter';

import Amplify, { I18n } from 'aws-amplify';
import aws_exports from '../../aws-exports'
import { Authenticator, SignIn, SignUp } from 'aws-amplify-react';
Amplify.configure(aws_exports);
I18n.setLanguage('ko')
I18n.putVocabularies({
    ko: {
        'Sign In': '로그인',
    }
})

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        const myTheme = {

        }

        return (
            <Authenticator>
            </Authenticator>
        );
    }
}

export default Container;
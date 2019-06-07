import React from 'react';
import LoginForm from 'components/Auth';
import Question from 'components/Question';
import 'reset-css';
import 'shared/index.css'
import './style.scss';

const App = () => {
  return (
    <div className="container">
      <LoginForm />
      <Question />
    </div>
  );
}

export default App;

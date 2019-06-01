import React from 'react';
import LoginForm from '../Auth';
import Question from '../Question';

const App = () => {
  return (
    <div className="container">
      <h1>Hello world!</h1>
      <LoginForm />
      <Question />
    </div>
  );
}

export default App;

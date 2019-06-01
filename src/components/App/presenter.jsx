import React from 'react';
import LoginForm from '../Auth';
import Question from '../Question';

const App = () => {
  return (
    <div className="container">
      <LoginForm />
      <Question />
    </div>
  );
}

export default App;

import React from 'react';
import LoginForm from '../Auth';
import Question from '../Question';
import Nav from '../Nav';
import './style.css'

const App = () => {
  return (
    <div className="container">
      <Nav />
      <LoginForm />
      <Question />
    </div>
  );
}

export default App;

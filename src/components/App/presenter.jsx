import React from 'react';
import { Route } from 'react-router-dom';

import Auth from 'components/Auth';
import Question from 'components/Question';
import 'reset-css';
import 'shared/index.css'
import './style.scss';

const App = () => {
  return (
    <div className="container">
      <Route exact path="/" component={Auth} />
      <Route exact path="/main" component={Question} />
    </div>
  );
}

export default App;

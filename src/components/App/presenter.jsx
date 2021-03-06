import React from 'react';
import { Route } from 'react-router-dom';

import Auth from 'components/Auth';
import Question from 'components/Question';
import Insite from 'components/Insite';
import Report from 'components/Report';
import Nav from 'components/Nav';

import 'reset-css';
import 'shared/index.css'
import './style.scss';

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Route exact path="/" component={Auth} />
        <Route exact path="/main" component={Question} />
        <Route exact path="/insite" component={Insite} />
        <Route exact path="/report" component={Report} />
      </div>
    </>
  );
}

export default App;

import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container'; 
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1 className="headerH1">kikkr</h1>
      <GreetingContainer/>
    </header>
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
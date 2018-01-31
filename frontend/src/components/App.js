import React, { Component } from 'react';
import { LandingPage, SignupPage, LoginPage, ForgotPage, PricingPage, LivePage, CompanyPage, SettingPage } from 'components';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/forgot" component={ForgotPage}/>
        <Route path="/pricing" component={PricingPage}/>
        <Route path="/live" component={LivePage}/>
        <Route path="/company" component={CompanyPage}/>
        <Route path="/setting" component={SettingPage}/>
      </div>
    );
  }
}

export default App;
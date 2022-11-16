import React, { Component } from 'react'
import Dashboard from '../../Pages/Dashboard';
import Header from '../Header';
import Footer from '../Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
        <div>   
          <Header />
          <Switch>
            <Route path= "/dashboard" component={Dashboard} />
            <Redirect to="/dashboard" />
          </Switch>
          <Footer />
        </div>
      );
  }
}

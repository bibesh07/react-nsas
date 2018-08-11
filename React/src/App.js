import React, { Component } from 'react';
import { Layout } from './Components/Layout';
import { Index } from './Components/Index/Index';
import { Login } from './Components/Login/Index';
import { Route } from 'react-router';
import {PhotoGallery} from "./Components/Gallery/Index";

export default class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      let adminNavBar = (localStorage.getItem('token').length > 0) ? 'Panama' : '';
    return (
      <Layout>
          {adminNavBar}
          <Route exact path='/' component={Index} />
          <Route path='/login' component={Login} />
          <Route path='/gallery' component={PhotoGallery} />
      </Layout>
    );
  }
}
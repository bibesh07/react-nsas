import React, { Component } from 'react';
import { Layout } from './Components/Layout';
import { Index } from './Components/Index/Index';
import { Route } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route path='/' component={Index} />
      </Layout>
    );
  }
}
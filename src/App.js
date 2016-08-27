/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './Store'
import ContainerTemplate from './containers/ContainerTemplate'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerTemplate />
      </Provider>
    );
  }
}

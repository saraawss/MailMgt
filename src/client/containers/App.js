import React, { Component } from 'react';
import '../style/app.css';
import Header from '../components/header/Header';
import Form from '../components/form/Form';

export default class App extends Component {
  state = { username: null };

  render() {
    const { username } = this.state;
    return (
      <div>
        <Header />
        <Form />
               
      </div>
    );
  }
}

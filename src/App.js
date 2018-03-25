import React, { Component } from 'react';
import chain from './chain.svg';
import './App.css';
import Layout from '../src/containers/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>A visual approach to BlockChains using React</h1>
          <img src={chain} className="App-logo" alt="chain" />
        </header>
        <div>
         <Layout />
         </div>
      </div>
    );
  }
}

export default App;

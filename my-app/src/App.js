
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from './state.js'
import App3 from './state2.js'
import Clock from './ex.js'
import LoginControl from './loginControl.js';
import LogoutButton from './loginButton.js';
import LoginButton from './loginButton.js';
import List from './list.js';
import Calculator from './liftingstate.js';
import Contacts from './Comp.js';
import BasicExample from './Router.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <App2/>
        <App3/>
        <Clock />
        <LoginButton />
        <LoginControl />
        <LogoutButton />
        <List/> 
        <Calculator />
        <Contacts/>
        <BasicExample/>
        
 </div>
    )
  }
}
export default App;

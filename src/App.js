import React, { Component } from 'react';
import './App.css';+
import {fire , store } from './config/Fire';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  ComponentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user){
        this.setState({ user });
        localStorage.removeItem('user');
      } else {
        this.setState({ user: null});
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}        
      </div>
    );
  }
}

export default App;

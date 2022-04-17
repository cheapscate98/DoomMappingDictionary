import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'

 export default function App() {
  return (
    <div className="App">
	<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
    </div>
  );
}

//export default withAuthenticator(App);
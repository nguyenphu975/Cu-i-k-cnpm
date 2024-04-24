import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo1403 from './components/demo1403';
import Demo2103 from './components/demo2103';
import LoginComponent from './components/demo2803';
import Test1 from './components/demo1104';
function App() {
  return (
    <div>
      {/* {localStorage.getItem('userName') == 'admin' ?
        <Demo2103 /> : <Demo2103 />
      } */}
      <Test1/>

    </div>
  )
}

export default App;

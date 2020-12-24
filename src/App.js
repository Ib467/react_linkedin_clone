import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed'

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build a LinkedIn Clone</h1> */}

      {/* <Header /> */}
      <Header /> 

      {/* App Body */}
      <div className="app__body" >
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
        <Sidebar />
        <Feed />
      </div>
      

    </div>
  );
}

export default App;

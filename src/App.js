import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build a LinkedIn Clone</h1> */}

      {/* <Header /> */}
      <Header /> 

      {/* App Body */}
      <div className="app__body" >
        {/* Sidebar */}
        <Sidebar />

      </div>
        {/* Feed */}
        {/* Widgets */}

    </div>
  );
}

export default App;

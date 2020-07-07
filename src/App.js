import React from 'react';
import logo from './logo.svg';
import rbg from './rbg.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Supreme Court News
        </h1>
        <img src={rbg} 
        className="Rbg-photo"
        alt="Ruth" />
        <p>
        What have Ruth and the gang been up to lately?
        </p>
      </header>
    </div>
  );
}

export default App;

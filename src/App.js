import './App.css';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import Main from './MainComponents';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import './App.css';
import GridSquare from './components/GridSquare';
import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';
import MessagePopup from './components/MessagePopup';

function App() {
  return (
    <Provider >
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard/>
        <NextBlock/>
        <ScoreBoard/>
        <Controls/>
        <MessagePopup/>
      </div>
    </Provider>
  );
}

export default App;

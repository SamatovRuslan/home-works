import './App.css';
import React from 'react';
import {Button} from './components/Button/Button'
import {Counter} from './components/Count/Count'

function App() {

  return (
    <div className="App">
      <Counter counter="0"/>
      <Button title="+"/>
      <Button title='-'/>
      <Counter/>
    </div>
  )
}

export default App;

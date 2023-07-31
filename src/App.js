import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('Hà')
  const [addrees, setAddrees] = useState('')
  const handldeOnClick = (event) => {
    console.log(addrees)
    setName(addrees)
  }
  const handleOnChangeInput = (event) => {
    setAddrees(event.target.value)

  }
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Xin Chào {name}</h1>
          <input type='text' value={addrees} onChange={(event) => handleOnChangeInput(event)} />
          <button type='button'
            onClick={(event) => handldeOnClick(event)}
          >Click me</button>
        </header>
      </div>
    </>
  );
}

export default App;

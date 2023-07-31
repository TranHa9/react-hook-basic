import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {
  let [name, setName] = useState('Hà')
  const [addrees, setAddrees] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Playing Game' },
    { id: 'todo2', title: 'Home Word' },
    { id: 'todo3', title: 'Fix Bus' }
  ])

  const handldeOnClick = (event) => {
    if (!addrees) {
      alert("miss")
      return;
    }
    let newTodo = { id: '', title: addrees }
    setTodos([...todos, newTodo])
    setAddrees('');
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
          <Todo
            todos={todos}

          />
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

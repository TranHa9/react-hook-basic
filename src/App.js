import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  let [name, setName] = useState('Hà')
  const [addrees, setAddrees] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Playing Game', type: 'Ha' },
    { id: 'todo2', title: 'Home Word', type: 'Nhung' },
    { id: 'todo3', title: 'Fix Bus', type: 'YEU' }
  ]);

  useEffect(() => {
    console.log("run use effect");
  }, [addrees]);

  const handldeOnClick = (event) => {
    if (!addrees) {
      alert("miss")
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 101), title: addrees, type: '' }
    setTodos([...todos, newTodo])
    setAddrees('');
  }
  const handleOnChangeInput = (event) => {
    setAddrees(event.target.value)

  }
  const handldeDeleteTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimeUp = () => {
    alert("time up")
  }
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            {/*
           */}
            {/* <Todo
            todos={todos}
            title={'All Title'}
            handldeDeleteTodo={handldeDeleteTodo}
          />
          <Todo
            todos={todos.filter(item => item.type === 'Ha')}
            title={`Ha todo`}
            handldeDeleteTodo={handldeDeleteTodo}
          />
          <input type='text' value={addrees} onChange={(event) => handleOnChangeInput(event)} />
          <button type='button'
            onClick={(event) => handldeOnClick(event)}
          >Click me</button> */}
            <Switch>
              <Route path="/" exact>
                <Covid />
              </Route>
              <Route path="/Countdown">
                <CountDown
                  onTimeUp={onTimeUp}
                />
                <span>------------</span>
                <NewCountDown onTimeUp={onTimeUp} />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    </>
  );
}

export default App;

import React, { Component } from 'react'
import './App.css'

import TodoListCtn from './components/TodoListCtn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListCtn />
      </div>
    )
  }
}

export default App;

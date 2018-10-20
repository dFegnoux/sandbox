import React, { Component } from 'react'
import ListItem from './ListItem'

import './TodoList.css'

class TodoListCtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      inputValue: ''
    }
  }
  
  updateInputValue = ({ currentTarget: { value } }) => {
    this.setState({
      inputValue: value
    })
  }

  addItem = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
      inputValue: '' // Reset inputValue
    })
  }

  removeItem = (index) => {
    const newTodoList = [...this.state.todoList]
    newTodoList.splice(index, 1)
    this.setState({
      ...this.state,
      todoList: newTodoList
    })
  }

  render() {
    return (
        <div className="todolist-container">
            <div className="todolist-list">
              {!this.state.todoList.length && <div>Il n'y a rien dans la liste :(</div>}
              {this.state.todoList.map((item, index) => <ListItem key={index} index={index} item={item} removeItem={this.removeItem}/>)}
            </div>
            <div className="input-wrapper">
              <input value={this.state.inputValue} placeholder="Qu'est-ce que vous devez faire aujourd'hui ?" onChange={this.updateInputValue}/>
              <button onClick={this.addItem}>Ajouter</button>
            </div>
        </div>
    )
  }
}

export default TodoListCtn

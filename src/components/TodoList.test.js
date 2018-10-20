import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'

import TodoListCtn from './TodoListCtn'

describe('TodoListCtn', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoListCtn />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('functions', () => {
    const testRenderer = TestRenderer.create(<TodoListCtn />);
    const testInstance = testRenderer.getInstance();
    const mockedInputValue = 'test'
    
    testInstance.updateInputValue({currentTarget: {value: mockedInputValue}})
    it('updates state', () => {
      expect(testInstance.state.inputValue).toBe(mockedInputValue)
    })
    it('add item to the list', () => {
      testInstance.addItem()
      expect(JSON.stringify(testInstance.state.todoList)).toBe(`[\"${mockedInputValue}\"]`)  
    })
    it('remove item from the list', () => {
      testInstance.removeItem(0)
      expect(JSON.stringify(testInstance.state.todoList.length)).toBe('0')  
    })
  })
})
import React, { Component } from 'react';

import Header from './components/Header'
// import Header from './components/Header/solution'
import CustomInput from './components/Input'
// import CustomInput from './components/Input/solution'
import CustomList from './components/List'
// import CustomList from './components/List/solution'

import '@fortawesome/fontawesome-free/css/all.css'
import styles from './index.module.css'

export default class App extends Component {
  state = {
    todos: [],
    showInput: false
  }

  updateState = data => this.setState(data)

  fetchAndSetState = () => {
    this.timer = setTimeout(() => this.setState({
      todos: [
        'Go to potions class',
        'Buy new robes',
        'Visit Hagrid'
      ]
    }), 1000)
  }

  componentDidMount() {
    this.fetchAndSetState()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { todos, showInput } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.todoList} >
          <Header onClick={() => this.updateState({ showInput: !showInput })} />
          <CustomInput
            type='text'
            placeholder='Add New Todo'
            todos={todos}
            uodateTodosProp={this.updateState}
            showInput={showInput}
          />
          <CustomList todos={todos} updateTodosProp={this.updateState} />
        </div>
      </div>
    )
  }
}

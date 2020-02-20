import React, { createContext, Component } from 'react'

const context = createContext()
export const { Consumer } = context

export default class ProviderComponent extends Component {
  state = {
    todos: [],
    showInput: false
  }

  updateContextState = data => this.setState(data)

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
    const store = {
      ...this.state,
      updateContextState: this.updateContextState
    }

    return (
      <context.Provider value={store}>
        {this.props.children}
      </context.Provider>
    )
  }
}

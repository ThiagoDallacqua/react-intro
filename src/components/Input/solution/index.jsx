import React from 'react'
import classNames from 'classnames'

import styles from '../index.module.css'

class CustomInput extends React.Component {
  state = {
    todoText: '',
    error: false
  }

  onChange = ({ target: { value } }) => this.setState({ todoText: value })

  render() {
    const { type, placeholder, todos, uodateTodosProp, showInput } = this.props
    const { todoText, error } = this.state
    const inputStyles = validation => classNames(
      styles.inputComponent,
      {
        [styles.showInput]: validation,
        [styles.animationOpen]: validation,
        [styles.animationClose]: !validation,
        [styles.inputError]: error
      }
    )

    return (
      <input
        className={inputStyles(showInput)}
        type={type}
        placeholder={error ? 'You must type something!' : placeholder}
        value={todoText}
        onChange={this.onChange}
        onKeyPress={e => {
          if (e.which === 13) {
            if (todoText === '') {
              this.setState({ error: true })
            } else {
              uodateTodosProp({
                todos: [
                  ...todos,
                  todoText
                ]
              })
              this.setState({ todoText: '', error: false })
            }
          }
        }}
      />
    )
  }
}

export default CustomInput

import React from 'react'
import classNames from 'classnames'

import styles from '../index.module.scss'

class CustomListItem extends React.Component {
  state = {
    completed: false,
    fade: false
  }

  onComplete = () => this.setState({ completed: !this.state.completed })

  componentWillUnmount() {
    this.setState({ fade: false })
  }

  render() {
    const { text, updateTodosProp, todos } = this.props
    const { completed, fade } = this.state
    const iconStyles = classNames(
      styles.iconWrapper,
      styles.iconSpan
    )
    const deleteSpanStyles = classNames(
      iconStyles,
      styles.deleteButton
    )
    const completeSpanStyles = classNames(
      iconStyles,
      styles.completedButton
    )
    const liStyles = classNames(
      styles.listItem,
      {
        [styles.completed]: completed,
        [styles.animateFadeOut]: fade
      }
    )

    return (
      <li className={liStyles}>
        <span
          className={deleteSpanStyles}
          onClick={() => {
            this.setState({ fade: true })
            setTimeout(() => {
              const newTodos = todos.filter(todo => todo !== text)

              updateTodosProp({ todos: newTodos })
            }, 500)
          }}
        >
          <i className="fas fa-trash" />
        </span>
        <span
          className={completeSpanStyles}
          onClick={this.onComplete}
        >
          <i className='fa fa-check' />
        </span>
        {text}
      </li>
    )
  }
}

export default CustomListItem

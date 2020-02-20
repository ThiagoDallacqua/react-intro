import React from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

class CustomListItem extends React.Component {
  state = {
  }

  render() {
    // const iconStyles = classNames(
    //   styles.iconWrapper,
    //   { [styles.iconSpan]: hover }
    // )
    // const deleteSpanStyles = classNames(
    //   iconStyles,
    //   styles.deleteButton
    // )
    // const completeSpanStyles = classNames(
    //   iconStyles,
    //   styles.completedButton
    // )
    // const liStyles = classNames(
    //   styles.listItem,
    //   {
    //     [styles.completed]: completed,
    //     [styles.animateFadeOut]: fade
    //   }
    // )

    return (
      <li>
        <span>
          <i className="fas fa-trash" />
        </span>
        <span>
          <i className='fa fa-check' />
        </span>
        I should come from the props...
      </li>
    )
  }
}

export default CustomListItem

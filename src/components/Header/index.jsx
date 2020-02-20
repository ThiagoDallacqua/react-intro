import React from 'react'
import classNames from 'classnames';

import styles from './index.module.css'

class Header extends React.Component {
  state = {
  }

  onMouseEnter = () => console.log('hi there')

  onMouseLeave = () => console.log('hi there')

  render() {
    const { onClick } = this.props
    const iconStyles = classNames(
      'fa',
      'fa-plus',
      styles.addButton,
      // {
      //   [styles.animateToRight]: enter,
      //   [styles.animateToLeft]: leave,
      // }
    )

    return (
      <div className={styles.title}>
        todo-list
        <i
          className={iconStyles}
          onClick={onClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </div>
    )
  }
}

export default Header

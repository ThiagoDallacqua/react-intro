import React from 'react'
import classNames from 'classnames'

import styles from './index.module.css'

export default class CustomInput extends React.Component {
  state = {
  }

  render() {
    const placeholderOrErrorMessage = 'Please make me work...';
    // const inputStyles = validation => classNames(
    //   styles.inputComponent,
    //   {
    //     [styles.showInput]: validation,
    //     [styles.animationOpen]: validation,
    //     [styles.animationClose]: !validation,
    //     [styles.inputError]: error
    //   }
    // )

    return (
      <input
        // className={inputStyles(showInput)}
        placeholder={placeholderOrErrorMessage}
      />
    )
  }
}

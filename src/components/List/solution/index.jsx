import React from 'react'

import CustomListItem from '../../ListItem/solution'

import styles from '../index.module.css'

const CustomList = ({ todos, updateTodosProp }) => {
  return (
    <ul className={styles.list}>
      {
        todos.map((todo, i) => (
          <CustomListItem
            key={i}
            text={todo}
            updateTodosProp={updateTodosProp}
            todos={todos}
          />
        ))
      }
    </ul>
  )
}

export default CustomList

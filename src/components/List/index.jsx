import React from 'react'

import CustomListItem from '../ListItem'
// import CustomListItem from '../ListItem/solution'

import styles from './index.module.css'

const CustomList = ({ todos, updateTodosProp }) => (
  <ul className={styles.list}>
    You should do something here to show the list!
  </ul>
)

export default CustomList

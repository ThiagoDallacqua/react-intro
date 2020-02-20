import React, { Component, useState, useEffect, memo, createContext, useContext } from 'react';
import uuid from 'uuid'

import CustomInput from './components/Input'
// import CustomInput from './components/Input/solution'
import CustomList from './components/List'
// import CustomList from './components/List/solution'

import '@fortawesome/fontawesome-free/css/all.css'
import styles from './index.module.css'

const Input = memo(({ value, onChange }) => {
  const [state, setState] = useState('')

  useEffect(() => (
    setState(value)
  ), [value])

  return (
    <input
      type="text"
      value={state}
      onChange={({ target: { value } }) => {
        setState(value)
        onChange(value)
      }}
    />
  )
})

const Li = memo(({ children }) => (
  <li>
    {children}
  </li>
))

// export default class App extends Component {
//   state = {
//     todos: [
//       'Go to potions class',
//       'Buy new robes',
//       'Visit Hagrid'
//     ],
//     showInput: false
//   }

//   updateState = data => this.setState(data)

//   updateTodos = (newTodo, idx) => {
//     const newTodos = this.state.todos
    
//     newTodos[idx] = newTodo

//     this.setState({ todos: newTodos })
//   }

//   render() {
//     const { todos } = this.state

//     return (
//       <div className={styles.container}>
//         <div className={styles.todoList}>
//           {
//             todos.map((todo, i) => (
//               <Input key={i} value={todo} onChange={newTodo => this.updateTodos(newTodo, i)} />
//             ))
//           }
//           {/* <CustomList todos={todos} updateTodosProp={this.updateState} /> */}
//           <ul>
//             {
//               todos.map(todo => (
//                 <Li>{todo}</Li>
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

const App = () => {
  // STATE
  const [todos, setTodos] = useState([
    'Go to potions class',
    'Buy new robes',
    'Visit Hagrid'
  ]);

  // CALLBACK
  const updateTodos = (newTodo, i) => setTodos(todos.map((todo, idx) => {
    if (idx === i) todo = newTodo

    return todo
  }))

  return (
    <div className={styles.container}>
      <div className={styles.todoList}>
        {
          todos.map((todo, i) => (
            <Input
              key={i}
              value={todo}
              onChange={newTodo => updateTodos(newTodo, i)}
            />
          ))
        }
        {/* <CustomList todos={todos} updateTodosProp={this.updateState} /> */}
        <ul>
          {
            todos.map((todo, i) => (
              <Li key={i * 100}>{todo}</Li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
